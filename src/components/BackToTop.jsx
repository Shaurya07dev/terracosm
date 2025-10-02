import React, { useEffect, useState } from 'react';

function BackToTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setActive(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      id="eltdf-back-to-top"
      href="#top"
      className={active ? '' : 'off'}
      onClick={scrollTop}
      aria-label="Back to top"
      style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 999 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="43.047px" height="43.031px" viewBox="0 0 43.047 43.031">
        <circle fill="none" stroke="#BC9A6B" strokeMiterlimit="10" cx="21.523" cy="21.531" r="20.986"></circle>
        <circle fill="none" stroke="#BC9A6B" className="eltdf-popout" strokeMiterlimit="10" cx="21.523" cy="21.531" r="16.049"></circle>
        <polyline fill="none" stroke="#BC9A6B" strokeMiterlimit="10" points="15.205,23.875 21.523,18.573 27.842,23.875 "></polyline>
      </svg>
    </a>
  );
}

export default BackToTop;
