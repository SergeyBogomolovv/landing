"use client";
import { useState } from "react";
import styles from "./accordion.module.css";
import clsx from "clsx";
import { TiArrowSortedDown } from "react-icons/ti";
import { motion, Variants } from "framer-motion";

interface Props {
  title: string;
  content: string;
}

export const Accordion = ({ title, content }: Props) => {
  const [isOpen, setOpen] = useState(false);

  const variants: Variants = {
    open: { opacity: 1, display: "initial" },
    closed: { opacity: 0, display: "none" },
  };

  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  return (
    <div className={styles.container} onClick={() => setOpen(!isOpen)}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{title}</h2>
        <motion.div
          className={styles.button}
          animate={isOpen ? "open" : "closed"}
          variants={iconVariants}
          transition={{ duration: 0.2 }}
        >
          <TiArrowSortedDown />
        </motion.div>
      </div>

      <motion.div
        className={clsx(styles.content, isOpen && styles.open)}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        initial="closed"
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <p>{content}</p>
      </motion.div>
    </div>
  );
};
