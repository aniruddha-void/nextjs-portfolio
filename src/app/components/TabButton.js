"use client";

import styles from "../styles/About.module.css";

export default function TabButton({ children, active, selectTab }) {
  return (
    <button
      onClick={selectTab}
      className={`${styles.tabButton} ${active ? styles.active : ""}`}
    >
      {children}
    </button>
  );
}
