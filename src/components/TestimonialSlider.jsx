import { useState } from 'react';

const testimonials = [
  {
    quote: 'We can help with both your work and personal life tasks, letting you focus on what\u2019s most important. The leadership and discipleship training has shifted my mindset from the mundane to spiritual and leadership excellence.',
    name: 'Paul Pitterson',
    role: 'Active Member / Ministry Leader',
  },
  {
    quote: "Pneuma Global's initiatives like the Balm healthcare and wellness drives have transformed our community. The support is structured, transparent, and built on the love of God.",
    name: 'Lucas Oligan',
    role: 'Volunteer Partner',
  },
  {
    quote: 'Volunteering with Pneuma is in itself its own reward. The leadership training courses are worth well over \u00a32000, and they helped me get my footing in project management.',
    name: 'Gimmy Alia',
    role: 'Volunteering Student',
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto 50px auto' }}>
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">What Our People Say</h2>
        </div>

        <div className="testimonial-slider-container">
          <div
            className="testimonial-slides"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-slide">
                <p className="testimonial-quote">&quot;{t.quote}&quot;</p>
                <div className="testimonial-author">
                  <div className="testimonial-author-name">{t.name}</div>
                  <div className="testimonial-author-role">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                className={`testimonial-dot${i === current ? ' active' : ''}`}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
