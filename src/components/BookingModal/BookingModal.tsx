"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useBooking } from "@/hooks/useBooking";
import { useBookingForm } from "@/hooks/useBookingForm";
import { useCalendar } from "@/hooks/useCalendar";
import {
  ARTISTS,
  BODY_PARTS,
  TATTOO_SIZES,
  TIME_SLOTS,
  STYLE_CHIPS,
} from "@/config/site";
import NeonButton from "../NeonButton/NeonButton";
import styles from "./BookingModal.module.scss";

const STEP_COUNT = 5;

export default function BookingModal() {
  const { t, locale } = useLanguage();
  const { isOpen, close } = useBooking();
  const { form, errors, update, toggleStyle, validateStep, reset } = useBookingForm();
  const calendar = useCalendar(locale);

  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      const id = setTimeout(() => {
        setStep(0);
        setStatus("idle");
        reset();
      }, 300);
      return () => clearTimeout(id);
    }
  }, [isOpen, reset]);

  const msg = t.booking.errors;

  const next = () => {
    if (validateStep(step, msg)) {
      setStep((s) => Math.min(s + 1, STEP_COUNT - 1));
    }
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    setStatus("sending");
    setTimeout(() => setStatus("done"), 1500);
  };

  const stepNames = [
    t.booking.steps.personal,
    t.booking.steps.artist,
    t.booking.steps.datetime,
    t.booking.steps.concept,
    t.booking.steps.review,
  ];

  const selectedArtist = ARTISTS.find((a) => a.id === form.artistId);
  const artistLabel =
    form.artistId === "any"
      ? t.booking.fields.noPreference
      : selectedArtist?.name ?? t.booking.review.none;

  const f = t.booking.fields;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget && status !== "sending") close();
          }}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={t.booking.title}
          >
            <button
              className={styles.close}
              onClick={close}
              aria-label={t.booking.close}
              disabled={status === "sending"}
            >
              <X size={22} />
            </button>

            {status === "done" ? (
              <SuccessScreen onClose={close} />
            ) : (
              <>
                <header className={styles.head}>
                  <h2 className={styles.title}>{t.booking.title}</h2>
                  <p className={styles.stepLabel}>
                    {t.booking.step} {step + 1} {t.booking.of} {STEP_COUNT} · {stepNames[step]}
                  </p>
                  <div className={styles.progress}>
                    <motion.div
                      className={styles.progressFill}
                      animate={{ width: `${((step + 1) / STEP_COUNT) * 100}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </header>

                <div className={styles.body}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* STEP 1 — Personal */}
                      {step === 0 && (
                        <div className={styles.grid2}>
                          <Field label={f.firstName} error={errors.firstName}>
                            <input
                              type="text"
                              value={form.firstName}
                              onChange={(e) => update("firstName", e.target.value)}
                              className={styles.input}
                            />
                          </Field>
                          <Field label={f.lastName} error={errors.lastName}>
                            <input
                              type="text"
                              value={form.lastName}
                              onChange={(e) => update("lastName", e.target.value)}
                              className={styles.input}
                            />
                          </Field>
                          <Field label={f.email} error={errors.email}>
                            <input
                              type="email"
                              value={form.email}
                              onChange={(e) => update("email", e.target.value)}
                              className={styles.input}
                            />
                          </Field>
                          <Field label={f.phone} error={errors.phone}>
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) => update("phone", e.target.value)}
                              className={styles.input}
                            />
                          </Field>
                        </div>
                      )}

                      {/* STEP 2 — Artist */}
                      {step === 1 && (
                        <div className={styles.artistList}>
                          <button
                            className={`${styles.artistOption} ${form.artistId === "any" ? styles.artistActive : ""}`}
                            onClick={() => update("artistId", "any")}
                          >
                            <span className={styles.anyAvatar}>★</span>
                            <span className={styles.artistMeta}>
                              <span className={styles.artistName}>{f.noPreference}</span>
                              <span className={styles.artistSpec}>{f.noPreferenceDesc}</span>
                            </span>
                          </button>
                          {ARTISTS.map((a) => (
                            <button
                              key={a.id}
                              className={`${styles.artistOption} ${form.artistId === a.id ? styles.artistActive : ""}`}
                              onClick={() => update("artistId", a.id)}
                            >
                              <img src={a.portraitUrl} alt={a.name} className={styles.avatar} />
                              <span className={styles.artistMeta}>
                                <span className={styles.artistName}>{a.name}</span>
                                <span className={styles.artistSpec}>
                                  {locale === "ka" ? a.specialtyKa : a.specialty}
                                </span>
                              </span>
                            </button>
                          ))}
                          {errors.artistId && <p className={styles.err}>{errors.artistId}</p>}
                        </div>
                      )}

                      {/* STEP 3 — Date & Time */}
                      {step === 2 && (
                        <div className={styles.dateStep}>
                          <div className={styles.calendar}>
                            <div className={styles.calHead}>
                              <button
                                onClick={calendar.prevMonth}
                                disabled={!calendar.canGoPrev}
                                aria-label="Previous month"
                                className={styles.calNav}
                              >
                                <ChevronLeft size={18} />
                              </button>
                              <span className={styles.calMonth}>{calendar.monthLabel}</span>
                              <button
                                onClick={calendar.nextMonth}
                                aria-label="Next month"
                                className={styles.calNav}
                              >
                                <ChevronRight size={18} />
                              </button>
                            </div>
                            <div className={styles.calWeekdays}>
                              {calendar.weekdays.map((w) => (
                                <span key={w}>{w}</span>
                              ))}
                            </div>
                            <div className={styles.calGrid}>
                              {calendar.days.map((d) =>
                                d.date ? (
                                  <button
                                    key={d.iso}
                                    disabled={d.disabled}
                                    onClick={() => update("date", d.iso)}
                                    className={[
                                      styles.calDay,
                                      d.disabled ? styles.calDisabled : "",
                                      form.date === d.iso ? styles.calSelected : "",
                                      d.isToday ? styles.calToday : "",
                                    ].join(" ")}
                                  >
                                    {d.date.getDate()}
                                  </button>
                                ) : (
                                  <span key={d.iso} className={styles.calEmpty} />
                                ),
                              )}
                            </div>
                            {errors.date && <p className={styles.err}>{errors.date}</p>}
                          </div>

                          <div className={styles.slots}>
                            <p className={styles.slotsLabel}>{f.time}</p>
                            <div className={styles.slotsGrid}>
                              {TIME_SLOTS.map((slot) => (
                                <button
                                  key={slot}
                                  className={`${styles.slot} ${form.time === slot ? styles.slotActive : ""}`}
                                  onClick={() => update("time", slot)}
                                  disabled={!form.date}
                                >
                                  {slot}
                                </button>
                              ))}
                            </div>
                            {errors.time && <p className={styles.err}>{errors.time}</p>}
                          </div>
                        </div>
                      )}

                      {/* STEP 4 — Concept */}
                      {step === 3 && (
                        <div className={styles.conceptStep}>
                          <Field label={f.bodyPart} error={errors.bodyPart}>
                            <select
                              value={form.bodyPart}
                              onChange={(e) => update("bodyPart", e.target.value)}
                              className={styles.select}
                            >
                              <option value="">{f.selectPlaceholder}</option>
                              {BODY_PARTS.map((b) => (
                                <option key={b.en} value={b.en}>
                                  {locale === "ka" ? b.ka : b.en}
                                </option>
                              ))}
                            </select>
                          </Field>

                          <Field label={f.size}>
                            <select
                              value={form.size}
                              onChange={(e) => update("size", e.target.value)}
                              className={styles.select}
                            >
                              <option value="">{f.selectPlaceholder}</option>
                              {TATTOO_SIZES.map((s) => (
                                <option key={s.en} value={s.en}>
                                  {locale === "ka" ? s.ka : s.en}
                                </option>
                              ))}
                            </select>
                          </Field>

                          <Field label={f.idea}>
                            <AutoTextarea
                              value={form.idea}
                              placeholder={f.ideaPlaceholder}
                              onChange={(v) => update("idea", v)}
                            />
                          </Field>

                          <div className={styles.chipsWrap}>
                            <span className={styles.chipsLabel}>{f.styleRef}</span>
                            <div className={styles.chips}>
                              {STYLE_CHIPS.map((c) => (
                                <button
                                  key={c}
                                  className={`${styles.chip} ${form.styles.includes(c) ? styles.chipActive : ""}`}
                                  onClick={() => toggleStyle(c)}
                                >
                                  {c}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* STEP 5 — Review */}
                      {step === 4 && (
                        <div className={styles.review}>
                          <ReviewRow label={t.booking.review.name} value={`${form.firstName} ${form.lastName}`} />
                          <ReviewRow label={t.booking.review.artist} value={artistLabel} />
                          <ReviewRow
                            label={t.booking.review.date}
                            value={form.date ? calendar.formatFull(form.date) : t.booking.review.none}
                          />
                          <ReviewRow label={t.booking.review.time} value={form.time || t.booking.review.none} />
                          <ReviewRow
                            label={t.booking.review.bodyPart}
                            value={
                              form.bodyPart
                                ? (locale === "ka"
                                    ? BODY_PARTS.find((b) => b.en === form.bodyPart)?.ka
                                    : form.bodyPart) ?? form.bodyPart
                                : t.booking.review.none
                            }
                          />
                          <ReviewRow
                            label={t.booking.review.size}
                            value={
                              form.size
                                ? (locale === "ka"
                                    ? TATTOO_SIZES.find((s) => s.en === form.size)?.ka
                                    : form.size) ?? form.size
                                : t.booking.review.none
                            }
                          />
                          <ReviewRow
                            label={t.booking.review.idea}
                            value={form.idea || t.booking.review.none}
                          />
                          {form.styles.length > 0 && (
                            <div className={styles.reviewChips}>
                              {form.styles.map((s) => (
                                <span key={s} className={styles.reviewChip}>{s}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <footer className={styles.foot}>
                  {step > 0 ? (
                    <NeonButton variant="ghost" onClick={back}>
                      {t.booking.back}
                    </NeonButton>
                  ) : (
                    <span />
                  )}

                  {step < STEP_COUNT - 1 ? (
                    <NeonButton onClick={next}>{t.booking.next}</NeonButton>
                  ) : (
                    <NeonButton onClick={submit} pulse disabled={status === "sending"}>
                      {status === "sending" ? (
                        <span className={styles.sending}>
                          <Loader2 size={16} className={styles.spin} />
                          {t.booking.sending}
                        </span>
                      ) : (
                        t.booking.submit
                      )}
                    </NeonButton>
                  )}
                </footer>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={styles.field}>
      <span className={styles.fieldLabel}>{label}</span>
      {children}
      {error && <span className={styles.err}>{error}</span>}
    </label>
  );
}

function AutoTextarea({
  value,
  placeholder,
  onChange,
}: {
  value: string;
  placeholder: string;
  onChange: (v: string) => void;
}) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      className={styles.textarea}
      rows={3}
      onChange={(e) => {
        onChange(e.target.value);
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
      }}
    />
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.reviewRow}>
      <span className={styles.reviewLabel}>{label}</span>
      <span className={styles.reviewValue}>{value}</span>
    </div>
  );
}

function SuccessScreen({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  return (
    <motion.div
      className={styles.success}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <svg viewBox="0 0 80 80" className={styles.checkSvg} aria-hidden="true">
        <motion.circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke="#D9B382"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <motion.path
          d="M25 41 L36 52 L57 29"
          fill="none"
          stroke="#FF2E88"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        />
      </svg>
      <h2 className={styles.successTitle}>{t.booking.successTitle}</h2>
      <p className={styles.successText}>{t.booking.successText}</p>
      <NeonButton onClick={onClose}>{t.booking.close}</NeonButton>
    </motion.div>
  );
}
