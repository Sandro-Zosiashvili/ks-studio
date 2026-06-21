"use client";

import styles from "./Logo.module.scss";

export default function Logo() {
    return (
        <span className={styles.logo}>
      <svg
          viewBox="0 0 64 56"
          className={styles.mark}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wireChrome" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F2F4F7" />
            <stop offset="0.4" stopColor="#A8ACB4" />
            <stop offset="0.55" stopColor="#3A3D42" />
            <stop offset="0.75" stopColor="#C8CCD2" />
            <stop offset="1" stopColor="#6E7178" />
          </linearGradient>
          <linearGradient id="wireShine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path
              stroke="url(#wireChrome)"
              strokeWidth="1.8"
              d="M32 49 C12 35 9 19 19 13 C25 9.5 31 13 32 19 C33 13 39 9.5 45 13 C55 19 52 35 32 49 Z"
          />
          <path
              stroke="url(#wireChrome)"
              strokeWidth="1"
              d="M32 46 C15 33.5 12.5 20 20.5 15 C25.5 12 30 15 31 19.5 C33 15 38.5 12 43.5 15 C51.5 20 49 33.5 32 46 Z"
          />
          <path
              stroke="url(#wireShine)"
              strokeWidth="0.5"
              d="M32 48 C13 34.5 10 19.5 19.5 13.5 C25 10.5 31 14 32 19.5"
          />
          <path
              stroke="url(#wireChrome)"
              strokeWidth="1.1"
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