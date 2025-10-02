import React, { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import BackToTop from './components/BackToTop.jsx'
import AboutSection from './sections/AboutSection.jsx'
import MenuSection from './sections/MenuSection.jsx'
import ParallaxBanner from './components/ParallaxBanner.jsx'
import MenuGallery from './sections/MenuGallery.jsx'
import PhilosophySection from './sections/PhilosophySection.jsx'
import Testimonials from './components/Testimonials.jsx'
import ReservationSection from './sections/ReservationSection.jsx'
import ContactSection from './sections/ContactSection.jsx'

function App() {
  useEffect(() => {
    // Apply a subset of original body classes for layout/spacing parity
    document.body.classList.add(
      'home',
      'page',
      'theme-laurent',
      'laurent-ver-3.4.1',
      'eltdf-grid-1300',
      'eltdf-content-is-behind-header',
      'eltdf-default-mobile-header',
      'vc_responsive'
    );
    return () => {
      document.body.classList.remove(
        'home',
        'page',
        'theme-laurent',
        'laurent-ver-3.4.1',
        'eltdf-grid-1300',
        'eltdf-content-is-behind-header',
        'eltdf-default-mobile-header',
        'vc_responsive'
      );
    };
  }, []);

  return (
    <div id="top" className="qode-export-1.0">
      <div className="eltdf-wrapper">
        <div className="eltdf-cover"></div>
        <div className="eltdf-wrapper-inner">
          <div className="eltdf-double-grid-line-one"></div>
          <div className="eltdf-double-grid-line-two"></div>

          <Header />

          <Hero />

          {/* Main content sections (placeholders to attach theme styles) */}
          <main className="eltdf-content">
            <div className="eltdf-content-inner">
              <AboutSection />
              <PhilosophySection />
              <MenuSection />
              <ParallaxBanner />
              <MenuGallery />
              <Testimonials />
              <ReservationSection />
              <ContactSection />
            </div>
          </main>
          <BackToTop />
        </div>
      </div>
    </div>
  )
}

export default App
