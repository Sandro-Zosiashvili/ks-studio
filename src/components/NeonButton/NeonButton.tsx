"use client";

import React from "react";
import styles from "./NeonButton.module.scss";

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  pulse?: boolean;
  disabled?: boolean;
  full?: boolean;
  ariaLabel?: string;
}

export default function NeonButton({
  children,
  onClick,
  variant = "primary",
  type = "button",
  pulse = false,
  disabled = false,
  full = false,
  ariaLabel,
}: NeonButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={[
        styles.btn,
        styles[variant],
        pulse ? styles.pulse : "",
        full ? styles.full : "",
      ].join(" ")}
    >
      <span className={styles.label}>{children}</span>
    </button>
  );
}
