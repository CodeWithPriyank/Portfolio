import { useState, useEffect, useRef } from 'react';
import './OsmoMenu.css';

const OsmoMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 100;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) && 
          buttonRef.current && 
          !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Menu Trigger Button */}
      <button 
        ref={buttonRef}
        className={`osmo-menu-trigger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <div className="menu-icon">
          <span className="icon-line"></span>
          <span className="icon-line"></span>
        </div>
        <span className="menu-text">Menu</span>
      </button>

      {/* Full-Width Dropdown Menu */}
      <div ref={menuRef} className={`osmo-menu-dropdown ${isOpen ? 'open' : ''}`}>
        <div className="menu-content">
          {/* Name Display */}
          <div className={`menu-header ${isOpen ? 'visible' : ''}`}>
            <h2 className="menu-name">Priyank Goswami</h2>
          </div>

          {/* Navigation Items */}
          <nav className="menu-nav">
            <ul>
              {menuItems.map((item, index) => (
                <li 
                  key={item.id}
                  className={`menu-item ${isOpen ? 'visible' : ''}`}
                  style={{ '--item-index': index }}
                >
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="menu-link"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`menu-overlay ${isOpen ? 'visible' : ''}`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default OsmoMenu;
