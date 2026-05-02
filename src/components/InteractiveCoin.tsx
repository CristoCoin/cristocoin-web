"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CanvasTexture,
  DoubleSide,
  Group,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  RepeatWrapping,
  SRGBColorSpace,
  Texture,
  TextureLoader,
} from "three";

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
    canvas.width = 2048;
    canvas.height = 128;

    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#3b2206");
    gradient.addColorStop(0.12, "#70430c");
    gradient.addColorStop(0.26, "#b47a1d");
    gradient.addColorStop(0.38, "#f0c66a");
    gradient.addColorStop(0.5, "#ffe9a3");
    gradient.addColorStop(0.62, "#d3952f");
    gradient.addColorStop(0.78, "#875312");
    gradient.addColorStop(1, "#2b1603");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Estrías finas de moneda
    for (let x = 0; x < canvas.width; x += 8) {
      ctx.fillStyle =
        x % 16 === 0
          ? "rgba(255, 236, 170, 0.28)"
          : "rgba(60, 30, 0, 0.12)";
      ctx.fillRect(x, 0, 2, canvas.height);
    }

    // Brillos suaves para dar sensación metálica
    for (let x = 0; x < canvas.width; x += 120) {
      const shine = ctx.createLinearGradient(x, 0, x + 34, 0);
      shine.addColorStop(0, "rgba(255,255,255,0)");
      shine.addColorStop(0.5, "rgba(255,236,170,0.2)");
      shine.addColorStop(1, "rgba(255,255,255,0)");

      ctx.fillStyle = shine;
      ctx.fillRect(x, 0, 34, canvas.height);
    }

    // Sombra superior e inferior para volumen
    const shade = ctx.createLinearGradient(0, 0, 0, canvas.height);
    shade.addColorStop(0, "rgba(0,0,0,0.3)");
    shade.addColorStop(0.2, "rgba(0,0,0,0.08)");
    shade.addColorStop(0.5, "rgba(255,255,255,0.02)");
    shade.addColorStop(0.8, "rgba(0,0,0,0.08)");
    shade.addColorStop(1, "rgba(0,0,0,0.32)");

    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const texture = new CanvasTexture(canvas);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(86, 1);
    texture.colorSpace = SRGBColorSpace;
    texture.needsUpdate = true;

    return texture;
  }, []);

  useEffect(() => {
    [frontTexture, backTexture].forEach((texture: Texture) => {
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
        metalness: 0.28,
        roughness: 0.5,
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
        metalness: 0.28,
        roughness: 0.5,
        side: DoubleSide,
        transparent: false,
        opacity: 1,
        depthWrite: true,
      }),
    [backTexture]
  );

  const sideMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        map: edgeTexture ?? undefined,
        color: "#c18a2d",
        metalness: 1,
        roughness: 0.34,
        clearcoat: 0.75,
        clearcoatRoughness: 0.22,
        reflectivity: 0.75,
        emissive: "#2e1800",
        emissiveIntensity: 0.035,
      }),
    [edgeTexture]
  );

  const rimMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: "#d6a842",
        metalness: 1,
        roughness: 0.3,
        clearcoat: 0.85,
        clearcoatRoughness: 0.18,
        reflectivity: 0.65,
        emissive: "#3a2200",
        emissiveIntensity: 0.025,
      }),
    []
  );

  useFrame(() => {
    if (!groupRef.current) return;

    const baseSpeed = 0.012;

    if (!isDraggingRef.current) {
      angleRef.current += velocityRef.current;
      velocityRef.current += (baseSpeed - velocityRef.current) * 0.04;
    }

    groupRef.current.rotation.y = angleRef.current;
  });

  return (
    <group ref={groupRef} position={[0, 0.02, 0]} scale={1.02}>
      {/* CANTO */}
      <mesh rotation={[Math.PI / 2, 0, 0]} material={sideMaterial}>
        <cylinderGeometry args={[1.18, 1.18, 0.24, 192, 1, true]} />
      </mesh>

      {/* CARA DELANTERA */}
      <mesh position={[0, 0, 0.1215]} rotation={[0, 0, 0]} material={frontMaterial}>
        <circleGeometry args={[1.145, 192]} />
      </mesh>

      {/* CARA TRASERA */}
      <mesh
        position={[0, 0, -0.1215]}
        rotation={[0, Math.PI, 0]}
        material={backMaterial}
      >
        <circleGeometry args={[1.145, 192]} />
      </mesh>

      {/* ARO PREMIUM FRONTAL */}
      <mesh position={[0, 0, 0.1225]} material={rimMaterial}>
        <ringGeometry args={[1.145, 1.185, 192]} />
      </mesh>

      {/* ARO PREMIUM TRASERO */}
      <mesh
        position={[0, 0, -0.1225]}
        rotation={[0, Math.PI, 0]}
        material={rimMaterial}
      >
        <ringGeometry args={[1.145, 1.185, 192]} />
      </mesh>
    </group>
  );
}

export function InteractiveCoin() {
  const [isDragging, setIsDragging] = useState(false);

  const angleRef = useRef(-0.35);
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
      // Pointer capture may already be released.
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
        className="interactive-coin-canvas"
        camera={{ position: [0, 0, 6.1], fov: 32 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <ambientLight intensity={1.05} />

        <directionalLight
          position={[4, 3, 5]}
          intensity={1.65}
          color="#ffe5b0"
        />

        <directionalLight
          position={[-3, 2, 4]}
          intensity={0.8}
          color="#8b5cf6"
        />

        <pointLight
          position={[2.4, 0.6, 4]}
          intensity={1.25}
          color="#ffd36b"
        />

        <pointLight
          position={[-2, -0.6, 3]}
          intensity={0.55}
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