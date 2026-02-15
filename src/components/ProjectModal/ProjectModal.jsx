import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose, onViewDetails }) => {
  const overlayRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Pause ScrollSmoother so modal content can scroll
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.paused(true);
    }

    const tl = gsap.timeline();
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    tl.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.92, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" },
      "-=0.15"
    );

    return () => {
      document.body.style.overflow = "";
      // Resume ScrollSmoother when modal closes
      const sm = ScrollSmoother.get();
      if (sm) {
        sm.paused(false);
      }
    };
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: onClose,
    });
    tl.to(cardRef.current, {
      opacity: 0,
      scale: 0.92,
      y: 20,
      duration: 0.25,
      ease: "power2.in",
    });
    tl.to(
      overlayRef.current,
      { opacity: 0, duration: 0.2, ease: "power2.in" },
      "-=0.1"
    );
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) handleClose();
  };

  return createPortal(
    <div
      className="modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      <div
        className="modal-card"
        ref={cardRef}
        style={{ "--accent-color": project.accentColor }}
      >
        <button className="modal-close" onClick={handleClose} aria-label="Close modal">
          &times;
        </button>

        <div className="modal-banner">
          <img src={project.image} alt={project.title} />
          <div className="modal-banner-gradient" />
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-description">{project.details || project.description}</p>

          <div className="modal-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="modal-highlights">
              <h3 className="modal-highlights-title">What I Did</h3>
              <ul>
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-actions">
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-visit-btn"
              >
                Visit Project
                <span className="modal-visit-arrow">&rarr;</span>
              </a>
            )}

            {onViewDetails && (
              <button
                className="modal-details-btn"
                onClick={() => onViewDetails(project)}
              >
                View Full Page
                <span className="modal-visit-arrow">&rarr;</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
