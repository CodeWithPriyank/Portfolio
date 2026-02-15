import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import projects from "../../data/projects";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef(null);

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) return;
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".detail-banner",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );

      tl.fromTo(
        ".detail-body > *",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.2"
      );
    }, pageRef);

    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return (
      <div className="detail-not-found">
        <h2>Project not found</h2>
        <button onClick={() => navigate("/")} className="detail-back-btn">
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div
      className="project-detail-page"
      ref={pageRef}
      style={{ "--accent-color": project.accentColor }}
    >
      <button onClick={() => navigate("/")} className="detail-back-btn">
        &larr; Back
      </button>

      <div className="detail-banner">
        <img src={project.image} alt={project.title} />
        <div className="detail-banner-gradient" />
      </div>

      <div className="detail-body">
        <h1 className="detail-title">{project.title}</h1>
        <p className="detail-description">
          {project.details || project.description}
        </p>

        <div className="detail-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="detail-tag">
              {tag}
            </span>
          ))}
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="detail-highlights">
            <h3 className="detail-highlights-title">What I Did</h3>
            <ul>
              {project.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {project.link && project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="detail-visit-btn"
          >
            Visit Project <span className="detail-visit-arrow">&rarr;</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
