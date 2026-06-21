"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useBooking } from "@/hooks/useBooking";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import NeonButton from "../NeonButton/NeonButton";
import styles from "./Pricing.module.scss";

export default function Pricing() {
  const { t } = useLanguage();
  const { open } = useBooking();

  return (
    <section id="pricing" className={`section ${styles.wrap}`}>
      <div className={styles.inner}>
        <ScrollReveal>
          <span className="eyebrow">{t.pricing.eyebrow}</span>
          <h2 className="sectionTitle">{t.pricing.title}</h2>
          <p className="sectionSub">{t.pricing.sub}</p>
        </ScrollReveal>

        <div className={styles.cards}>
          {t.pricing.cards.map((card, i) => (
            <ScrollReveal as="article" key={card.title} delay={i * 0.08}>
              <div className={`${styles.card} ${i === 1 ? styles.featured : ""}`}>
                {i === 1 && <span className={styles.badge}>★</span>}
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.price}>
                  <span>{card.price}</span>
                  {i === 1 && <small>{t.pricing.perHour}</small>}
                </div>
                <p className={styles.desc}>{card.desc}</p>
                <NeonButton
                  variant={i === 1 ? "primary" : "ghost"}
                  full
                  onClick={open}
                >
                  {card.cta}
                </NeonButton>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
