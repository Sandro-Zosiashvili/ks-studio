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
const TYPE_MS = 55;

export default function Hero() {
  const { t, locale } = useLanguage();
  const { open } = useBooking();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
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
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(id);
        setDone(true);
      }
    }, TYPE_MS);
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

          {/* headline-ს სიმაღლე დაცულია — ხტუნვა აღარ ხდება */}
          <h1 className={styles.headline}>
          <span className={styles.headlineGhost} aria-hidden="true">
            {t.hero.headline}
          </span>
            <span className={styles.headlineTyped}>
            {typed}
              {!done && <span className={styles.caret} aria-hidden="true" />}
          </span>
          </h1>

          {/* sub და ctas ჩნდება მხოლოდ typewriter-ის დასრულების მერე */}
          <motion.p
              className={styles.sub}
              initial={{ opacity: 0, y: 12 }}
              animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
              className={styles.ctas}
              initial={{ opacity: 0, y: 16 }}
              animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <NeonButton onClick={open} pulse>
              {t.hero.bookCta}
            </NeonButton>
            <NeonButton onClick={scrollToPortfolio} variant="secondary">
              {t.hero.portfolioCta}
            </NeonButton>
          </motion.div>
        </div>
      </section>
  );
}