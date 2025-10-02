import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Simple hero slider using local images. Adjust images as needed to match original look
const slides = [
  '/assets/images/image2.jpeg',
  '/assets/images/image8.jpeg',
  '/assets/images/image9.jpeg',
];

function Hero() {
  return (
    <section className="eltdf-section eltdf-main-home" style={{ position: 'relative' }}>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={900}
        navigation
        pagination={{ clickable: true }}
        style={{ width: '100%', height: '84vh', minHeight: '520px', background: '#0f1d22' }}
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="eltdf-hero-media"
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={src}
                alt="Hero slide"
                style={{
                  width: 'min(960px, 90vw)',
                  height: '100%',
                  display: 'block',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
        {/* Overlay content */}
        <div
          className="eltdf-hero-overlay"
          style={{
            position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px'
          }}
        >
          <div className="eltdf-hero-tag" style={{ color: '#c9ab81', fontFamily: 'Georgia, \"Times New Roman\", serif', fontSize: 22, letterSpacing: 2, marginBottom: 10 }}>
            welcome to our delicious corner
          </div>
          <div className="eltdf-hero-title" style={{ color: '#c9ab81', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 300, fontSize: 96, lineHeight: 1, letterSpacing: 18, textTransform: 'uppercase', margin: '6px 0 14px' }}>
            Terrascon
          </div>
          <p className="eltdf-hero-text" style={{ color: '#fff', fontFamily: 'Josefin Sans, sans-serif', fontWeight: 300, fontSize: 20, maxWidth: 820 }}>
            Cuisine française réinventée avec raffinement. Tradition et créativité au coeur de Paris 14.
          </p>
          <div style={{ marginTop: 24 }}>
            <a itemProp="url" href="#reservation" className="eltdf-btn eltdf-btn-large eltdf-btn-outline">
              <span className="eltdf-btn-before-line" style={{ height: 52, left: 49 }} />
              <span className="eltdf-btn-text">Réserver</span>
              <span className="eltdf-btn-after-line" style={{ height: 52, left: 149 }} />
            </a>
          </div>
        </div>
        {/* Theme Swiper controls */}
        <style>{`
          .eltdf-main-home .swiper-button-next:after,
          .eltdf-main-home .swiper-button-prev:after {
            color: #c9ab81;
            font-size: 24px;
          }
          .eltdf-main-home .swiper-button-next,
          .eltdf-main-home .swiper-button-prev { color: #c9ab81; }
          .eltdf-main-home .swiper-pagination-bullet { background: #715B3E; opacity: 1; }
          .eltdf-main-home .swiper-pagination-bullet-active { background: #c9ab81; }
        `}</style>
      </Swiper>
    </section>
  );
}

export default Hero;
