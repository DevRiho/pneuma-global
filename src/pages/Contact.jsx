import { useState } from 'react';
import InnerHeader from '../components/InnerHeader';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you shortly.');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <InnerHeader title="Contact Us" breadcrumb="Contact" />

      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-panel">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div className="contact-info-text">
                  <h4>Our Location</h4>
                  <p>Topley House, 52 Washlane Bury Greater Manchester</p>
                  <a href="https://share.google/8p6fPKh4koI7upbVe" target="_blank" rel="noreferrer" style={{ fontWeight: 700, color: 'var(--primary-color)', display: 'inline-block', marginTop: '5px' }}>View on Google Maps</a>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div className="contact-info-text">
                  <h4>Email Support</h4>
                  <p>For inquiries, volunteering questions, and partnerships:</p>
                  <a href="mailto:info@pneumaglobal.org" style={{ fontWeight: 700 }}>info@pneumaglobal.org</a>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a1.003 1.003 0 0 0-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4.03c-.55 0-1 .45-1 1C3.03 14.03 11 22 20.97 22c.55 0 1-.45 1-1v-4.62c0-.55-.45-1-1-1z"/></svg>
                </div>
                <div className="contact-info-text">
                  <h4>Call Us Anytime</h4>
                  <p>Direct telephone line for ministry support:</p>
                  <a href="tel:+447423200260" style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-color)' }}>+44 7423 200260</a>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              <span className="section-subtitle">Get in Touch</span>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '25px' }}>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group-row">
                  <input className="form-field" type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                  <input className="form-field" type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group-row">
                  <input className="form-field" type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
                  <input className="form-field" type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
                </div>
                <textarea className="form-field" name="message" placeholder="Enter your message here..." value={form.message} onChange={handleChange} required />
                <button className="btn btn-primary" type="submit" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </div>

          <div className="contact-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.6533034937213!2d-2.2858850233405786!3d53.590740972361664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb0ac352c3c9b%3A0xc07c2a7f5a2a2202!2s52%20Wash%20Ln%2C%20Bury%20BL9%206AS%2C%20UK!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pneuma Global Location"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
