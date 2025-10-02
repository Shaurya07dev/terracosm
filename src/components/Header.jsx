import React, { useEffect, useState } from 'react';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(v => !v);
  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    const body = document.body;
    if (mobileOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
    return () => {
      body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleAnchor = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      // Try to compensate for header height a bit after smooth scroll
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 250);
    }
    closeMobile();
  };

  return (
    <>
      {/* Desktop/Header */}
      <header className="eltdf-page-header">
        <div className="eltdf-header-double-grid-line-one"></div>
        <div className="eltdf-header-double-grid-line-two"></div>

        <div className="eltdf-menu-area eltdf-menu-center">
          <div className="eltdf-vertical-align-containers">
            <div className="eltdf-position-left">
              <div className="eltdf-position-left-inner">
                <div className="eltdf-logo-wrapper eltdf-svg-logo">
                  <a itemProp="url" href="/" onClick={closeMobile}>
                    <span className="eltdf-logo-svg-path">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="34.875px"
                        height="46.938px"
                        viewBox="0 0 34.875 46.938"
                        enableBackground="new 0 0 34.875 46.938"
                        xmlSpace="preserve"
                      >
                        <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="0.5,0.003 0.5,36.438 22.875,36.438 "></polyline>
                        <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="6.5,5.003 6.5,41.438 28.875,41.438 "></polyline>
                        <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="12.5,10.003 12.5,46.438 34.875,46.438 "></polyline>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="eltdf-position-center">
              <div className="eltdf-position-center-inner">
                <nav className="eltdf-main-menu eltdf-drop-down eltdf-default-nav">
                  <ul id="menu-main-menu" className="clearfix">
                    <li id="nav-menu-item-13" className="menu-item menu-item-type-custom menu-item-object-custom eltdf-active-item has_sub narrow">
                      <a href="#top" className="current" onClick={(e) => handleAnchor(e, 'top')}>
                        <span className="item_outer"><span className="item_text">Home</span></span>
                      </a>
                    </li>
                    <li id="nav-menu-item-15" className="menu-item menu-item-type-custom menu-item-object-custom has_sub narrow">
                      <a href="#about" onClick={(e) => handleAnchor(e, 'about')}>
                        <span className="item_outer"><span className="item_text">About</span></span>
                      </a>
                    </li>
                    <li id="nav-menu-item-16" className="menu-item menu-item-type-custom menu-item-object-custom has_sub narrow">
                      <a href="#menu" onClick={(e) => handleAnchor(e, 'menu')}>
                        <span className="item_outer"><span className="item_text">Menu</span></span>
                      </a>
                    </li>
                    <li id="nav-menu-item-17" className="menu-item menu-item-type-custom menu-item-object-custom has_sub narrow">
                      <a href="#reservation" onClick={(e) => handleAnchor(e, 'reservation')}>
                        <span className="item_outer"><span className="item_text">Reservation</span></span>
                      </a>
                    </li>
                    <li id="nav-menu-item-18" className="menu-item menu-item-type-custom menu-item-object-custom has_sub narrow">
                      <a href="#contact" onClick={(e) => handleAnchor(e, 'contact')}>
                        <span className="item_outer"><span className="item_text">Contact</span></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="eltdf-position-right">
              <div className="eltdf-position-right-inner">
                <a
                  className="eltdf-side-menu-button-opener eltdf-icon-has-hover eltdf-side-menu-button-opener-predefined"
                  href="#mobile-menu"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMobile();
                  }}
                >
                  <span className="eltdf-side-menu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 25.2" className="eltdf-menu-opener">
                      <line y1="7.6" x2="24" y2="7.6"></line>
                      <line x1="4.1" y1="0.5" x2="28.1" y2="0.5"></line>
                      <line x1="10.1" y1="24.6" x2="34.1" y2="24.6"></line>
                      <line x1="13" y1="17.6" x2="37" y2="17.6"></line>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="eltdf-mobile-header" style={{ marginBottom: 0 }}>
        <div className="eltdf-mobile-header-inner">
          <div className="eltdf-mobile-header-holder">
            <div className="eltdf-grid">
              <div className="eltdf-vertical-align-containers">
                <div className="eltdf-position-left">
                  <div className="eltdf-position-left-inner">
                    <div className="eltdf-mobile-logo-wrapper">
                      <a itemProp="url" href="/" onClick={closeMobile}>
                        <span className="eltdf-logo-svg-path">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 34.875 46.938" width="34.875px" height="46.938px" className="eltdf-menu-opener">
                            <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="0.5,0.003 0.5,36.438 22.875,36.438 "></polyline>
                            <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="6.5,5.003 6.5,41.438 28.875,41.438 "></polyline>
                            <polyline fill="none" stroke="#C9AB81" strokeMiterlimit="10" points="12.5,10.003 12.5,46.438 34.875,46.438 "></polyline>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="eltdf-position-right">
                  <div className="eltdf-position-right-inner">
                    <div className="eltdf-mobile-menu-opener eltdf-mobile-menu-opener-predefined">
                      <a href="#mobile-menu" onClick={(e) => { e.preventDefault(); toggleMobile(); }}>
                        <span className="eltdf-mobile-menu-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 25.2" className="eltdf-menu-opener">
                            <line y1="7.6" x2="24" y2="7.6"></line>
                            <line x1="4.1" y1="0.5" x2="28.1" y2="0.5"></line>
                            <line x1="10.1" y1="24.6" x2="34.1" y2="24.6"></line>
                            <line x1="13" y1="17.6" x2="37" y2="17.6"></line>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="eltdf-mobile-nav" role="navigation" aria-label="Mobile Menu" style={{ display: mobileOpen ? 'block' : 'none' }}>
          <div className="eltdf-grid">
            <ul id="menu-main-menu-1">
              <li className="menu-item"><a href="#top" onClick={(e) => handleAnchor(e, 'top')}><span>Home</span></a></li>
              <li className="menu-item"><a href="#about" onClick={(e) => handleAnchor(e, 'about')}><span>About</span></a></li>
              <li className="menu-item"><a href="#menu" onClick={(e) => handleAnchor(e, 'menu')}><span>Menu</span></a></li>
              <li className="menu-item"><a href="#reservation" onClick={(e) => handleAnchor(e, 'reservation')}><span>Reservation</span></a></li>
              <li className="menu-item"><a href="#contact" onClick={(e) => handleAnchor(e, 'contact')}><span>Contact</span></a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
