import './EducationSection.css';

const EducationSection = () => {
  const educationData = [
    {
      title: "B.Tech CS & AI",
      institution: "Newton School of Technology",
      year: "2024-Present",
      status: "Current",
      icon: "🎓"
    },
    {
      title: "Intermediate (XII)",
      institution: "Gandhi Public School",
      year: "2023-2024",
      status: "Completed",
      icon: "📚"
    },
    {
      title: "Matriculation (X)",
      institution: "Gandhi Public School",
      year: "2021-2022",
      status: "Completed",
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">
          <span className="accent">/</span>education-path
        </h2>
        
        <div className="timeline-wrapper">
          {educationData.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon">{edu.icon}</div>
                {index !== educationData.length - 1 && (
                  <div className="timeline-connector"></div>
                )}
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{edu.title}</h3>
                  <span className={`status-badge ${edu.status.toLowerCase()}`}>
                    {edu.status}
                  </span>
                </div>
                <p className="institution">{edu.institution}</p>
                <p className="year">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;