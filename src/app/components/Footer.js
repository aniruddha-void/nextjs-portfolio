"use client";
import "../styles/Footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="logo">Aniruddha Portfolio Website</span>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
