"use client";

import { useMemo, useState } from "react";

export interface CalendarDay {
  date: Date | null;
  iso: string;
  disabled: boolean;
  isToday: boolean;
}

const WEEKDAYS_EN = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const WEEKDAYS_KA = ["ორ", "სა", "ოთ", "ხუ", "პა", "შა", "კვ"];

const MONTHS_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const MONTHS_KA = [
  "იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი",
  "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი",
];

function toISO(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function useCalendar(locale: "ka" | "en") {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  const days = useMemo<CalendarDay[]>(() => {
    const year = view.getFullYear();
    const month = view.getMonth();
    const first = new Date(year, month, 1);
    const startOffset = (first.getDay() + 6) % 7; // Monday-first
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells: CalendarDay[] = [];
    for (let i = 0; i < startOffset; i++) {
      cells.push({ date: null, iso: `empty-${i}`, disabled: true, isToday: false });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      date.setHours(0, 0, 0, 0);
      cells.push({
        date,
        iso: toISO(date),
        disabled: date.getTime() < today.getTime(),
        isToday: date.getTime() === today.getTime(),
      });
    }
    return cells;
  }, [view, today]);

  const canGoPrev = useMemo(() => {
    const prev = new Date(view.getFullYear(), view.getMonth() - 1, 1);
    const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    return prev.getTime() >= thisMonth.getTime();
  }, [view, today]);

  const monthLabel = `${(locale === "ka" ? MONTHS_KA : MONTHS_EN)[view.getMonth()]} ${view.getFullYear()}`;
  const weekdays = locale === "ka" ? WEEKDAYS_KA : WEEKDAYS_EN;

  const prevMonth = () => {
    if (canGoPrev) setView((v) => new Date(v.getFullYear(), v.getMonth() - 1, 1));
  };
  const nextMonth = () => setView((v) => new Date(v.getFullYear(), v.getMonth() + 1, 1));

  const formatFull = (iso: string): string => {
    const [y, m, d] = iso.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    const months = locale === "ka" ? MONTHS_KA : MONTHS_EN;
    return locale === "ka"
      ? `${d} ${months[m - 1]}, ${y}`
      : `${months[m - 1]} ${d}, ${y}`;
  };

  return { days, weekdays, monthLabel, prevMonth, nextMonth, canGoPrev, formatFull };
}
