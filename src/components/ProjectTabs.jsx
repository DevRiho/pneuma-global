import { useState } from 'react';

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState('tab-approach');

  return (
    <section className="project-section section-padding">
      <div className="container">
        <div className="project-grid">
          <div className="project-left">
            <img src="/assets/project_banner.jpg" alt="Pneuma Global Project" loading="lazy" decoding="async" />
          </div>
          <div className="project-right">
            <span className="section-subtitle">Our Mandate</span>
            <h2 className="section-title">The Pneuma Global Project</h2>
            <p style={{ fontStyle: 'italic', borderLeft: '3px solid var(--primary-color)', paddingLeft: '15px', marginBottom: '30px' }}>
              &quot;Proverbs 23:7 As a man thinketh in his heart so he is.&quot; To transform the mind of everyone that attends the program, to create a spiritual reprogramming of the mind and a shift from the mundane to ethereal understanding, and thereby causing a change in the current religious narrative.
            </p>

            <div className="project-tabs-container">
              <button
                type="button"
                className={`tab-btn${activeTab === 'tab-approach' ? ' active' : ''}`}
                onClick={() => setActiveTab('tab-approach')}
              >
                Our Approach
              </button>
              <button
                type="button"
                className={`tab-btn${activeTab === 'tab-difference' ? ' active' : ''}`}
                onClick={() => setActiveTab('tab-difference')}
              >
                Make Difference
              </button>
            </div>

            <div className={`tab-content${activeTab === 'tab-approach' ? ' active' : ''}`}>
              <div className="project-point-list">
                <div className="project-point">
                  <div className="project-point-icon">
                    <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  <div className="project-point-text">
                    <h5>Target All Ages</h5>
                    <p>Supporting people who have become uncomfortable in standard religious practices, those in danger of destructive habits, depression, or self-esteem issues.</p>
                  </div>
                </div>
                <div className="project-point">
                  <div className="project-point-icon">
                    <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  <div className="project-point-text">
                    <h5>Discipleship Meetings</h5>
                    <p>Holding scriptural study and fellowship networks where the teachings of Christ are applied practically through standard ministry and prayer.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`tab-content${activeTab === 'tab-difference' ? ' active' : ''}`}>
              <div className="project-point-list">
                <div className="project-point">
                  <div className="project-point-icon">
                    <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  <div className="project-point-text">
                    <h5>Providing Safe Water</h5>
                    <p>Voluntarily extending help, supplies, and clean resources to those experiencing structural lack via active campaigns.</p>
                  </div>
                </div>
                <div className="project-point">
                  <div className="project-point-icon">
                    <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  <div className="project-point-text">
                    <h5>Educational Systems</h5>
                    <p>Funding local learning centers, providing sponsorships, materials, and digital certifications to help youth secure better livelihoods.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTabs;
