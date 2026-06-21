"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./FAQ.module.scss";

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`section ${styles.wrap}`}>
      <div className={styles.inner}>
        <ScrollReveal>
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2 className="sectionTitle">{t.faq.title}</h2>
        </ScrollReveal>

        <div className={styles.list}>
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
                  <button
                    className={styles.q}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <Plus
                      size={22}
                      className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className={styles.aWrap}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className={styles.a}>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
