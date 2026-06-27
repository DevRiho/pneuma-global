import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    bg: '/assets/wide-1-1.png',
    subtitle: 'Encounter God, Experience His Presence',
    title: 'Welcome <br> To Church <br>',
  },
  {
    bg: '/assets/wide-2-1.png',
    subtitle: 'Worship with us',
    title: 'Worship <br> in Spirit <br> and in Truth',
  },
  {
    bg: '/assets/wide-3.png',
    subtitle: 'A home where The Spirit gives Life',
    title: 'Encounter God <br> in Woship <br>',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000);
  };

  const resetAuto = () => {
    clearInterval(intervalRef.current);
    startAuto();
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  const prev = () => { setCurrent(p => (p - 1 + slides.length) % slides.length); resetAuto(); };
  const next = () => { setCurrent(p => (p + 1) % slides.length); resetAuto(); };

  return (
    <section className="tp-slider-area">
      <div className="hero-slider">
        {slides.map((slide, i) => (
          <div key={i} className={`hero-slide${i === current ? ' active' : ''}`}>
            <div
              className="tp-slider__bg d-flex align-items-center p-relative"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              {/* Slider Shapes */}
              <div className="tp-slider__shape z-index">
                <img src="/assets/slider-shape-1.png" alt="" />
              </div>
              <div
                className="tp-slider__shape-2"
                style={{ backgroundImage: 'url(/assets/slider-shape-2.png)', width: '100%', height: '100%', backgroundRepeat: 'no-repeat' }}
              ></div>
              <div className="tp-slider__shape-3">
                <img src="/assets/slider-shape-3.png" alt="" />
              </div>
              <div className="tp-slider__shape-4">
                <img src="/assets/slider-shape-4.png" alt="" />
              </div>

              {/* Slider Content */}
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tp-slider__content-wrap z-index">
                      <div className="tp-slider__content">
                        <span className="tp-slider-subtitle">{slide.subtitle}</span>
                        <h1 className="tp-slider-title pb-30" dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Nav Arrows */}
      <div className="tp-slider__arrow-box">
        <div className="slider-prev">
          <button aria-label="Previous Slide" onClick={prev}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
        </div>
        <div className="slider-next">
          <button aria-label="Next Slide" onClick={next}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
