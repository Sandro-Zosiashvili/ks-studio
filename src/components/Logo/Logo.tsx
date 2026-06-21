"use client";

import styles from "./Logo.module.scss";

interface LogoProps {
  flicker?: boolean;
}

export default function Logo({ flicker = false }: LogoProps) {
  return (
    <span className={`${styles.logo} ${flicker ? styles.flicker : ""}`}>
      <svg
        viewBox="0 0 56 56"
        className={styles.mark}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          className={styles.oval}
          cx="28"
          cy="28"
          rx="25"
          ry="18"
          fill="none"
          strokeWidth="1.4"
        />
        <path
          className={styles.k}
          d="M20 18 L20 38 M20 28 L33 18 M24 28 L33 38"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={styles.word}>KS STUDIO</span>
    </span>
  );
}
