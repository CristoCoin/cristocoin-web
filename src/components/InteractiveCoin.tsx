"use client";

import { useEffect, useRef, useState } from "react";

export function InteractiveCoin() {
  const [angleY, setAngleY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const angleRef = useRef(0);
  const velocityRef = useRef(0.45);
  const isDraggingRef = useRef(false);
  const lastPointerX = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    angleRef.current = angleY;
  }, [angleY]);

  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  useEffect(() => {
    const baseSpeed = 0.45;

    function animate() {
      if (!isDraggingRef.current) {
        angleRef.current += velocityRef.current;

        // Vuelve poco a poco a la velocidad normal después del impulso
        velocityRef.current += (baseSpeed - velocityRef.current) * 0.018;

        setAngleY(angleRef.current);
      }

      frameRef.current = requestAnimationFrame(animate);
    }

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    setIsDragging(true);
    lastPointerX.current = event.clientX;
    velocityRef.current = 0;

    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDraggingRef.current) return;

    const deltaX = event.clientX - lastPointerX.current;
    lastPointerX.current = event.clientX;

    // Solo eje Y
    const nextAngle = angleRef.current + deltaX * 0.9;
    angleRef.current = nextAngle;

    // Guarda impulso para que al soltar salga disparada
    velocityRef.current = deltaX * 1.15;

    setAngleY(nextAngle);
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    setIsDragging(false);

    // Pequeño boost al soltar, sin volverse loco
   const maxBoost = 16;
    const minBoost = 0.65;

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
      // Ignore if pointer capture was already released.
    }
  }

  return (
    <div
      className="interactive-coin-zone"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      role="button"
      tabIndex={0}
      aria-label="Interactive CristoCoin 3D coin"
    >
      <div
        className={`interactive-coin ${isDragging ? "is-dragging" : ""}`}
        style={{
          transform: `rotateY(${angleY}deg)`,
        }}
      >

<div className="interactive-coin-rim" aria-hidden="true" />

        <div className="interactive-coin-thickness" aria-hidden="true">
          {Array.from({ length: 70 }).map((_, index) => (
  <span
    key={index}
    className="interactive-coin-slice"
    style={{
      transform: `translateZ(${(index - 35) * 0.95}px)`,
    }}
  />
))}
        </div>

        <img
          src="/cristocoin-hero.webp"
          alt="CristoCoin official coin"
          className="interactive-coin-face interactive-coin-front"
          draggable={false}
        />

        <img
          src="/cristocoin-hero.webp"
          alt=""
          aria-hidden="true"
          className="interactive-coin-face interactive-coin-back"
          draggable={false}
        />
      </div>

      <p className="interactive-coin-hint">Drag to rotate</p>
    </div>
  );
}