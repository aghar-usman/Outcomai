import React from 'react';
import './Outcomes.css';

const Outcomes = () => {
  return (
    <section className="outcomes-section">
      <div className="outcomes-container">
        <div className="outcomes-header">
          <h2 className="outcomes-title">Transform Your Revenue Operations</h2>
          <p className="outcomes-subtext">
            Our platform delivers measurable results that directly impact your bottom line. 
            Join industry leaders who have revolutionized their GTM strategy.
          </p>
        </div>
        
        <div className="outcomes-grid">
          {/* Revenue Growth Card */}
          <div className="outcome-card">
            <div className="card-icon">
              <div className="icon-wrapper revenue">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 20V10M18 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="outcome-headline">Accelerate Revenue Growth</h3>
            <p className="outcome-description">
              Drive consistent 15-25% revenue increases through AI-powered opportunity identification 
              and risk mitigation strategies.
            </p>
            <div className="outcome-stat">
              <span className="stat-number">20%</span>
              <span className="stat-label">Average Revenue Lift</span>
            </div>
          </div>
          
          {/* Intelligence Card */}
          <div className="outcome-card">
            <div className="card-icon">
              <div className="icon-wrapper intelligence">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="outcome-headline">Actionable Intelligence</h3>
            <p className="outcome-description">
              Transform raw data into strategic insights with our proprietary algorithms that 
              identify patterns and opportunities competitors miss.
            </p>
            <div className="outcome-stat">
              <span className="stat-number">50X</span>
              <span className="stat-label">More Insights</span>
            </div>
          </div>
          
          {/* Efficiency Card */}
          <div className="outcome-card">
            <div className="card-icon">
              <div className="icon-wrapper efficiency">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="outcome-headline">Maximize Team Efficiency</h3>
            <p className="outcome-description">
              Automate routine tasks and eliminate manual data entry, freeing your sales team 
              to focus on what they do best—closing deals.
            </p>
            <div className="outcome-stat">
              <span className="stat-number">80%</span>
              <span className="stat-label">Time Savings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;