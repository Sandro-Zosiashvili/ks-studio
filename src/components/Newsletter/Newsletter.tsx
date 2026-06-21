"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import styles from "./Newsletter.module.scss";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const submit = () => {
    if (!EMAIL_RE.test(email.trim())) {
      setError(t.newsletter.invalid);
      return;
    }
    setError("");
    setDone(true);
  };

  return (
    <section className={`section ${styles.wrap}`}>
      <div className={styles.inner}>
        <ScrollReveal className={styles.card}>
          <div className={styles.copy}>
            <h2 className={styles.title}>{t.newsletter.title}</h2>
            <p className={styles.sub}>{t.newsletter.sub}</p>
          </div>

          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="success"
                className={styles.success}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className={styles.checkRing}>
                  <Check size={18} />
                </span>
                {t.newsletter.success}
              </motion.div>
            ) : (
              <motion.div
                key="form"
                className={styles.form}
                exit={{ opacity: 0 }}
              >
                <div className={styles.field}>
                  <input
                    type="email"
                    value={email}
                    placeholder={t.newsletter.placeholder}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    onKeyDown={(e) => e.key === "Enter" && submit()}
                    className={`${styles.input} ${error ? styles.inputError : ""}`}
                    aria-label={t.newsletter.placeholder}
                  />
                  <button
                    className={styles.btn}
                    onClick={submit}
                    aria-label={t.newsletter.button}
                  >
                    <span>{t.newsletter.button}</span>
                    <Send size={16} />
                  </button>
                </div>
                {error && <span className={styles.err}>{error}</span>}
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
}
