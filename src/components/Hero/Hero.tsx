"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import NeonButton from "../NeonButton/NeonButton";
import { useLanguage } from "@/hooks/useLanguage";
import { useBooking } from "@/hooks/useBooking";
import { HERO_IMAGES } from "@/config/site";
import styles from "./Hero.module.scss";

const SLIDE_MS = 5000;

export default function Hero() {
  const { t, locale } = useLanguage();
  const { open } = useBooking();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [typed, setTyped] = useState("");
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Slideshow autoplay
  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, SLIDE_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  // Typewriter — restarts when language changes
  useEffect(() => {
    const full = t.hero.headline;
    setTyped("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, [t.hero.headline, locale]);

  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className={styles.hero}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slideshow */}
      <div className={styles.slides}>
        <AnimatePresence>
          <motion.div
            key={index}
            className={styles.slide}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.4 }, scale: { duration: SLIDE_MS / 1000 + 1.4, ease: "linear" } }}
            style={{ backgroundImage: `url(${HERO_IMAGES[index]})` }}
          />
        </AnimatePresence>
        <div className={styles.overlay} />
        <div className={styles.neonWash} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <motion.div
          className={styles.sign}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.signText}>{t.hero.sign}</span>
        </motion.div>

        <h1 className={styles.headline}>
          {typed}
          <span className={styles.caret} aria-hidden="true" />
        </h1>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
        >
          <NeonButton onClick={open} pulse>
            {t.hero.bookCta}
          </NeonButton>
          <NeonButton onClick={scrollToPortfolio} variant="secondary">
            {t.hero.portfolioCta}
          </NeonButton>
        </motion.div>
      </div>

      {/* Dots */}
      <div className={styles.dots} role="tablist" aria-label="Slideshow">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            aria-selected={i === index}
            role="tab"
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <button className={styles.scroll} onClick={scrollToPortfolio} aria-label={t.hero.scroll}>
        <span>{t.hero.scroll}</span>
        <ChevronDown size={18} className={styles.scrollIcon} />
      </button>
    </section>
  );
}
