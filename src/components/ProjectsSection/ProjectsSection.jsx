import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProjectsSection.css";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const projects = [
    {
      title: "Wondrr",
      description: "A marketplace for group departures",
      tags: ["NextTS", "MongoDB", "Redis", "AWS", "Express"],
      accentColor: "#049EF4",
      link: "https://wondrr.in/",
      image: "/Wondrr_jpg.jpg"
    },
    {
      title: "Learnio",
      description: "A page where students can study with notes, quizzes and more",
      tags: ["HTML", "CSS", "React"],
      accentColor: "#02c21b",
      link: "https://learnio-zeta.vercel.app/",
      image: "/learnio.png"
    },
    {
      title: "Portfolio Template",
      description: "Your custom devfolio!",
      tags: ["HTML", "CSS", "React"],
      accentColor: "#A259FF",
      link: "https://portfolio-template-beta-olive.vercel.app/",
      image: "/ptemplate.png"
    },
    {
      title: "Simple Landing Page",
      description: "Frontend landing page of an AI Image generator",
      tags: ["HTML", "CSS", "React"],
      accentColor: "#FF6347",
      link: "https://progenix-ai.vercel.app/",
      image: "/aihero.png"
    },
    {
      title: "You came for Designs?",
      description: "Click here to explore my designs🎨",
      tags: ["Figma", "AdobeXD"],
      accentColor: "#fff",
      link: "/figma-designs",
      image: "/Cover.png"
    },
    {
      title: "More Projects",
      description: "Click here to explore my work✨",
      tags: ["My GitHub Profile"],
      accentColor: "#ffd700",
      link: "https://github.com/CodeWithPriyank",
      image: "/more.svg"
    },
    {
      title: "Coming up",
      description: "More cool projects are on the way",
      tags: ["React", "Node.js", " Figma"],
      accentColor: "rgb(149, 174, 255)",
      link: "#",
      image: "/stay_tuned.jpg"
    }
  ];

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

  const handleProjectClick = (link, isExternal, index) => {
    const tile = tilesRef.current[index];
    if (tile) {
      gsap.to(tile, {
        scale: 0.98,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          if (isExternal) {
            window.open(link, "_blank", "noopener,noreferrer");
          }
        }
      });
    }
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
        {projects.map((project, index) => {
          const isExternal = project.link.startsWith("http");

          return isExternal ? (
            <div
              key={index}
              className="project-tile"
              style={{ "--accent-color": project.accentColor }}
              onClick={() => handleProjectClick(project.link, true, index)}
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
          ) : (
            <Link
              to={project.link}
              key={index}
              className="project-link-wrapper"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <div
                className="project-tile"
                style={{ "--accent-color": project.accentColor }}
                onMouseEnter={() => handleProjectHover(index, true)}
                onMouseLeave={() => handleProjectHover(index, false)}
                ref={el => tilesRef.current[index] = el}
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
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;