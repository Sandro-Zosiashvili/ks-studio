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

    // mouse target (mx, my), eased dot (dx, dy) and eased ring (rx, ry)
    let mx = 0, my = 0, dx = 0, dy = 0, rx = 0, ry = 0;
    let started = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      // On the very first move, snap everything to the pointer so it doesn't
      // glide in from the top-left corner.
      if (!started) {
        dx = rx = mx;
        dy = ry = my;
        started = true;
      }
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, input, textarea, select, [data-cursor='hover']");
      setHovering(!!interactive);
    };

    const loop = () => {
      // Soft easing: the dot trails the pointer gently, the ring trails further.
      dx += (mx - dx) * 0.16;
      dy += (my - dy) * 0.16;
      rx += (mx - rx) * 0.09;
      ry += (my - ry) * 0.09;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
      }
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
