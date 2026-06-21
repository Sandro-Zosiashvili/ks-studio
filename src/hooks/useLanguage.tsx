"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { DICTIONARIES, DEFAULT_LOCALE, type Locale, type Dictionary } from "@/config/i18n";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("ks-locale") : null;
    if (stored === "ka" || stored === "en") {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("ks-locale", l);
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "ka" ? "en" : "ka");
  }, [locale, setLocale]);

  const value: LanguageContextValue = {
    locale,
    setLocale,
    toggleLocale,
    t: DICTIONARIES[locale],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
