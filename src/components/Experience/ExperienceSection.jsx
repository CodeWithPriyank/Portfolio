import { useRef, useEffect } from 'react';
import './ExperienceSection.css';

const getDuration = (startYear, startMonth, endYear, endMonth) => {
  const start = new Date(startYear, startMonth - 1);
  const end = endYear ? new Date(endYear, endMonth - 1) : new Date();
  // +1 to match LinkedIn's inclusive counting of both start and end month
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) + 1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  let result = '';
  if (years > 0) result += `${years} yr `;
  if (months > 0) result += `${months} mo`;
  return result.trim() || '< 1 mo';
};

const juniorSkills = [
  "Python", "Django", "FastAPI", "Machine Learning",
  "Computer Vision", "AWS", "Docker", "Redis",
];

const traineeSkills = [
  "OpenCV", "Redis", "Python", "Computer Vision", "Flask",
];

const ExperienceSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('exp-animate-in');
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('.exp-animate').forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const totalDuration = getDuration(2025, 1);

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="experience-container">
        <h2 className="exp-section-title exp-animate">
          <span className="exp-yellow">/</span>experience
        </h2>

        <div className="exp-company exp-animate">
          <div className="exp-company-header">
            <div className="exp-logo">Y</div>
            <div className="exp-company-meta">
              <h3 className="exp-company-name">Yudiz Solutions</h3>
              <span className="exp-meta-text">{totalDuration}</span>
              <span className="exp-meta-text">Ahmedabad · On-site</span>
            </div>
          </div>

          <div className="exp-timeline">
            {/* Jr. Python Developer */}
            <div className="exp-role">
              <div className="exp-dot exp-dot--active"></div>
              <div className="exp-role-details">
                <h4 className="exp-role-title">Jr. Python Developer</h4>
                <span className="exp-role-type">Full-time</span>
                <span className="exp-role-period">
                  Jul 2025 – Present · {getDuration(2025, 7)}
                </span>
                <div className="exp-skills">
                  {juniorSkills.map((skill, i) => (
                    <span key={i} className="exp-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Trainee Python Developer */}
            <div className="exp-role">
              <div className="exp-dot"></div>
              <div className="exp-role-details">
                <h4 className="exp-role-title">Trainee Python Developer</h4>
                <span className="exp-role-type">Internship</span>
                <span className="exp-role-period">Jan 2025 – Jun 2025 · 6 mo</span>
                <div className="exp-skills">
                  {traineeSkills.map((skill, i) => (
                    <span key={i} className="exp-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
