import { useRef, useEffect } from 'react';
import {
  SiPython, SiDjango, SiFlask, SiFastapi,
  SiAmazonwebservices, SiDocker, SiRedis,
  SiJavascript, SiNodedotjs, SiReact,
  SiMysql, SiMongodb, SiRabbitmq,
} from 'react-icons/si';
import {
  TbBrain, TbEye, TbRobot, TbDatabase, TbMessageDots, TbSearch, TbLeaf,
} from 'react-icons/tb';
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
    { name: "Python",                icon: SiPython,           color: "#3776AB" },
    { name: "Django",                icon: SiDjango,           color: "#44B78B" },
    { name: "Flask",                 icon: SiFlask,            color: "#ffffff" },
    { name: "FastAPI",               icon: SiFastapi,          color: "#009688" },
    { name: "Artificial Intelligence", icon: TbBrain,          color: "#ef09cc" },
    { name: "Machine Learning",      icon: TbBrain,            color: "#ca0a44" },
    { name: "Computer Vision",       icon: TbEye,              color: "#ff7b00" },
    { name: "AI Agents",             icon: TbRobot,            color: "#ff4000" },
    { name: "RAG",                   icon: TbSearch,           color: "#ef09cc" },
    { name: "LLM",                   icon: TbMessageDots,      color: "#ffffff" },
    { name: "AWS",                   icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "Docker",                icon: SiDocker,           color: "#2496ED" },
    { name: "Redis",                 icon: SiRedis,            color: "#FF4438" },
    { name: "Javascript",            icon: SiJavascript,       color: "#F7DF1E" },
    { name: "Node.js",               icon: SiNodedotjs,        color: "#68A063" },
    { name: "React.js",              icon: SiReact,            color: "#61DAFB" },
    { name: "MySQL",                 icon: SiMysql,            color: "#4479A1" },
    { name: "MongoDB",               icon: SiMongodb,          color: "#47A248" },
    { name: "VectorDB",              icon: TbDatabase,         color: "#0227df" },
    { name: "RabbitMQ",              icon: SiRabbitmq,         color: "#FF6600" },
    { name: "Celery",                icon: TbLeaf,             color: "#57df02" },
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
                  <tech.icon size={20} color={tech.color} />
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