"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "../styles/Navbar.css";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          Aniruddha Portfolio
        </Link>

        <div className="menu">
          <ul className="menu-list">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="menu-button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <XMarkIcon className="icon" /> : <Bars3Icon className="icon" />}
        </button>
      </div>
      <div className={`menu-overlay ${navbarOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={() => setNavbarOpen(false)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
