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
                <defs>
                    {/* liquid chrome body — dark base with bright band, like reflected light */}
                    <linearGradient id="chromeBody" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#F5F7FA" />
                        <stop offset="0.18" stopColor="#C2C7CF" />
                        <stop offset="0.38" stopColor="#5C6066" />
                        <stop offset="0.52" stopColor="#2B2D31" />
                        <stop offset="0.6" stopColor="#7E838B" />
                        <stop offset="0.78" stopColor="#E4E7EC" />
                        <stop offset="0.9" stopColor="#9A9EA6" />
                        <stop offset="1" stopColor="#4A4D53" />
                    </linearGradient>

                    {/* horizontal fade so the ends dissolve into the page */}
                    <linearGradient id="fadeMask" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#000" stopOpacity="0" />
                        <stop offset="0.18" stopColor="#fff" />
                        <stop offset="0.82" stopColor="#fff" />
                        <stop offset="1" stopColor="#000" stopOpacity="0" />
                    </linearGradient>
                    <mask id="edgeFade">
                        <rect x="0" y="0" width="600" height="120" fill="url(#fadeMask)" />
                    </mask>

                    {/* bright top highlight */}
                    <linearGradient id="topShine" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#FFFFFF" />
                        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
                    </linearGradient>

                    {/* sparkle glow */}
                    <radialGradient id="glint" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0" stopColor="#FFFFFF" />
                        <stop offset="0.4" stopColor="#FFFFFF" stopOpacity="0.5" />
                        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <g mask="url(#edgeFade)">
                    {/* main chrome stem — drawn as a filled tapered body */}
                    <motion.path
                        d="M0 62
               C 120 62, 180 63, 230 52
               C 272 43, 290 30, 300 15
               C 310 30, 328 43, 370 52
               C 420 63, 480 62, 600 62
               C 480 66, 420 67, 370 56
               C 328 49, 310 36, 300 22
               C 290 36, 272 49, 230 56
               C 180 67, 120 66, 0 66 Z"
                        fill="url(#chromeBody)"
                        stroke="#1A1B1E"
                        strokeWidth="0.4"
                        variants={{
                            hidden: { pathLength: 0, opacity: 0 },
                            visible: { pathLength: 1, opacity: 1, transition: { duration: 1.6, ease: "easeInOut" } },
                        }}
                    />

                    {/* bright reflection running along the top of the stem */}
                    <motion.path
                        d="M30 61 C 130 61, 185 61.5, 232 51 C 274 42, 291 29, 300 16 C 309 29, 326 42, 368 51 C 415 61.5, 470 61, 570 61"
                        fill="none"
                        stroke="url(#topShine)"
                        strokeWidth="0.9"
                        strokeLinecap="round"
                        variants={{
                            hidden: { pathLength: 0, opacity: 0 },
                            visible: { pathLength: 1, opacity: 0.95, transition: { duration: 1.6, ease: "easeInOut" } },
                        }}
                    />

                    {/* chrome thorns near center */}
                    <motion.path
                        d="M250 48 L 236 32 L 245 49 Z M250 48 L 264 33 L 252 50 Z
               M350 48 L 364 32 L 355 49 Z M350 48 L 336 33 L 348 50 Z"
                        fill="url(#chromeBody)"
                        stroke="#1A1B1E"
                        strokeWidth="0.3"
                        variants={{
                            hidden: { opacity: 0, scale: 0.6 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.8, ease: "easeOut" } },
                        }}
                    />

                    {/* outer chrome thorns along the stem */}
                    <motion.path
                        d="M150 62 L 138 50 L 148 62 Z M150 62 L 164 50 L 154 62 Z
               M450 62 L 462 50 L 452 62 Z M450 62 L 438 50 L 448 62 Z"
                        fill="url(#chromeBody)"
                        stroke="#1A1B1E"
                        strokeWidth="0.3"
                        variants={{
                            hidden: { opacity: 0, scale: 0.6 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 1, ease: "easeOut" } },
                        }}
                    />

                    {/* chrome leaves */}
                    <motion.path
                        d="M232 52 C 210 36, 196 45, 205 59 C 213 70, 230 64, 232 52 Z"
                        fill="url(#chromeBody)"
                        stroke="#1A1B1E"
                        strokeWidth="0.4"
                        variants={{
                            hidden: { opacity: 0, scale: 0.6 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.9, ease: "easeOut" } },
                        }}
                    />
                    <motion.path
                        d="M368 52 C 390 36, 404 45, 395 59 C 387 70, 370 64, 368 52 Z"
                        fill="url(#chromeBody)"
                        stroke="#1A1B1E"
                        strokeWidth="0.4"
                        variants={{
                            hidden: { opacity: 0, scale: 0.6 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 1.05, ease: "easeOut" } },
                        }}
                    />

                    {/* chrome bud */}
                    <motion.circle
                        cx="300"
                        cy="14"
                        r="4.2"
                        fill="url(#chromeBody)"
                        stroke="#1A1B1E"
                        strokeWidth="0.4"
                        variants={{
                            hidden: { scale: 0, opacity: 0 },
                            visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1.3 } },
                        }}
                    />
                </g>

                {/* sparkle glints — the star highlights from the photo */}
                {[
                    { x: 300, y: 14, s: 16, d: 1.5 },
                    { x: 232, y: 53, s: 11, d: 1.7 },
                    { x: 368, y: 53, s: 11, d: 1.8 },
                    { x: 150, y: 60, s: 8, d: 1.9 },
                    { x: 450, y: 60, s: 8, d: 2.0 },
                ].map((g, i) => (
                    <motion.g
                        key={i}
                        variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: g.d } },
                        }}
                    >
                        <circle cx={g.x} cy={g.y} r={g.s} fill="url(#glint)" />
                        <path
                            d={`M${g.x - g.s} ${g.y} L${g.x + g.s} ${g.y} M${g.x} ${g.y - g.s} L${g.x} ${g.y + g.s}`}
                            stroke="#FFFFFF"
                            strokeWidth="0.6"
                            strokeLinecap="round"
                        />
                    </motion.g>
                ))}
            </motion.svg>
        </div>
    );
}