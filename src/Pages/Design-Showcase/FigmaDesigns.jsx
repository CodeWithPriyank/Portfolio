import { useRef, useEffect } from 'react';
import './FigmaDesigns.css';

const FigmaDesigns = () => {
  const designs = [
    {
      title: "Portfolio UI Kit",
      description: "Complete design system for Designer portfolios",
      image: "/ptemplate.png",
      link: "https://www.figma.com/design/Sk3Qb5znZjxTr4mw4G5t1V/Portfolio-Design?node-id=0-1&t=QwTb2lgQ4b5BOmrb-1"
    },
    {
      title: "Mentormap",
      description: "Client Website. Related to mentoring. Sorry can't share much :)",
      image: "/Mentormap.png",
      link: "https://www.figma.com/design/Nt3zGHMHQmBiNTkeMR1Wys/MentorMap?m=auto&t=mL5MUBhMavwcZ4Zs-1"
    },
    {
      title: "SK Builders",
      description: "An architectural website ! Still a client website",
      image: "/Mockup 17.jpg",
      link: "https://www.figma.com/design/74UYpNazzdCxhdIl1rvEEJ/SK-Builders?m=auto&t=mL5MUBhMavwcZ4Zs-1"
    },
    {
      title: "Rippl",
      description: "A website which intriduces you to a jewelery brand, Rippl",
      image: "/rippl.png",
      link: "https://www.figma.com/design/tysLv78xnsQaSbwb6UkCzZ/Jewellery-Site?node-id=0-1&t=RVcpTx4wlMZ81kbd-1"
    },
    {
      title: "Kixar",
      description: "Introducing a turf booking website, Kixar ! Tadaaaa ;)",
      image: "/kixar.png",
      link: "https://www.figma.com/design/iTv5MdvOJJ04InbKuMk3AT/Kixar-Main?node-id=31-583&t=m80BwfzjHr0iMgLv-1"
    },
    {
      title: "Real Portfolio ?",
      description: "I designed this for my big brothaa.",
      image: "/Screenshot 2026-02-01 at 7.10.47 PM.png",
      link: "https://www.figma.com/design/fzRRUpvotTWvsmyjQyuGEo/Shishir-Patra?node-id=0-1&t=PBxnerWS7Q3zJo8b-1"
    },
    {
      title: "Waitit App",
      description: "A 10 minute delivery app but within traffic",
      image: "/waitit.png",
      link: "https://www.figma.com/design/G3uLOrslVMR0WL35fuyDdd/Project-Waitit?node-id=0-1&t=oI2i6Q5EWbp0p45s-1"
    },
    {
      title: "Interactive Burger",
      description: "A website where you can play with the burger",
      image: "/burger.png",
      link: "https://www.figma.com/design/XHXJSAowh4uaq0fplKhFng/Burger-Interactive?node-id=0-1&t=hWX7QT1hp0UwJK5I-1"
    },
    {
      title: "More Designs",
      description: "Checkout my Behance profile for more!",
      image: "/behance.jpg",
      link: "https://www.behance.net"
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
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
      const cards = sectionRef.current.querySelectorAll('.design-card');
      cards.forEach((card, index) => {
        card.style.setProperty('--delay', `${index * 0.1}s`);
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="figma-designs" className="figma-section" ref={sectionRef}>
        <div className="container">
          <h2 className="section-title">
            <span className="yellow">/</span>Love to see you here❤️
          </h2>
          <p className="section-subtitle">
            My <span className="teal">Figma creations</span> that blend <span className="orange">aesthetics</span> and <span className="pink">functionality</span>
          </p>

          <div className="designs-grid">
            {designs.map((design, index) => (
              <a
                key={index}
                href={design.link}
                target="_blank"
                rel="noopener noreferrer"
                className="design-card"
                style={{ '--accent-color': ['#ffd700', '#4ecdc4', '#ff6347', '#f8a5c2'][index % 4] }}
              >
                <div className="card-image">
                  <img src={design.image} alt={design.title} />
                  <div className="image-overlay"></div>
                </div>
                <div className="card-content">
                  <h3>{design.title}</h3>
                  <p>{design.description}</p>
                  <div className="view-link">
                    View in Figma <span className="arrow">→</span>
                  </div>
                </div>
                <div className="card-border"></div>
              </a>
            ))}
          </div>
        </div>
        <button className='back-btn' onClick={() => window.history.back()}>← Back</button>
      </section>
  );
};

export default FigmaDesigns;
