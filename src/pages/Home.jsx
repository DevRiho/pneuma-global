import { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import VideoModal from "../components/VideoModal";
import EventCard from "../components/EventCard";
import ProjectTabs from "../components/ProjectTabs";
import CtaSection from "../components/CtaSection";
import { events } from "../data/events";

const Home = () => {
  const [videoId, setVideoId] = useState(null);

  return (
    <>
      <HeroSlider />

      <section className="feature-section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <span className="circle"></span>
              <span className="bg-circle"></span>
              <div className="feature-icon-wrapper">
                <i className="flaticon-world-blood-donor-day"></i>
              </div>
              <h3>The Balm Initiative</h3>
              <p>Touching lives through healthcare and Wellness</p>
            </div>
            <div className="feature-card">
              <span className="circle"></span>
              <span className="bg-circle"></span>
              <div className="feature-icon-wrapper">
                <i className="flaticon-handshake-2"></i>
              </div>
              <h3>The Transfiguration Network</h3>
              <p>Reaching the Globe with the word of God</p>
            </div>
            <div className="feature-card">
              <span className="circle"></span>
              <span className="bg-circle"></span>
              <div className="feature-icon-wrapper">
                <i className="flaticon-handshake"></i>
              </div>
              <h3>Bring People Together</h3>
              <p>Charity is the act of extending love and kindness others</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-section section-padding"
        style={{ backgroundColor: "var(--white)", position: "relative" }}
      >
        <div className="container">
          <div className="about-grid">
            <div className="about-left">
              <div className="about-image-wrapper">
                <img
                  src="/assets/volunteer_section.jpg"
                  alt="Pneuma Global Volunteer Activity"
                  loading="lazy"
                  decoding="async"
                />
                <button
                  type="button"
                  className="video-play-btn"
                  aria-label="Play Highlight Video"
                  onClick={() => setVideoId("jaLu5BAXMlM")}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="about-right">
              <span className="section-subtitle">About Pneuma Global</span>
              <h2 className="section-title">
                Pneuma is an Apostolic and Discipleship Ministry
              </h2>
              <p style={{ marginBottom: "25px" }}>
                We work with the Kingdom come mandate and the great commission
                in Matthew 28:19. Our purpose is to raise people first by
                growing them from converts to believers, believers to followers,
                and followers to disciples.
              </p>

              <div className="pastor-profile">
                <img
                  className="pastor-img"
                  src="/assets/pastor_krimi.jpg"
                  alt="Pastor Krimi Johnson"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pastor-details">
                  <h5>Pastor Krimi Johnson</h5>
                  <span>Lead Pastor / Overseer</span>
                </div>
              </div>

              <div className="volunteer-content">
                <h4>Join Our Team</h4>
                <p>
                  Volunteering with Pneuma is in itself its own reward, as no
                  man works for God without reward. However, there are benefits
                  of volunteering—from industry standard training to recognized
                  certifications in leadership, project management, and
                  development worth over &pound;2000, perfect to get your feet
                  wet in any industry.
                </p>
                <div className="progress-container">
                  <div className="progress-label">
                    <span>Active Volunteers</span>
                    <span>82%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-gallery__area tp-gallery__plr" style={{ paddingTop: "120px", paddingBottom: "90px", backgroundColor: "var(--white)" }}>
        <div className="container-fluid">
          <div className="row gx-10 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 justify-content-center">
            
            {/* Item 1 */}
            <div className="col-xl mb-10">
              <div className="tp-gallery__thumb p-relative">
                <img src="/assets/as-1.png" alt="Pray Radically Expecting Something Supernatural" loading="lazy" decoding="async" />
                <div className="tp-gallery__thumb-overly">
                  <div className="tp-gallery__overly-text">
                    <span>PRESS</span>
                    <h4 className="tp-gallery__title-sm">Pray Radically Expecting Something Supernatural</h4>
                  </div>
                  <div className="tp-gallery__shape">
                    <img src="/assets/gal-shape-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="col-xl mb-10">
              <div className="tp-gallery__thumb p-relative">
                <img src="/assets/as-2.png" alt="Gallery image" loading="lazy" decoding="async" />
                <div className="tp-gallery__thumb-overly">
                  <div className="tp-gallery__shape">
                    <img src="/assets/gal-shape-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="col-xl mb-10">
              <div className="tp-gallery__thumb p-relative">
                <img src="/assets/as-3.png" alt="Gallery image" loading="lazy" decoding="async" />
                <div className="tp-gallery__thumb-overly">
                  <div className="tp-gallery__shape">
                    <img src="/assets/gal-shape-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="col-xl mb-10">
              <div className="tp-gallery__thumb p-relative">
                <img src="/assets/as-4.png" alt="Gallery image" loading="lazy" decoding="async" />
                <div className="tp-gallery__thumb-overly">
                  <div className="tp-gallery__shape">
                    <img src="/assets/gal-shape-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="col-xl mb-10">
              <div className="tp-gallery__thumb p-relative">
                <img src="/assets/gal-1-5.png" alt="Our Education and Scholarship Scheme" loading="lazy" decoding="async" />
                <div className="tp-gallery__thumb-overly">
                  <div className="tp-gallery__overly-text">
                    <span>"The Future" Project</span>
                    <h4 className="tp-gallery__title-sm">Our Education and Scholarship Scheme</h4>
                  </div>
                  <div className="tp-gallery__shape">
                    <img src="/assets/gal-shape-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="events-section section-padding">
        <div className="container">
          <div
            className="text-center"
            style={{ maxWidth: "600px", margin: "0 auto 50px auto" }}
          >
            <span className="section-subtitle">Our Calendar</span>
            <h2 className="section-title">Upcoming Events</h2>
            <p>
              Participate in our apostolic meetings, charity actions, and
              community health networks scheduled for the season.
            </p>
          </div>
          <div className="events-grid">
            {events.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} preview />
            ))}
          </div>
        </div>
      </section>

      <ProjectTabs />
      <CtaSection />

      {videoId && (
        <VideoModal videoId={videoId} onClose={() => setVideoId(null)} />
      )}
    </>
  );
};

export default Home;
