"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "../components/TabButton";
import "../styles/About.css"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list">
        <li>HTML, CSS, JavaScript</li>
        <li>React.js & Next.js</li>
        <li>Node.js, Express.js</li>
        <li>MongoDB & SQL</li>
        <li>Java, C, C++</li>
        <li>Version Control: Git & GitHub</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list">
        <li>AIML Virtual Internship at Eduskill under AICTE</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list">
        <li>10th: Gokhale Education Society 2021-2022</li>
        <li>12th: Vishwasattya Junior College 2023-2024</li>
        <li>Currently: B.Tech CSE at Rai University 2024-2028</li>
      </ul>
    ),
  },
];

export default function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section id="about" className="aboutSection">
      <div className="aboutLeft">
        <Image
          src="/images/selfie.png"
          width={400}
          height={400}
          alt="About Me"
          className="aboutImage"
        />
      </div>
      <div className="aboutRight">
        <h2 className="title">About Me</h2>
        <p className="description">
          I am a <span className="highlight">Full Stack Developer</span> with experience in
          building modern web applications using React.js, Next.js, Node.js, and MongoDB. I
          create scalable, responsive, and user-friendly applications.
        </p>

        <div className="tabButtons">
          {TAB_DATA.map((t) => (
            <TabButton
              key={t.id}
              selectTab={() => handleTabChange(t.id)}
              active={tab === t.id}
            >
              {t.title}
            </TabButton>
          ))}
        </div>

        <div className="tabContent">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
      </div>
    </section>
  );
}
