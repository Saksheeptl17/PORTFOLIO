import { useRef } from "react";
import "./project.css";
import Background from "../Background/background";

const projects = [
  {
    title: "Portfolio",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    link1: "#",
    link2: "#",
    description: "This is an amazing project that showcases animation and interactivity."
  },
  {
    title: "Project 2",
    video: "https://www.w3schools.com/html/movie.mp4",
    link1: "#",
    link2: "#",
    description: "A creative project demonstrating video integration and smooth transitions."
  },
  {
    title: "Project 3",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    link1: "#",
    link2: "#",
    description: "An innovative UI design with engaging effects and seamless playback."
  },
];

export default function Project() {
  return (
    <div id="project" className="project-section">
       <Background />
      <h2 className="main-title">Projects</h2>
      <div className="underline"></div>

      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="project-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="project-video-container">
        <video ref={videoRef} src={project.video} className="project-video" muted loop />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-buttons">
          <a href={project.link1} className="btn btn-primary">View Project</a>
          <a href={project.link2} className="btn btn-secondary">GitHub</a>
        </div>
      </div>
    </div>
  );
}
