"use client";

import { Instagram } from "lucide-react";
import { ARTISTS } from "@/config/site";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import StemDivider from "../StemDivider/StemDivider";
import styles from "./ArtistDNA.module.scss";

export default function ArtistDNA() {
  const { t, locale } = useLanguage();

  return (
    <section id="artists" className={`section ${styles.wrap}`}>
      <div className={styles.inner}>
        <ScrollReveal>
          <span className="eyebrow">{t.artists.eyebrow}</span>
          <h2 className="sectionTitle">{t.artists.title}</h2>
          <p className="sectionSub">{t.artists.sub}</p>
        </ScrollReveal>

        <div className={styles.grid}>
          {ARTISTS.map((a, i) => (
            <ScrollReveal as="article" key={a.id} delay={i * 0.08} className={styles.card}>
              <div className={styles.photo} data-cursor="hover">
                <img src={a.portraitUrl} alt={a.name} className={styles.portrait} />
                <img src={a.workingUrl} alt={`${a.name} working`} className={styles.working} />
                <div className={styles.glow} aria-hidden="true" />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{a.name}</h3>
                <span className={styles.spec}>
                  {locale === "ka" ? a.specialtyKa : a.specialty}
                </span>
                <p className={styles.bio}>{locale === "ka" ? a.bioKa : a.bio}</p>
                <a
                  href={`https://instagram.com/${a.instagram.replace("@", "")}`}
                  className={styles.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={15} />
                  {a.instagram}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <StemDivider />
    </section>
  );
}
