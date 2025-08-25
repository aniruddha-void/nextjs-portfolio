"use client";
import React from "react";
import "../styles/ProjectTag.css"; 

export const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`project-tag ${isSelected ? "selected" : ""}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};
