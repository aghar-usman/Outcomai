import React, { useEffect, useRef } from 'react';
import './CTA.css';

const CTA = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('cta-visible');
        }
      },
      { threshold: 0.2 }
    );
    
    if (node) {
      observer.observe(node);
    }
    
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="cta-section">
      <div className="cta-background">
        <div className="cta-grid"></div>
        <div className="cta-glow"></div>
        <div className="cta-particles">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="cta-particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 4}px`,
                height: `${Math.random() * 6 + 4}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 15}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="cta-content">
        <div className="cta-text">
          <h2 className="cta-headline">Don't see the right role?</h2>
          <p className="cta-subtext">
            We're always excited to meet people who want to shape the future of GTM. 
            Reach out and tell us why you'd be a great fit.
          </p>
        </div>
        
        <div className="cta-buttons">
          <a href="#waitlist" className="cta-button primary">
            Join the Waitlist
          </a>
          <a href="#contact" className="cta-button secondary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;