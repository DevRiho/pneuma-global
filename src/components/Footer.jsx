import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Subscribed successfully!');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid footer-grid-centered">
          <div className="footer-col footer-col-brand">
            <img src="/assets/logo-white-c-4.png" alt="Pneuma Global Logo" className="footer-logo" loading="lazy" decoding="async" />
            <p>We work with the Kingdom come mandate to raise believers, followers, and dedicated disciples of Christ across the globe.</p>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </span>
                <span>Topley House, 52 Washlane Bury Greater Manchester</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </span>
                <a href="mailto:info@pneumaglobal.org">info@pneumaglobal.org</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a1.003 1.003 0 0 0-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4.03c-.55 0-1 .45-1 1C3.03 14.03 11 22 20.97 22c.55 0 1-.45 1-1v-4.62c0-.55-.45-1-1-1z"/></svg>
                </span>
                <a href="tel:+447423200260">+44 7423 200260</a>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h3>Navigation</h3>
            <div className="footer-links-list">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/events">Events</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          <div className="footer-col">
            <h3>Our Newsletter</h3>
            <p>Subscribe to our newsletter and get updates in your inbox for future plans and ministry events.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                className="newsletter-input"
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="tp-copyright__bg">
        <div className="container">
          <div className="footer-bottom footer-bottom-centered">
            <p>&copy; 2026 Pneuma Global. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
