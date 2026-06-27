import { Link } from 'react-router-dom';

const CtaSection = ({ showButton = false }) => (
  /* Donation CTA Section */
  <section className="tp-cta-2__area">
    <div 
      className="tp-cta-2__bg p-relative fix" 
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/cta-bg-1.png)` }}
    >
      <div className="tp-cta-2__shape-1 d-none d-xl-block">
        <img src={`${import.meta.env.BASE_URL}assets/cta-shape-1.png`} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="tp-cta-2__shape-2 d-none d-xl-block">
        <img src={`${import.meta.env.BASE_URL}assets/cta-shape-2.png`} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-cta-2__content text-center">
              <span className="tp-cta-2__subtitle">LET'S START SOMETHING FOR THEM</span>
              <h2 className="tp-cta-2__title">
                No One Has Ever Become <br />Poor From Giving so Give Towards <br /> the Pneuma mandate
              </h2>
              {showButton && (
                <Link to="/donation" className="tp-btn theme-2-bg">
                  Start Donating Now
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CtaSection;
