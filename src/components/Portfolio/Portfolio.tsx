"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TATTOOS, STYLE_CHIPS, type Category } from "@/config/site";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./Portfolio.module.scss";

type Filter = "all" | Category;

export default function Portfolio() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");

  const items = useMemo(
    () => (filter === "all" ? TATTOOS : TATTOOS.filter((it) => it.category === filter)),
    [filter],
  );

  const pills: Filter[] = ["all", ...STYLE_CHIPS];

  return (
    <section id="portfolio" className={`section ${styles.wrap}`}>
      <div className={styles.inner}>
        <ScrollReveal>
          <span className="eyebrow">{t.portfolio.eyebrow}</span>
          <h2 className="sectionTitle">{t.portfolio.title}</h2>
          <p className="sectionSub">{t.portfolio.sub}</p>
        </ScrollReveal>

        <div className={styles.pills} role="tablist" aria-label="Filter portfolio">
          {pills.map((p) => (
            <button
              key={p}
              className={`${styles.pill} ${filter === p ? styles.pillActive : ""}`}
              onClick={() => setFilter(p)}
              role="tab"
              aria-selected={filter === p}
            >
              {p === "all" ? t.portfolio.filters.all : p}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.masonry}>
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.figure
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className={styles.tile}
                data-cursor="hover"
              >
                <img src={item.imageUrl} alt={item.title} className={styles.tileImg} loading="lazy" />
                <figcaption className={styles.caption}>
                  <span className={styles.capCat}>{item.category}</span>
                  <span className={styles.capTitle}>{item.title}</span>
                  <span className={styles.capArtist}>{item.artistName}</span>
                </figcaption>
                <span className={styles.frame} aria-hidden="true" />
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
