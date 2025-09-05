import React, { useEffect, useRef } from 'react';
import './Values.css';

const Values = () => {
  const values = [
    {
      title: "Integrity",
      description: "Always ethical, always transparent",
      icon: "⚖️",
      color: "#6366F1"
    },
    {
      title: "First Principles",
      description: "Solve from the ground up",
      icon: "🧩",
      color: "#10B981"
    },
    {
      title: "Innovation",
      description: "Bold, transformative solutions",
      icon: "🚀",
      color: "#8B5CF6"
    },
    {
      title: "Customer Centric",
      description: "Value in every decision",
      icon: "🎯",
      color: "#EF4444"
    },
    {
      title: "Compassion",
      description: "Empathy + action + mutual respect create a career",
      icon: "❤️",
      color: "#818CF8"
    },
    {
      title: "Collaboration",
      description: "Together we achieve more",
      icon: "🤝",
      color: "#F59E0B"
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('career-values-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="career-values-section" ref={sectionRef}>
      <div className="career-values-background">
        <div className="career-values-grid"></div>
        <div className="career-values-glow"></div>
        <div className="career-values-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="career-values-particle" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="career-values-content">
        <div className="career-values-header">
          <div className="career-values-badge">
            <div className="career-badge-pulse"></div>
            Our Principles
          </div>
          <h2 className="career-values-title">
            Core <span className="career-gradient-text">Values</span>
          </h2>
          <p className="career-values-subtitle">
            These principles guide everything we do and define who we are as a team
          </p>
        </div>
        
        <div className="career-values-grid-container">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="career-value-card"
              style={{ '--value-color': value.color }}
            >
              <div className="career-value-visual">
                <div className="career-value-icon-container">
                  <div className="career-value-icon-bg"></div>
                  <div className="career-value-icon">{value.icon}</div>
                  <div className="career-value-orbits">
                    <div className="career-value-orbit career-value-orbit-1"></div>
                    <div className="career-value-orbit career-value-orbit-2"></div>
                  </div>
                </div>
                <div className="career-value-connection-line"></div>
              </div>
              
              <div className="career-value-content">
                <h3 className="career-value-title">{value.title}</h3>
                <p className="career-value-description">{value.description}</p>
              </div>
              
              <div className="career-value-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;