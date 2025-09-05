import React from 'react';
import './Solution.css';

const Solution = () => {
  return (
    <section className="solution-container">
      <div className="solution-content">
        <div className="solution-left">
          <div className="solution-header">
            {/* Updated Headline to match the provided content */}
            <h2 className="solution-title">We're Building on Trust</h2>
            <p className="solution-description">
              Trust is the foundation. You should never have to second-guess your data or insights.
            </p>
          </div>
          
          {/* Scale Animation Container */}
          <div className="scale-animation-container">
            <div className="data-flow-animation">
              <div className="data-source">
                <div className="data-source-icon">📊</div>
                <div className="data-particle"></div>
                <div className="data-particle"></div>
                <div className="data-particle"></div>
              </div>
              
              <div className="data-flow-line"></div>
              
              <div className="model-processor">
                <div className="model-processor-inner">
                  <div className="model-processor-icon">🤖</div>
                </div>
              </div>
              
              <div className="data-flow-line"></div>
              
              <div className="processed-output">
                <div className="output-glow"></div>
                <div className="output-icon">✨</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="solution-right">
          <div className="solution-grid">
            <div className="solution-card">
              <div className="solution-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M12 3C13.1819 3 14.3522 3.23279 15.4442 3.68508C16.5361 4.13738 17.5282 4.80031 18.364 5.63604C19.1997 6.47177 19.8626 7.46392 20.3149 8.55585C20.7672 9.64778 21 10.8181 21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="solution-card-content">
                <div className="solution-card-stat">
                  <span className="solution-stat-percentage">100%</span>
                </div>
                <h3 className="solution-card-title">Fix the Data Problem</h3>
                <p className="solution-card-description">No more broken foundations</p>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="solution-card-content">
                <h3 className="solution-card-title">Conversational Intelligence</h3>
                <p className="solution-card-description">Insights at your fingertips</p>
              </div>
            </div>
            
            <div className="solution-card">
              <div className="solution-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="solution-card-content">
                <h3 className="solution-card-title">Effortless CRM Updates</h3>
                <p className="solution-card-description">Mundane work, automated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="solution-background">
        <div className="solution-grid-bg"></div>
        <div className="solution-glow"></div>
        <div className="solution-glow-secondary"></div>
      </div>
    </section>
  );
};

export default Solution;