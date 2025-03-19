import { useRef } from "react";
import video1 from "../../assets/essymed.mp4";
import video2 from "../../assets/shoppy.mp4";
import video3 from "../../assets/portfolio.mp4";
import Background from "../Background/background";
import "./project.css";

const projects = [
  {
    title: "EssyMed",
    video: video1,
    link1: "#",
    link2: "#",
    description:
      "A medical assistance platform with smooth animations and interactivity.",
  },
  {
    title: "Shoppy",
    video: video2,
    link1: "#",
    link2: "#",
    description:
      "An e-commerce UI with integrated video previews and seamless transitions.",
  },
  {
    title: "Portfolio",
    video: video3,
    link1: "#",
    link2: "#",
    description:
      "A personal portfolio website with a clean, engaging design and effects.",
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
    <div
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-video-container">
        <video
          ref={videoRef}
          src={project.video}
          className="project-video"
          muted
          loop
        />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-buttons">
          <a href={project.link1} className="btn btn-primary">
            View Project
          </a>
          <a href={project.link2} className="btn btn-secondary">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
