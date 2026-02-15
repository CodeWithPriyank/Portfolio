import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "../../data/projects";
import ProjectModal from "../ProjectModal/ProjectModal";
import "./ProjectsSection.css";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const projectsGridRef = useRef(null);
  const tilesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      });

      gsap.fromTo(tilesRef.current,
        {
          y: 40,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsGridRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            markers: false
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleProjectClick = (project, index) => {
    const tile = tilesRef.current[index];
    if (!tile) return;

    if (project.skipModal) {
      gsap.to(tile, {
        scale: 0.98,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          if (project.link.startsWith("http")) {
            window.open(project.link, "_blank", "noopener,noreferrer");
          }
        }
      });
      return;
    }

    gsap.to(tile, {
      scale: 0.98,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        setSelectedProject(project);
      }
    });
  };

  const handleProjectHover = (index, isHovering) => {
    const tile = tilesRef.current[index];
    if (!tile) return;

    const content = tile.querySelector('.project-content');
    const tags = tile.querySelectorAll('.tag');
    const image = tile.querySelector('.project-image');
    const border = tile.querySelector('.project-border');

    if (isHovering) {
      gsap.to(tile, {
        y: -8,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out"
      });

      gsap.to(content, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(tags, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(image, {
        opacity: 0.2,
        duration: 0.4,
        ease: "power2.out"
      });

      gsap.to(border, {
        borderColor: "var(--accent-color)",
        boxShadow: "0 0 25px var(--accent-color)",
        duration: 0.3,
        ease: "power2.out"
      });

    } else {
      gsap.to(tile, {
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(content, {
        y: 10,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(image, {
        opacity: 0.45,
        duration: 0.4,
        ease: "power2.out"
      });

      gsap.to(border, {
        borderColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "none",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  const handleViewDetails = (project) => {
    setSelectedProject(null);
    navigate(`/project/${project.slug}`);
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">
          <span className="yellow">/</span>featured-projects
        </h2>
        <p className="section-subtitle">
          <span className="teal">Things I've built</span> with{" "}
          <span className="pink">passion</span> and
          <span className="orange"> more on the way</span>
          <span> ( I know these tech stack feels outdated tho )</span>
        </p>
      </div>

      <div className="projects-grid" ref={projectsGridRef}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-tile"
            style={{ "--accent-color": project.accentColor }}
            onClick={() => handleProjectClick(project, index)}
            onMouseEnter={() => handleProjectHover(index, true)}
            onMouseLeave={() => handleProjectHover(index, false)}
            ref={el => tilesRef.current[index] = el}
            role="button"
            tabIndex={0}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-overlay"></div>
            <div className="project-border"></div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleModalClose}
          onViewDetails={handleViewDetails}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
