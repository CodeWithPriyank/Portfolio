import { useRef, useEffect } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const techStack = [
    { name: "Python", color: "#3776AB" },
    { name: "Django", color: "#47A248" },
    { name: "Flask", color: "#68A063" },
    { name: "FastAPI", color: "#3776AB" },
    { name: "Artificial Intelligence", color: "#ef09cc" },
    { name: "Machine Learning", color: "#ca0a44" },
    { name: "Computer Vision", color: "#ff7b00" },
    { name: "AWS", color: "#ff7b00" },
    { name: "Docker", color: "#ffffff" },
    { name: "Redis", color: "#ff0000" },
    { name: "Javascript", color: "#F7DF1E" },
    { name: "Node.js", color: "#68A063" },
    { name: "React.js", color: "#61DAFB" },
    { name: "MySQL", color: "#f40101" },
    { name: "MongoDB", color: "#02df06" },
    
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-content animate-on-scroll">
          <h2 className="section-title">
            <span className="yellow">/</span>about-me
          </h2>
          <p className="about-text">
            I'm a <span className="teal">curious builder</span> passionate about crafting <span className="orange">interactive experiences</span> that merge <span className="pink">logic-driven code</span>. With <span className="yellow">intentional design</span> And hands-on practice in
            <span className="teal"> full-stack development</span>,  I aim to turn ideas into smooth, impactful products..
          </p>
        </div>

        <div className="skills-container">
          <h3 className="skills-title animate-on-scroll">
            <span className="orange">#</span>tech-stack
          </h3>

          <div className="skills-grid">
            {techStack.map((tech, index) => (
              <div 
                key={tech.name}
                className="skill-item animate-on-scroll"
                style={{ 
                  '--skill-color': tech.color,
                  '--delay': `${index * 0.1}s`
                }}
              >
                <div className="skill-icon">
                  <div className="skill-dot"></div>
                </div>
                <span className="skill-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fun-fact animate-on-scroll">
          <div className="fact-bubble">
            <span className="fact-icon">💡</span>
            <p>
              Fun fact: Python has been used in 
              <span className="yellow"> visual effects</span> and <span className="pink"> animation pipelines </span> for films like  
              <span className="teal"> Avatar</span> and 
              <span className="orange"> Star Wars</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;