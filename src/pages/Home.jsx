// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { AnimatedBackground } from 'animated-backgrounds';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

function Home() {
  const [selectedContent, setSelectedContent] = useState("home");
  const [outAnimation, setOutAnimation] = useState(false);
  const [inAnimation, setInAnimation] = useState(true);

  const projects = [
    {
      title: "UQ Clicker",
      description: "Very first hackathon project where we made an idle clicker game based on my teams university - The University Of Queensland",
      githubLink: "https://github.com/SeanHRamsey/UQ-Clicker",
    },
  ];

  const employmentHistory = [
    {
      title: "Customer Relations Officer",
      company: "Panthera Finance",
      duration: "Feb 2023 - Jan 2024",
      description: "Casual work with customer support where I picked up key skills on communication and team work"
    },
    {
      title: "Retail Store Salesman",
      company: "Australian Computer Traders",
      duration: "March 2024 - Current",
      description: "Assisted customers in their purchases and decisions regarding tech such as computers building my face to face communication skills and organisation skills."
    },
  ];

  const handleNavClick = (section) => {
    if (section !== selectedContent) {
      setOutAnimation(true);
      setInAnimation(false);

      // Wait for the out animation to finish before changing content
      setTimeout(() => {
        setSelectedContent(section);
        setOutAnimation(false);
        setInAnimation(true);
      }, 500); // Adjust timing to match CSS animation duration
    }
  };

  const renderContent = () => {
    switch (selectedContent) {
      case "home":
        return (
          <div className={`content-section ${inAnimation ? "slide-in" : ""} ${outAnimation ? "slide-out" : ""}`}>
            <h2>Hello.</h2>
            <p className="intro-text">
              My name is Sean Hodgson Ramsey, I am an aspiring software developer currently studying Computer Science at the University of Queensland. This site has a little bit about me and has some details on some projects I am proud to share.
            </p>
          </div>
        );
      case "projects":
        return (
          <div className={`content-section ${inAnimation ? "slide-in" : ""} ${outAnimation ? "slide-out" : ""}`}>
            <h2>My Projects so far:</h2>
            <div className="project-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  githubLink={project.githubLink}
                />
              ))}
            </div>
          </div>
        );
      case "about":
        return (
          <div className={`content-section ${inAnimation ? "slide-in" : ""} ${outAnimation ? "slide-out" : ""}`}>
            <h3>About Me</h3>
            <p className="about-text">
              I am a student with aspirations of becoming a software dev/engineer some day.
            </p>
            <h3>Employment History</h3>
            <div className="timeline">
              {employmentHistory.map((job, index) => (
                <div className="timeline-item" key={index}>
                  <h4>{job.title}</h4>
                  <p className="timeline-company">{job.company}</p>
                  <p className="timeline-duration">{job.duration}</p>
                  <p className="timeline-description">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "contact":
        return (
          <div className={`content-section ${inAnimation ? "slide-in" : ""} ${outAnimation ? "slide-out" : ""}`}>
            <h3>Contact</h3>
            <p>Email: seanramsey1201@gmail.com</p>
            <p>Instagram: @seanhramsey</p>
            <p>GitHub: @seanHRamsey</p>
            <p>LinkedIn: @seanhramsey</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="frame">
      <AnimatedBackground animationName="autumnLeaves" />
      <div className="home-container">
        <div className="sidebar">
          <h1 className="name-title">Sean Ramsey</h1>
          <p className="subtitle">Student & Developer</p>
          <ul className="nav-links">
            <li onClick={() => handleNavClick("home")}>Home</li>
            <li onClick={() => handleNavClick("projects")}>Projects</li>
            <li onClick={() => handleNavClick("about")}>About</li>
            <li onClick={() => handleNavClick("contact")}>Contact</li>
          </ul>
        </div>
        <div className="main-content">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Home;
