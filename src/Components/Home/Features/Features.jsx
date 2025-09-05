import React, { useEffect, useRef, useState } from 'react';
import './Features.css';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const features = React.useMemo(() => [
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12H15M9 16H15M9 8H15M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      percentage: 91,
      title: "CRM Data Incomplete", 
      description: "Missing contact details, outdated information, and incomplete customer profiles limit sales effectiveness."
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15V17M12 7V13M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      percentage: 35,
      title: "AE Time Wasted Updating CRM", 
      description: "Sales representatives spend over a third of their time on manual data entry instead of selling."
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L15 15M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      percentage: 50,
      title: "AEs Cite Bad Data as #1 Challenge", 
      description: "Half of all account executives report that poor data quality is their biggest obstacle to hitting sales targets."
    }
  ], []);

  // Intersection Observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section className="features-container" ref={sectionRef}>
      {/* Enhanced background elements */}
      <div className="features-background">
        <div className="features-grid"></div>
        <div className="features-glow"></div>
        <div className="features-glow-secondary"></div>
        
        {/* Particle effects */}
        <div className="features-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>
      
      <div className="features-content">
        <div className="features-header">
          <h2 className="features-subtitle">Data Challenges</h2>
          <h3 className="features-title">The GTM Data Crisis</h3>
          <p className="features-description">
            Sales teams struggle with data quality issues that directly impact revenue performance
            and operational efficiency.
          </p>
        </div>
        
        <div className={`features-grid-cards ${isVisible ? 'visible' : ''}`}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="card-icon">
                {feature.icon}
              </div>
              
              <div className="card-content">
                <div className="card-stat">
                  <span className="stat-percentage">{feature.percentage}%</span>
                </div>
                <h4 className="card-title">{feature.title}</h4>
                <p className="card-description">{feature.description}</p>
              </div>
              
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;