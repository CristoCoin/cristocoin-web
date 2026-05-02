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

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0.0, "#2f1a05");
    gradient.addColorStop(0.08, "#6f430c");
    gradient.addColorStop(0.16, "#c28a20");
    gradient.addColorStop(0.26, "#f5d978");
    gradient.addColorStop(0.36, "#a76a17");
    gradient.addColorStop(0.5, "#ffeb99");
    gradient.addColorStop(0.64, "#b97818");
    gradient.addColorStop(0.78, "#f1d36c");
    gradient.addColorStop(0.9, "#7b4a0e");
    gradient.addColorStop(1.0, "#2a1704");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < canvas.width; x += 8) {
      ctx.fillStyle =
        x % 16 === 0
          ? "rgba(255, 245, 190, 0.34)"
          : "rgba(70, 40, 10, 0.22)";
      ctx.fillRect(x, 0, 3, canvas.height);
    }

    for (let x = 0; x < canvas.width; x += 96) {
      const shine = ctx.createLinearGradient(x, 0, x + 26, 0);
      shine.addColorStop(0, "rgba(255,255,255,0)");
      shine.addColorStop(0.5, "rgba(255,240,180,0.22)");
      shine.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = shine;
      ctx.fillRect(x, 0, 26, canvas.height);
    }

    const verticalShade = ctx.createLinearGradient(0, 0, 0, canvas.height);
    verticalShade.addColorStop(0, "rgba(0,0,0,0.24)");
    verticalShade.addColorStop(0.18, "rgba(0,0,0,0.05)");
    verticalShade.addColorStop(0.5, "rgba(255,255,255,0.02)");
    verticalShade.addColorStop(0.82, "rgba(0,0,0,0.05)");
    verticalShade.addColorStop(1, "rgba(0,0,0,0.24)");

    ctx.fillStyle = verticalShade;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const texture = new CanvasTexture(canvas);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(72, 1);
    texture.colorSpace = SRGBColorSpace;
    texture.needsUpdate = true;

    return texture;
  }, []);

  useEffect(() => {
    frontTexture.colorSpace = SRGBColorSpace;
    frontTexture.center.set(0.5, 0.5);
    frontTexture.rotation = 0;
    frontTexture.repeat.set(1, 1);
    frontTexture.offset.set(0, 0);
    frontTexture.needsUpdate = true;

    backTexture.colorSpace = SRGBColorSpace;
    backTexture.center.set(0.5, 0.5);
    backTexture.rotation = 0;
    backTexture.repeat.set(1, 1);
    backTexture.offset.set(0, 0);
    backTexture.needsUpdate = true;
  }, [frontTexture, backTexture]);

  const frontMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        map: frontTexture,
        metalness: 0.58,
        roughness: 0.3,
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
        metalness: 0.58,
        roughness: 0.3,
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
        color: "#d8a93a",
        metalness: 1,
        roughness: 0.22,
        clearcoat: 1,
        clearcoatRoughness: 0.16,
        emissive: "#5f3500",
        emissiveIntensity: 0.1,
      }),
    [edgeTexture]
  );

  const rimMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: "#ffe08a",
        metalness: 1,
        roughness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.12,
        emissive: "#6d4300",
        emissiveIntensity: 0.06,
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
      <mesh
        position={[0, 0, 0.1215]}
        rotation={[0, 0, 0]}
        material={frontMaterial}
      >
        <circleGeometry args={[1.168, 160]} />
      </mesh>

      {/* CARA TRASERA */}
     <mesh
  position={[0, 0, -0.1215]}
  rotation={[0, Math.PI, 0]}
  material={backMaterial}
>
  <circleGeometry args={[1.168, 160]} />
</mesh>

      {/* ARO PREMIUM FRONTAL */}
      <mesh position={[0, 0, 0.1228]} material={rimMaterial}>
        <ringGeometry args={[1.11, 1.185, 160]} />
      </mesh>

      {/* ARO PREMIUM TRASERO */}
      <mesh
        position={[0, 0, -0.1228]}
        rotation={[0, Math.PI, 0]}
        material={rimMaterial}
      >
        <ringGeometry args={[1.11, 1.185, 160]} />
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
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 3, 6]} intensity={2.6} color="#fff4d8" />
        <directionalLight position={[-4, 2, 4]} intensity={1.15} color="#8b5cf6" />
        <pointLight position={[2.2, 0.6, 4]} intensity={1.9} color="#ffd36b" />
        <pointLight position={[-2, 0.5, 3.2]} intensity={0.8} color="#c084fc" />
        <pointLight position={[0, 2.5, 3]} intensity={0.7} color="#ffffff" />

        <CoinModel
          angleRef={angleRef}
          velocityRef={velocityRef}
          isDraggingRef={isDraggingRef}
        />
      </Canvas>
    </div>
  );
}