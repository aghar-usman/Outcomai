import React from 'react';
import './Cta.css';

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-glow"></div>
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Be Part of the Future of CRM</h2>
          <p className="cta-subtext">
            If you're facing these challenges, join our waitlist and we'll connect to learn more.
          </p>
          <div className="cta-actions">
            <button className="cta-button primary">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
