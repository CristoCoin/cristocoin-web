"use client";

import { useEffect, useRef, useState } from "react";

export function InteractiveCoin() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const lastPointer = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    setIsDragging(true);
    lastPointer.current = {
      x: event.clientX,
      y: event.clientY,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging) return;

    const deltaX = event.clientX - lastPointer.current.x;
    const deltaY = event.clientY - lastPointer.current.y;

    lastPointer.current = {
      x: event.clientX,
      y: event.clientY,
    };

    setRotation((current) => ({
      x: Math.max(-35, Math.min(35, current.x - deltaY * 0.35)),
      y: current.y + deltaX * 0.55,
    }));
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    setIsDragging(false);

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
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className="interactive-coin-thickness" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              className="interactive-coin-slice"
              style={{
                transform: `translateZ(${(index - 9) * 0.8}px)`,
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