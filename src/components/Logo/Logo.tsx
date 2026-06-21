"use client";

import styles from "./Logo.module.scss";

interface LogoProps {
  flicker?: boolean;
}

/**
 * KS STUDIO mark — a barbed-wire thorn heart rendered as monochrome linework,
 * with the blackletter wordmark. No neon, no glow: pure ink.
 */
export default function Logo({ flicker = false }: LogoProps) {
  return (
    <span className={`${styles.logo} ${flicker ? styles.flicker : ""}`}>
      <svg
        viewBox="0 0 64 56"
        className={styles.mark}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className={styles.wire}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* heart, two twisted strands */}
          <path
            strokeWidth="1.6"
            d="M32 49 C12 35 9 19 19 13 C25 9.5 31 13 32 19 C33 13 39 9.5 45 13 C55 19 52 35 32 49 Z"
          />
          <path
            strokeWidth="0.9"
            d="M32 46 C15 33.5 12.5 20 20.5 15 C25.5 12 30 15 31 19.5 C33 15 38.5 12 43.5 15 C51.5 20 49 33.5 32 46 Z"
          />
          {/* thorn barbs around the strands */}
          <path
            strokeWidth="1"
            d="M19 13 l-5 -4 M19 13 l-4 5 M45 13 l5 -4 M45 13 l4 5
               M11 27 l-6 -1 M11 27 l-5 4 M53 27 l6 -1 M53 27 l5 4
               M32 19 l0 -7 M22 40 l-4 4 M42 40 l4 4 M32 49 l0 6"
          />
        </g>
      </svg>
      <span className={styles.word}>KS STUDIO</span>
    </span>
  );
}
