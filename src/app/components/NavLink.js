"use client";

import React from "react";
import Link from "next/link";
import "../styles/NavLink.css";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="nav-link">
      {title}
    </Link>
  );
};

export default NavLink;
