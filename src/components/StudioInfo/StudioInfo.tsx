"use client";

import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SITE } from "@/config/site";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./StudioInfo.module.scss";

export default function StudioInfo() {
  const { t, locale } = useLanguage();

  return (
    <section id="studio" className={`section ${styles.wrap}`}>
      <div className={styles.inner}>
        <ScrollReveal>
          <span className="eyebrow">{t.studio.eyebrow}</span>
          <h2 className="sectionTitle">{t.studio.title}</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal className={styles.details}>
            <div className={styles.row}>
              <MapPin size={20} className={styles.icon} />
              <div>
                <h4>{t.studio.address}</h4>
                <p>{SITE.address[locale]}</p>
              </div>
            </div>
            <div className={styles.row}>
              <Clock size={20} className={styles.icon} />
              <div>
                <h4>{t.studio.hours}</h4>
                <p>{SITE.hours[locale]}</p>
              </div>
            </div>
            <div className={styles.row}>
              <Phone size={20} className={styles.icon} />
              <div>
                <h4>{t.studio.contact}</h4>
                <p>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
                    {SITE.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${SITE.email}`} className={styles.mail}>
                    <Mail size={14} /> {SITE.email}
                  </a>
                </p>
              </div>
            </div>

            <a
              href={SITE.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapsLink}
            >
              {t.studio.directions} <ExternalLink size={15} />
            </a>
          </ScrollReveal>

          <ScrollReveal className={styles.mapCard} delay={0.1}>
            <a
              href={SITE.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.map}
              aria-label={t.studio.directions}
            >
              <div className={styles.mapGrid} aria-hidden />
              <div className={styles.pin}>
                <MapPin size={30} />
                <span className={styles.pulse} />
              </div>
              <span className={styles.mapName}>{SITE.name}</span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
