"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./ScrollProgress.module.scss";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const bar = barRef.current;
    if (!bar) return;

    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });

    const trigger = ScrollTrigger.create({
      start: 0,
      end: () =>
        document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        gsap.to(bar, {
          scaleX: self.progress,
          duration: 0.15,
          ease: "none",
          overwrite: true,
        });
      },
    });

    return () => trigger.kill();
  });

  return (
    <div className={styles.track} aria-hidden="true">
      <div ref={barRef} className={styles.bar} />
    </div>
  );
}
