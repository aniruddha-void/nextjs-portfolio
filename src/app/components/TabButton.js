"use client";

import React from "react";
import styles from "../styles/About.css"; 

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
