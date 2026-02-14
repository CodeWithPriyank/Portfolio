import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './PageLoader.css';

const PageLoader = ({ onLoadComplete }) => {
  const loaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const greetingRef = useRef(null);
  const shutterRef = useRef(null);

  const greetings = [
    'Hello',
    'Bonjour',
    'Hola',
    'Ciao',
    'Olá',
    'Hallo',
    'नमस्ते', // Namaste (Hindi)
    '你好', // Ni Hao (Chinese)
    'Привет', // Privet (Russian)
  ];

  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    // Cycle through greetings
    const greetingInterval = setInterval(() => {
      setCurrentGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 200);

    const timeline = gsap.timeline({
      onComplete: () => {
        clearInterval(greetingInterval);
        if (onLoadComplete) {
          setTimeout(onLoadComplete, 100);
        }
      }
    });

    // Animate progress bar
    timeline
      .to(progressBarRef.current, {
        width: '100%',
        duration: 2.5,
        ease: 'power2.inOut'
      })
      // Pause briefly
      .to({}, { duration: 0.3 })
      // Fade out greeting
      .to(greetingRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: 'power2.in'
      })
      // Shop shutter rolls up from bottom
      .to(shutterRef.current, {
        y: '-100%',
        duration: 1.2,
        ease: 'power3.inOut'
      }, '-=0.1')
      // Fade out entire loader
      .to(loaderRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power1.out'
      }, '-=0.3');

    return () => {
      timeline.kill();
      clearInterval(greetingInterval);
    };
  }, [onLoadComplete]);

  return (
    <div className="page-loader" ref={loaderRef}>
      {/* Shop Shutter */}
      <div className="shop-shutter" ref={shutterRef}>
        {/* Create horizontal shutter lines/slats */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="shutter-slat"
            style={{ '--delay': `${i * 0.05}s` }}
          />
        ))}
        
        {/* Shutter bottom edge with decorative handle */}
        <div className="shutter-bottom">
          <div className="shutter-handle"></div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="loader-content" ref={greetingRef}>
        <div className="greeting-container">
          <span className="bullet">•</span>
          <h1 className="greeting-text">{greetings[currentGreetingIndex]}</h1>
        </div>
        
        <div className="progress-bar-wrapper">
          <div className="progress-bar" ref={progressBarRef}></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
