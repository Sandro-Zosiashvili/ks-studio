"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useBooking } from "@/hooks/useBooking";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./PiercingCourse.module.scss";

// Faint baroque flourish used in the paper corners (decorative only).
function Swirl({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 60 C6 30 30 6 60 6 C40 18 30 34 34 52 C36 64 50 70 60 62 C68 56 66 44 56 44 C50 44 48 50 52 54
           M60 6 C90 6 114 30 114 60 C102 40 86 30 68 34 C56 36 50 50 58 60"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Industrial barbell jewelry, used as the bullet marker.
function Barbell() {
  return (
    <svg
      className={styles.barbell}
      viewBox="0 0 48 16"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="10" y1="8" x2="38" y2="8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="8" cy="8" r="5.5" fill="currentColor" />
      <circle cx="40" cy="8" r="5.5" fill="currentColor" />
    </svg>
  );
}

export default function PiercingCourse() {
  const { t } = useLanguage();
  const { open } = useBooking();

  return (
    <section id="course" className={`section ${styles.wrap}`}>
      <div className={styles.paper}>
        <span className={styles.grain} aria-hidden="true" />
        <Swirl className={`${styles.swirl} ${styles.tl}`} />
        <Swirl className={`${styles.swirl} ${styles.tr}`} />
        <Swirl className={`${styles.swirl} ${styles.bl}`} />
        <Swirl className={`${styles.swirl} ${styles.br}`} />

        <ScrollReveal className={styles.inner}>
          <span className={styles.eyebrow}>{t.course.eyebrow}</span>
          <h2 className={styles.title}>{t.course.title}</h2>
          <p className={styles.intro}>{t.course.intro}</p>

          <ul className={styles.points}>
            {t.course.points.map((p, i) => (
              <li key={i}>
                <Barbell />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <button className={styles.cta} onClick={open} data-cursor="hover">
            {t.course.cta}
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
