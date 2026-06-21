"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../Logo/Logo";
import NeonButton from "../NeonButton/NeonButton";
import { useLanguage } from "@/hooks/useLanguage";
import { useBooking } from "@/hooks/useBooking";
import styles from "./Header.module.scss";

export default function Header() {
  const { t, locale, setLocale } = useLanguage();
  const { open } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  const links = [
    { href: "#styles", label: t.nav.styles },
    { href: "#artists", label: t.nav.artists },
    { href: "#process", label: t.nav.process },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#course", label: t.nav.course },
    { href: "#studio", label: t.nav.studio },
  ];

  const handleNav = (href: string) => {
    setDrawer(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const LangSwitch = () => (
    <div className={styles.lang} role="group" aria-label="Language">
      <button
        className={locale === "ka" ? styles.langActive : ""}
        onClick={() => setLocale("ka")}
        aria-pressed={locale === "ka"}
      >
        {t.lang.ka}
      </button>
      <span className={styles.langSep}>/</span>
      <button
        className={locale === "en" ? styles.langActive : ""}
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
      >
        {t.lang.en}
      </button>
    </div>
  );

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <a
            href="#top"
            className={styles.logoLink}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Logo  />
          </a>

          <nav className={styles.nav} aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(l.href);
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className={styles.right}>
            <LangSwitch />
            <div className={styles.bookDesktop}>
              <NeonButton onClick={open} pulse>
                {t.nav.book}
              </NeonButton>
            </div>
            <button
              className={styles.burger}
              onClick={() => setDrawer(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {drawer && (
          <>
            <motion.div
              className={styles.scrim}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawer(false)}
            />
            <motion.aside
              className={styles.drawer}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobile menu"
            >
              <button
                className={styles.close}
                onClick={() => setDrawer(false)}
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
              <nav className={styles.drawerNav}>
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(l.href);
                    }}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <div className={styles.drawerFoot}>
                <LangSwitch />
                <NeonButton
                  onClick={() => {
                    setDrawer(false);
                    open();
                  }}
                  pulse
                  full
                >
                  {t.nav.book}
                </NeonButton>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
