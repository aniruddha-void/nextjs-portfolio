"use client"
import HeroSection from "./components/HeroSection"
import About from "./about/page"
import { Footer } from "./components/Footer"
import Email from "./contactform/page"
import { Navbar } from "./components/Navbar"
import { ProjectCard } from "./components/ProjectCard"
import { ProjectSection } from "./components/ProjectSection"

function page() {
  return (
    <div>
      <Navbar/>
       <HeroSection/>
      <About/>
      <ProjectCard/>
      <ProjectSection/>
      <Email/>
      <Footer/>
     
    </div>
  )
}

export default page
