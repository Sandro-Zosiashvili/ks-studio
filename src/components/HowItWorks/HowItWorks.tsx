"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./HowItWorks.module.scss";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="process" className={`section ${styles.wrap}`}>
      <div className={styles.inner}>
        <ScrollReveal>
          <span className="eyebrow">{t.process.eyebrow}</span>
          <h2 className="sectionTitle">{t.process.title}</h2>
        </ScrollReveal>

        <div className={styles.steps}>
          <div className={styles.line} aria-hidden="true">
            <motion.div
              className={styles.lineFill}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </div>
          {t.process.steps.map((s, i) => (
            <ScrollReveal as="article" key={s.n} delay={i * 0.18} className={styles.step}>
              <span className={styles.num}>{s.n}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
