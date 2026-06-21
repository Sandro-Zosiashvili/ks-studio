"use client";

import { TATTOOS } from "@/config/site";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./SignatureStyles.module.scss";

// pick 6 distinct hero cards
const FEATURED = [
  TATTOOS[0], TATTOOS[2], TATTOOS[4], TATTOOS[7], TATTOOS[10], TATTOOS[19],
];

export default function SignatureStyles() {
  const { t } = useLanguage();

  return (
    <section id="styles" className={`section ${styles.wrap}`}>
      <div className={styles.headInner}>
        <ScrollReveal>
          <span className="eyebrow">{t.styles.eyebrow}</span>
          <h2 className="sectionTitle">{t.styles.title}</h2>
          <p className="sectionSub">{t.styles.sub}</p>
        </ScrollReveal>
      </div>

      <div className={styles.scroller}>
        <div className={styles.track}>
          {FEATURED.map((item) => (
            <article key={item.id} className={styles.card} data-cursor="hover">
              <div
                className={styles.img}
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
              <div className={styles.magnifier} aria-hidden="true">⊕</div>
              <div className={styles.meta}>
                <span className={styles.cat}>{item.category}</span>
                <span className={styles.cardTitle}>{item.title}</span>
                <span className={styles.artist}>{item.artistName}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
