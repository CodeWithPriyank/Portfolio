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
    { name: "Javascript", color: "#F7DF1E" },
    { name: "Node.js", color: "#68A063" },
    { name: "React.js", color: "#61DAFB" },
    { name: "MySQL", color: "#00758F" },
    { name: "Python", color: "#3776AB" },
    { name: "MongoDB", color: "#47A248" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Next", color: "#FFFFFF" },
    { name: "Express", color: "#259DFF" },
    { name: "Adobe XD", color: "#FF61F6" },
    { name: "Figma", color: "#F24E1E" },
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
              Fun fact: I once got so deep into setting up <span className="yellow">React routing</span> that I nearly broke my entire <span className="pink">project preview</span> which I was not able to figure
              <span className="teal"> on browser</span> thankfully, a calm chat with my
              <span className="orange"> friend</span> helped me trace it back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;