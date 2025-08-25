"use client";
import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import "../styles/ProjectCard.css";

export const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="project-card">
      <div
  className="project-image"
  style={{ backgroundImage: `url(${imgUrl})` }}
></div>

      <div className="project-content">
        <h5 className="project-title">{title}</h5>
        <p className="project-description">{description}</p>

        <div className="project-links">
        
          {gitUrl && (
            <Link href={gitUrl} target="_blank">
              <button className="btn">GitHub</button>
            </Link>
          )}

        
          {previewUrl && previewUrl !== "/" && (
            <Link href={previewUrl} target="_blank">
              <button className="btn">Live Demo</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
