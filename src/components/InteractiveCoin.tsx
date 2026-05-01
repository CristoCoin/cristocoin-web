"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import {
  CanvasTexture,
  DoubleSide,
  Group,
  MeshStandardMaterial,
  RepeatWrapping,
  SRGBColorSpace,
  TextureLoader,
} from "three";
type CoinModelProps = {
  angleRef: MutableRefObject<number>;
  velocityRef: MutableRefObject<number>;
  isDraggingRef: MutableRefObject<boolean>;
};

function CoinModel({
  angleRef,
  velocityRef,
  isDraggingRef,
}: {
  angleRef: React.MutableRefObject<number>;
  velocityRef: React.MutableRefObject<number>;
  isDraggingRef: React.MutableRefObject<boolean>;
}) {
  const groupRef = useRef<Group>(null);

  const frontTexture = useLoader(TextureLoader, "/cristocoin-hero.webp");
  const backTexture = useLoader(TextureLoader, "/cristocoin-hero.webp");

  const edgeTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 64;

    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const gradient = ctx.createLinearGradient(0, 0, 0, 64);
    gradient.addColorStop(0, "#8c5a12");
    gradient.addColorStop(0.18, "#f7df8a");
    gradient.addColorStop(0.38, "#c58a22");
    gradient.addColorStop(0.58, "#ffea9e");
    gradient.addColorStop(0.78, "#b77716");
    gradient.addColorStop(1, "#70430d");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < canvas.width; x += 10) {
      ctx.fillStyle =
        x % 20 === 0
          ? "rgba(255,245,190,0.65)"
          : "rgba(90,55,12,0.28)";
      ctx.fillRect(x, 0, 4, canvas.height);
    }

    const texture = new CanvasTexture(canvas);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(64, 1);
    texture.colorSpace = SRGBColorSpace;
    texture.needsUpdate = true;

    return texture;
  }, []);

 useEffect(() => {
  [frontTexture, backTexture].forEach((texture) => {
    texture.colorSpace = SRGBColorSpace;
    texture.center.set(0.5, 0.5);
    texture.rotation = 0;
    texture.repeat.set(1, 1);
    texture.offset.set(0, 0);
    texture.needsUpdate = true;
  });
}, [frontTexture, backTexture]);

const frontMaterial = useMemo(
  () =>
    new MeshStandardMaterial({
      map: frontTexture,
      metalness: 0.35,
      roughness: 0.42,
      side: DoubleSide,
      transparent: false,
      opacity: 1,
      depthWrite: true,
    }),
  [frontTexture]
);

const backMaterial = useMemo(
  () =>
    new MeshStandardMaterial({
      map: backTexture,
      metalness: 0.35,
      roughness: 0.42,
      side: DoubleSide,
      transparent: false,
      opacity: 1,
      depthWrite: true,
    }),
  [backTexture]
);
const sideMaterial = useMemo(
  () =>
    new MeshStandardMaterial({
      map: edgeTexture ?? undefined,
      color: "#f0c75a",
      metalness: 0.92,
      roughness: 0.24,
      emissive: "#5f3a00",
      emissiveIntensity: 0.14,
    }),
  [edgeTexture]
);

  useFrame(() => {
    if (!groupRef.current) return;

    const baseSpeed = 0.012;

    if (!isDraggingRef.current) {
      angleRef.current += velocityRef.current;
      velocityRef.current += (baseSpeed - velocityRef.current) * 0.025;
    }

    groupRef.current.rotation.y = angleRef.current;
  });

 return (
  <group ref={groupRef} position={[0, 0.02, 0]} scale={1.02}>
    {/* CANTO */}
    <mesh rotation={[Math.PI / 2, 0, 0]} material={sideMaterial}>
      <cylinderGeometry args={[1.18, 1.18, 0.24, 160, 1, true]} />
    </mesh>

    {/* CARA DELANTERA */}
    <mesh
      position={[0, 0, 0.121]}
      rotation={[0, 0, Math.PI]}
      material={frontMaterial}
    >
      <circleGeometry args={[1.181, 128]} />
    </mesh>

    {/* CARA TRASERA */}
    <mesh
      position={[0, 0, -0.121]}
      rotation={[0, Math.PI, Math.PI]}
      material={backMaterial}
    >
      <circleGeometry args={[1.181, 128]} />
    </mesh>
  </group>
);
}
export function InteractiveCoin() {
  const [isDragging, setIsDragging] = useState(false);

  const angleRef = useRef(-0.42); // empieza con un ángulo bonito, no totalmente plano
  const velocityRef = useRef(0.012);
  const isDraggingRef = useRef(false);
  const lastPointerX = useRef(0);

  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    setIsDragging(true);
    isDraggingRef.current = true;
    lastPointerX.current = event.clientX;
    velocityRef.current = 0;

    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDraggingRef.current) return;

    const deltaX = event.clientX - lastPointerX.current;
    lastPointerX.current = event.clientX;

    angleRef.current += deltaX * 0.012;
    velocityRef.current = deltaX * 0.0032;
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    setIsDragging(false);
    isDraggingRef.current = false;

    const minBoost = 0.012;
    const maxBoost = 0.12;

    if (Math.abs(velocityRef.current) < minBoost) {
      velocityRef.current = velocityRef.current >= 0 ? minBoost : -minBoost;
    }

    velocityRef.current = Math.max(
      -maxBoost,
      Math.min(maxBoost, velocityRef.current)
    );

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // no pasa nada si ya se soltó
    }
  }

  return (
    <div
      className={`interactive-coin-zone ${isDragging ? "is-dragging" : ""}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role="button"
      tabIndex={0}
      aria-label="Interactive CristoCoin 3D coin"
    >
      <Canvas
        camera={{ position: [0, 0, 6.15], fov: 30 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={1.55} />
        <directionalLight
          position={[4, 2.8, 4.5]}
          intensity={2.2}
          color="#fff4db"
        />
        <directionalLight
          position={[-3.5, 1.8, 3.5]}
          intensity={1.1}
          color="#9f67ff"
        />
        <pointLight
          position={[2.5, -0.5, 4]}
          intensity={1.4}
          color="#ffd46d"
        />
        <pointLight
          position={[0, 3.2, 3]}
          intensity={0.8}
          color="#ffffff"
        />

        <CoinModel
          angleRef={angleRef}
          velocityRef={velocityRef}
          isDraggingRef={isDraggingRef}
        />
      </Canvas>
    </div>
  );
}