import React from 'react';

function ParallaxBanner() {
  return (
    <section
      className="vc_row wpb_row vc_row-fluid eltdf-parallax-row-holder eltdf-content-aligment-center"
      style={{
        backgroundImage: 'url(/assets/images/image4.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '360px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <a className="eltdf-video-button-play" href="#" onClick={(e) => e.preventDefault()} aria-label="Play video">
        <span className="eltdf-video-button-play-inner">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="97.094px" height="97.094px" viewBox="0 0 97.094 97.094">
              <circle fill="none" stroke="currentColor" strokeMiterlimit="10" cx="48.558" cy="48.548" r="48"></circle>
              <circle fill="none" className="eltdf-popout" stroke="none" strokeMiterlimit="10" cx="48.558" cy="48.548" r="41.037"></circle>
              <polygon fill="none" stroke="currentColor" strokeMiterlimit="10" points="42.578,69.964 42.578,27.13 63.994,48.546 "></polygon>
            </svg>
          </span>
        </span>
      </a>
    </section>
  );
}

export default ParallaxBanner;
