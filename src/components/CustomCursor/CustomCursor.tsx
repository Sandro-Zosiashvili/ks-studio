"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CustomCursor.module.scss";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);
  const idRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setHidden(true);
      return;
    }

    let rx = 0, ry = 0, dx = 0, dy = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
      }
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, input, textarea, select, [data-cursor='hover']");
      setHovering(!!interactive);
    };

    const loop = () => {
      rx += (dx - rx) * 0.4;
      ry += (dy - ry) * 0.4;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onClick = (e: MouseEvent) => {
      const id = idRef.current++;
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => {
        setRipples((r) => r.filter((rp) => rp.id !== id));
      }, 650);
    };

    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`${styles.dot} ${hovering ? styles.dotHover : ""}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`${styles.ring} ${hovering ? styles.ringHover : ""}`}
        aria-hidden="true"
      />
      {ripples.map((r) => (
        <span
          key={r.id}
          className={styles.ripple}
          style={{ left: r.x, top: r.y }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
