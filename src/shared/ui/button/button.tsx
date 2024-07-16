"use client";
import styles from "./button.module.css";
import { ButtonColors } from "./types";

interface Props {
  children: React.ReactNode;
  variant?: ButtonColors;
}

export const Button = ({ variant = "primary", children }: Props) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
};
