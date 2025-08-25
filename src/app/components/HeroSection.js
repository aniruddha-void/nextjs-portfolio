"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/HeroSection.module.css";
const HeroSection = () => {
  const handleDownload = () => {
    const pdfPath = "/Aniruddha_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Aniruddha_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGrid}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroLeft}
        >
          <h1 className={styles.heroTitle}>
            <span className={styles.heroGradient}>Hello, I&apos;m </span>
            <br />
            <TypeAnimation
              sequence={["Aniruddha Bhandare", 2000, "Full Stack Developer", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className={styles.heroSubtitle}>
            I am an aspiring Full Stack Developer
          </p>
          <div className={styles.heroButtons}>
            <button
              onClick={handleDownload}
              className={styles.btnResume}
              aria-label="Download Resume"
            >
              <span className={styles.btnResumeInner}>Download Resume</span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroRight}
        >
          <div className={styles.heroImageContainer}>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
