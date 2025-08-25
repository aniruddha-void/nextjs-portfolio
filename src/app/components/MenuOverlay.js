"use client";
import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import "../styles/MenuOverlay.css";
export const MenuOverlay = ({ links }) => {
  const overlayVariants = {
    hidden: { y: "-100%" },
    visible: { y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.3, duration: 0.3 },
    }),
  };

  return (
    <motion.ul
      className="menu-overlay"
      initial="hidden"
      animate="visible"
      variants={overlayVariants}
    >
      {links.map((link, index) => (
        <motion.li key={index} custom={index} variants={linkVariants}>
          <NavLink href={link.path} title={link.title} />
        </motion.li>
      ))}
    </motion.ul>
  );
};
