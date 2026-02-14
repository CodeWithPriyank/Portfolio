import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import './SmoothScroll.css';


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScroll = ({ children }) => {
  const smootherRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      console.log('Mobile device detected: Smooth scrolling disabled');
      return;
    }


    smootherRef.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2, 
      effects: true,
      normalizeScroll: true, 
      ignoreMobileResize: true,
      smoothTouch: false,
      speed: 1,
      

      onUpdate: (self) => {
        if (self.scrollTrigger) {
          const progress = self.scrollTrigger.progress;
          const velocity = self.getVelocity();
          

          if ((progress < 0.05 && velocity < 0) || (progress > 0.95 && velocity > 0)) {
            gsap.to(self.wrapper, {
              duration: 0.5,
              ease: "power2.out",
              scrollTop: self.scrollTrigger.scroll()
            });
          }
        }
      }
    });


    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target && smootherRef.current) {
          smootherRef.current.scrollTo(target, true, 'top center');
        }
      }
    };


    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });


    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
      

      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;