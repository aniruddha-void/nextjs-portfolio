"use client";
import React, { useState, useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import "../styles/ProjectSection.css"; 

const projectsData = [
 
  {
    id: 1,
    title: "Movie Search App",
    description: "Any Movies you can Search by name and get details",
    image:"/images/projects/movie.png",
    tag: ["All"],
    gitUrl: "https://github.com/aniruddha-void/movie-search-app.git",
    previewUrl: "https://movie-search-one-psi.vercel.app/",
  },
  {
    id: 2,
    title: "Nextjs Responsive Navbar",
    description: "Responsive Navbar using Next.js and css  with dark mode feature and hamburger menu",
    image:"/images/projects/navbar.png",
    tag: ["All"],
    gitUrl: "https://aniruddhanavbar.netlify.app/",
    previewUrl: "https://aniruddhanavbar.netlify.app/",
  },
  {
    id: 3,
    title: "3D Solar System using Three.js",
    description: "A 3D Solar System model built with Three.js, featuring interactive planets and orbits.",
    image: "/images/projects/solar.png",
    tag: ["All"],
    gitUrl: "https://github.com/aniruddha-void/3d-solar-system.git",
    previewUrl: "https://weather-api-jd7h.vercel.app/",
  },
  {
    id:4,
    title: "Weather App",
    description: "A weather app that fetches real-time weather data using the OpenWeatherMap API.",
    image: "/images/projects/weather.png",
    tag: ["All"],
    gitUrl: "https://github.com/aniruddha-void/Weather-API-App.git",
    previewUrl: "https://weather-api-psi-navy.vercel.app/",
  },
  {
   id:5,
   title:"Expense Tracker",
   description:"An expense tracker app to manage your daily expenses and budget effectively",
    image:"/images/projects/expense.png",
    tag:["All"],
    gitUrl:"https://github.com/aniruddha-void/expense-tracker.git",
    previewUrl:"https://expense-tracker-aniruddha.vercel.app/",
  },
  {
    id:6,
    title:"POPX UI Clone",
    description:"A responsive clone of the POPX website using React and CSS.",
    image:"/images/projects/popx.png",
    tag:["All"],
    gitUrl:"https://github.com/aniruddha-void/Popx-ui.git",
    previewUrl:"https://aniruddha-popx-ui.vercel.app/",
  },
  {
    id:7,
    title:"Counter-Redux",
    description:"Simple Counter Application using React and Redux for state management.",
    image:"/images/projects/counter.png",
    tag:["All"],
    gitUrl:"https://github.com/aniruddha-void/Counter-Redux.git",
    previewUrl:"https://aniruddha-counter-redux.vercel.app/",
  },
  {
    id:8,
    title:"Simple Todo App",
    description:"A simple Todo application built with React to manage daily tasks.",
    image:"/images/projects/todo.png",
    tag:["All"],
    gitUrl:"https://github.com/aniruddha-void/Redux-TodoList.git",
    previewUrl:"https://aniruddha-redux-todo.vercel.app/",
  }    
  
];

export const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>

      <div className="tags-container">
        {["All"].map((t) => (
          <ProjectTag
            key={t}
            name={t}
            onClick={handleTagChange}
            isSelected={tag === t}
          />
        ))}
      </div>

      <ul ref={ref} className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
