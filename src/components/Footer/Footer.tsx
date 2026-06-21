"use client";

import { Instagram, Facebook, MessageCircle, Music2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SITE } from "@/config/site";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";

const NAV = [
  { key: "styles", href: "#styles" },
  { key: "artists", href: "#artists" },
  { key: "process", href: "#process" },
  { key: "portfolio", href: "#portfolio" },
  { key: "pricing", href: "#pricing" },
  { key: "studio", href: "#studio" },
] as const;

const SOCIAL = [
  { Icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
  { Icon: Facebook, href: SITE.social.facebook, label: "Facebook" },
  { Icon: Music2, href: SITE.social.tiktok, label: "TikTok" },
  { Icon: MessageCircle, href: SITE.social.whatsapp, label: "WhatsApp" },
] as const;

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo  />
          <p className={styles.tagline}>{t.footer.tagline}</p>
        </div>

        <div className={styles.col}>
          <h4>{t.footer.nav}</h4>
          <ul>
            {NAV.map((item) => (
              <li key={item.key}>
                <a href={item.href}>{t.nav[item.key]}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4>{SITE.name}</h4>
          <div className={styles.social}>
            {SOCIAL.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={styles.socialBtn}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>
          © {year} {SITE.name}. {t.footer.rights}
        </span>
      </div>
    </footer>
  );
}
