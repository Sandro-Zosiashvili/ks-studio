"use client";

import { motion } from "framer-motion";
import styles from "./StemDivider.module.scss";

export default function StemDivider() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <motion.svg
        viewBox="0 0 600 120"
        className={styles.svg}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* main stem */}
        <motion.path
          d="M0 60 C 120 60, 180 60, 230 50 C 270 42, 290 30, 300 16 C 310 30, 330 42, 370 50 C 420 60, 480 60, 600 60"
          fill="none"
          stroke="url(#stemGrad)"
          strokeWidth="1.4"
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 1.6, ease: "easeInOut" } },
          }}
        />
        {/* leaves */}
        <motion.path
          d="M230 50 C 215 38, 205 44, 210 56 C 214 64, 226 60, 230 50 Z"
          fill="none"
          stroke="#A68C9D"
          strokeWidth="1"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 0.9, delay: 0.8, ease: "easeOut" } },
          }}
        />
        <motion.path
          d="M370 50 C 385 38, 395 44, 390 56 C 386 64, 374 60, 370 50 Z"
          fill="none"
          stroke="#A68C9D"
          strokeWidth="1"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 0.9, delay: 1, ease: "easeOut" } },
          }}
        />
        {/* bud */}
        <motion.circle
          cx="300"
          cy="14"
          r="3.4"
          fill="#D9B382"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1.3 } },
          }}
        />
        <defs>
          <linearGradient id="stemGrad" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#D9B382" stopOpacity="0" />
            <stop offset="0.5" stopColor="#D9B382" />
            <stop offset="1" stopColor="#D9B382" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
