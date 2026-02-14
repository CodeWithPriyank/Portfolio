import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./HeroSection.css";
import SplitText from "./SplitText";

const HeroSection = () => {
  const heroContainerRef = useRef(null);
  const dotsRef = useRef([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      dotsRef.current.forEach((dot, index) => {
        gsap.to(dot, {
          y: () => gsap.utils.random(-20, 20),
          x: () => gsap.utils.random(-15, 15),
          rotation: () => gsap.utils.random(-45, 45),
          duration: () => gsap.utils.random(3, 6),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.1,
        });
      });


      const magneticElements = document.querySelectorAll('.magnetic');
      magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(element, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.8,
            ease: "power2.out"
          });
        });

        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)"
          });
        });
      });


      gsap.to(heroContainerRef.current, {
        scale: 1.02,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });


      if (cursorRef.current) {
        document.addEventListener('mousemove', (e) => {
          gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.8,
            ease: "power2.out"
          });
        });


        magneticElements.forEach(element => {
          element.addEventListener('mouseenter', () => {
            gsap.to(cursorRef.current, {
              scale: 2,
              backgroundColor: "rgba(255, 193, 7, 0.3)",
              duration: 0.3
            });
          });

          element.addEventListener('mouseleave', () => {
            gsap.to(cursorRef.current, {
              scale: 1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              duration: 0.3
            });
          });
        });
      }

      const textElements = document.querySelectorAll('.hero-heading');
      textElements.forEach(text => {
        text.addEventListener('mouseenter', () => {
          gsap.to(text, {
            filter: "blur(0.5px) brightness(1.2)",
            duration: 0.5,
            ease: "power2.out"
          });
        });

        text.addEventListener('mouseleave', () => {
          gsap.to(text, {
            filter: "blur(0px) brightness(1)",
            duration: 0.5,
            ease: "power2.out"
          });
        });
      });

    }, heroContainerRef);

    return () => ctx.revert();
  }, []);


  return (
    <div className="hero-container" ref={heroContainerRef}>
      <div className="background-dots"></div>
      <div className="interactive-cursor" ref={cursorRef}></div>
      
      <div className="hero-content">
        <h1 className="hero-heading magnetic">
          <SplitText
            text="Hey, I'm"
            className="cream"
            delay={70}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            tag="span"
          />
          {" "}
          <SplitText
            text="Priyank Goswami 👋🏻"
            className="yellow magnetic"
            delay={70}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            tag="span"
          />
        </h1>
        
        <h1 className="hero-heading magnetic">
          <SplitText
            text="I Make Fascination in"
            className="cream"
            delay={70}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            tag="span"
          />
          {" "}
          <SplitText
            text="Design 🎨"
            className="orange magnetic"
            delay={70}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            tag="span"
          />
          {" "}
          <SplitText
            text="and"
            className="cream"
            delay={70}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            tag="span"
          />
          {" "}
          <SplitText
            text="Tech"
            className="teal magnetic"
            delay={70}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            tag="span"
          />
          {" "}
          <SplitText
            text="! 💻"
            className="cream"
            delay={70}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            tag="span"
          />
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;