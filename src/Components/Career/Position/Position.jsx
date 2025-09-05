import React, { useEffect, useRef, useState } from 'react';
import './Position.css';

const Position = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const positions = [
    {
      title: "Sales Development Representative",
      id: "sales-development-representative",
      description: "Drive our growth by identifying new business opportunities and building relationships with potential clients.",
      tags: ["Business Development", "Sales", "Outreach", "B2B"],
      icon: "📈"
    },
    {
      title: "Frontend Engineer (React/Next.js)",
      id: "frontend-engineer",
      description: "Build beautiful, performant user interfaces for our enterprise SaaS platform using modern React/Next.js.",
      tags: ["React", "Next.js", "TypeScript", "UI/UX"],
      icon: "⚛️"
    },
    {
      title: "Product Designer (AI/Enterprise SaaS)",
      id: "product-designer",
      description: "Shape the future of AI-powered enterprise software through intuitive, user-centered design solutions.",
      tags: ["UI/UX", "Figma", "User Research", "Prototyping"],
      icon: "🎨"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="positions" 
      className={`career-positions-section ${isVisible ? 'career-positions-visible' : ''}`}
    >
      <div className="career-positions-background">
        <div className="career-positions-grid"></div>
        <div className="career-positions-glow"></div>
        <div className="career-positions-particles">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="career-positions-particle" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 15}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="career-positions-content">
        <div className="career-positions-header">
          <div className="career-positions-badge">
            <span>🚀</span>
            Open Positions
          </div>
          <h2 className="career-positions-title">Join Our Mission</h2>
          <p className="career-positions-subtitle">
            We're building the future of enterprise technology and looking for passionate individuals to join our team.
          </p>
        </div>

        <div className="career-positions-container">
          {positions.map((position, index) => (
            <div 
              key={position.id} 
              className="career-position-card"
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="career-position-icon">{position.icon}</div>
              
              <div className="career-position-content">
                <h3 className="career-position-title">{position.title}</h3>
                <p className="career-position-description">{position.description}</p>
                
                <div className="career-position-tags">
                  {position.tags.map((tag, i) => (
                    <span key={i} className="career-position-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="career-position-footer">
                  <span className="career-position-location">🌍 Remote</span>
                  <span className="career-position-type">⏱️ Full-time</span>
                </div>
              </div>
              
              <div className="career-position-actions">
                <a 
                  href={`#apply-${position.id}`} 
                  className="career-position-apply-btn"
                >
                  Apply Now
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3335 8H12.6668" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href={`#details-${position.id}`} className="career-position-details-btn">
                  View Details
                </a>
              </div>
              
              <div className="career-position-hover-effect"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Position;