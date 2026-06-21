"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./Testimonials.module.scss";

const AUTOPLAY_MS = 6000;

export default function Testimonials() {
  const { t } = useLanguage();
  const items = t.testimonials.items;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number) => {
      const len = items.length;
      const wrapped = ((next % len) + len) % len;
      setDir(next > index ? 1 : -1);
      setIndex(wrapped);
    },
    [index, items.length],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % items.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80) go(index + 1);
    else if (info.offset.x > 80) go(index - 1);
  };

  const current = items[index];

  return (
    <section className={`section ${styles.wrap}`}>
      <div className={styles.inner}>
        <ScrollReveal>
          <span className="eyebrow">{t.testimonials.eyebrow}</span>
          <h2 className="sectionTitle">{t.testimonials.title}</h2>
        </ScrollReveal>

        <div
          className={styles.stage}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              className={styles.card}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={onDragEnd}
            >
              <Quote className={styles.quoteIcon} size={34} aria-hidden="true" />
              <p className={styles.text}>{current.text}</p>
              <cite className={styles.name}>— {current.name}</cite>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className={styles.dots}>
          {items.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              onClick={() => go(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
