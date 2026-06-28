import { useState } from 'react';
import InnerHeader from '../components/InnerHeader';
import TestimonialSlider from '../components/TestimonialSlider';
import CtaSection from '../components/CtaSection';

const About = () => {
  const [missionExpanded, setMissionExpanded] = useState(false);

  return (
    <>
      <InnerHeader title="About Us" />

      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="project-grid">
            <div className="project-left">
              <img src={`${import.meta.env.BASE_URL}assets/main_worship.jpg`} alt="Ministry worship gathering" loading="lazy" decoding="async" />
            </div>
            <div className="project-right">
              <span className="section-subtitle">About Us</span>
              <h2 className="section-title">Pneuma is an Apostolic and Discipleship Ministry</h2>
              <p style={{ marginBottom: '30px' }}>
                The increase which is also known as Pneuma increase discipleship Ministry is a non-denominational spiritual cradle with a mandate to spark a wildfire, to create a ripple that will become a tidal wave of spiritual awareness across the globe.
                The functions of The increase is not within the church but a more circular approach.
                Reaching out to people who feel more comfortable in the clubs and giving them an opportunity to make or consider making a transition to the church with the increase as a medium through the power and the spirit of God.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
                <div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '10px', color: 'var(--primary-color)' }}>Mission</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                    To use all mediums to propagate the gospel of Christ in grace and righteousness by the power of the holy spirit.
                    To establish mega churches without walls and a true Christian community devoid of religious spirit.
                    {!missionExpanded && <span>...</span>}
                    {missionExpanded && (
                      <>
                        {' '}To take the church out of buildings and into the hearts of men as God intended.
                        To also function as a voluntary aid organization in crisis situations.
                        To instill the spirit of evangelism and missions in the lives of all whom we get in contact with and to properly disciple them according to the strict teachings of the word of God.
                        To spread the gospel of love and grace.
                        To encourage Human capacity building in the form of Educational and spiritual seminars and teachings.
                        To train youths and youth leaders and mentors, campus fellowship leaders and many more in the rudiments and the foundation of church leadership.
                      </>
                    )}
                  </p>
                  <button
                    type="button"
                    className="read-more-btn"
                    style={{ color: 'var(--primary-color)', cursor: 'pointer', fontWeight: 500, marginTop: '5px', background: 'none', border: 'none', padding: 0 }}
                    onClick={() => setMissionExpanded((prev) => !prev)}
                  >
                    {missionExpanded ? 'Read Less' : 'Read More'}
                  </button>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '10px', color: 'var(--primary-color)' }}>Vision</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>That every one that passes through the increase becomes a true workman rightly dividing the word of truth, and discipling others for kingdom expansion. To breed fire branded spiritual perfectionists who are passionate about the kingdom of God.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: 'var(--bg-light)', padding: '25px', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
                <div style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg style={{ width: '22px', height: '22px', fill: 'currentColor' }} viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a1.003 1.003 0 0 0-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4.03c-.55 0-1 .45-1 1C3.03 14.03 11 22 20.97 22c.55 0 1-.45 1-1v-4.62c0-.55-.45-1-1-1z"/></svg>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-light)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Partner With Us Today</span>
                  <a href="tel:+447423200260" style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--title-color)' }}>+44 7423 200260</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto 50px auto' }}>
            <span className="section-subtitle" style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>OUR PASTORS</span>
            <h2 className="section-title">Meet Our Pastors</h2>
            <p>Guided by our Lead Pastor and Co-Founder to spark spiritual wildfire and raise global disciples.</p>
          </div>
          
          <div className="pastors-grid">
            {/* Pastor 1 */}
            <div className="tp-team-2__wrapper">
              <div className="tp-team-2__item text-center">
                <div className="tp-team-2__thumb">
                  <img src={`${import.meta.env.BASE_URL}assets/pastor_mr.jpg`} alt="Pastor Krimi Johnson" loading="lazy" decoding="async" />
                </div>
                <div className="tp-team-2__content">
                  <div className="tp-team-2__author-info">
                    <h3 className="tp-team-2__author-name">
                      <a href="#pastor">Pastor Krimi Johnson</a>
                    </h3>
                    <span>Lead Pastor / Overseer</span>
                  </div>
                  <div className="tp-team-2__social-box">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Pastor 2 */}
            <div className="tp-team-2__wrapper">
              <div className="tp-team-2__item text-center">
                <div className="tp-team-2__thumb">
                  <img src={`${import.meta.env.BASE_URL}assets/pastor_mrs.jpg`} alt="Mrs. Krimi Johnson" loading="lazy" decoding="async" />
                </div>
                <div className="tp-team-2__content">
                  <div className="tp-team-2__author-info">
                    <h3 className="tp-team-2__author-name">
                      <a href="#pastor">Mrs. Krimi Johnson</a>
                    </h3>
                    <span>Pastor / Co-Founder</span>
                  </div>
                  <div className="tp-team-2__social-box">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />
      <CtaSection showButton />
    </>
  );
};

export default About;
