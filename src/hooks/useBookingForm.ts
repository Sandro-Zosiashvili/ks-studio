"use client";

import { useState, useCallback } from "react";
import type { Category } from "@/config/site";

export interface BookingForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  artistId: string;
  date: string;
  time: string;
  bodyPart: string;
  idea: string;
  size: string;
  styles: Category[];
}

export const EMPTY_FORM: BookingForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  artistId: "",
  date: "",
  time: "",
  bodyPart: "",
  idea: "",
  size: "",
  styles: [],
};

export type FieldErrors = Partial<Record<keyof BookingForm, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+]?[\d\s()-]{7,}$/;

interface Messages {
  required: string;
  email: string;
  phone: string;
  pickArtist: string;
  pickDate: string;
  pickTime: string;
  pickBody: string;
}

export function useBookingForm() {
  const [form, setForm] = useState<BookingForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});

  const update = useCallback(<K extends keyof BookingForm>(key: K, value: BookingForm[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => {
      if (!e[key]) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
  }, []);

  const toggleStyle = useCallback((c: Category) => {
    setForm((f) => ({
      ...f,
      styles: f.styles.includes(c)
        ? f.styles.filter((s) => s !== c)
        : [...f.styles, c],
    }));
  }, []);

  const validateStep = useCallback(
    (step: number, msg: Messages): boolean => {
      const e: FieldErrors = {};

      if (step === 0) {
        if (!form.firstName.trim()) e.firstName = msg.required;
        if (!form.lastName.trim()) e.lastName = msg.required;
        if (!form.email.trim()) e.email = msg.required;
        else if (!emailRe.test(form.email)) e.email = msg.email;
        if (!form.phone.trim()) e.phone = msg.required;
        else if (!phoneRe.test(form.phone)) e.phone = msg.phone;
      }
      if (step === 1) {
        if (!form.artistId) e.artistId = msg.pickArtist;
      }
      if (step === 2) {
        if (!form.date) e.date = msg.pickDate;
        if (!form.time) e.time = msg.pickTime;
      }
      if (step === 3) {
        if (!form.bodyPart) e.bodyPart = msg.pickBody;
      }

      setErrors(e);
      return Object.keys(e).length === 0;
    },
    [form],
  );

  const reset = useCallback(() => {
    setForm(EMPTY_FORM);
    setErrors({});
  }, []);

  return { form, errors, update, toggleStyle, validateStep, reset };
}
