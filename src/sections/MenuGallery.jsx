import React from 'react';

function MenuGallery() {
  const items = [
    { img: '/legacy/laurent/main-images-1.jpg', title: 'Starters', href: '#starters' },
    { img: '/legacy/laurent/main-images-2.jpg', title: 'Main Courses', href: '#mains' },
    { img: '/legacy/laurent/main-images-3.jpg', title: 'Desserts', href: '#desserts' },
  ];

  return (
    <section className="eltdf-section" style={{ textAlign: 'center' }}>
      <div className="eltdf-row-grid-section-wrapper eltdf-content-aligment-center">
        <div className="eltdf-row-grid-section">
          <div className="vc_row wpb_row vc_row-fluid vc_custom_1573549706260 eltdf-content-aligment-center">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="eltdf-section-title-holder eltdf-st-decor-animation" style={{ textAlign: 'center' }}>
                    <div className="eltdf-st-inner">
                      <span className="eltdf-st-tagline">Laurent’s tasty offer</span>
                      <div className="eltdf-st-title-holder">
                        <div className="decor"><svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146"><path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path><path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path></svg></div>
                        <h1 className="eltdf-st-title">Our Menu</h1>
                        <div className="decor"><svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146"><path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path><path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path></svg></div>
                      </div>
                    </div>
                  </div>

                  <div className="eltdf-portfolio-list-holder eltdf-grid-list eltdf-pl-gallery eltdf-three-columns eltdf-medium-space eltdf-disable-bottom-space eltdf-pl-standard-overlay eltdf-pl-pag-no-pagination">
                    <div className="eltdf-pl-inner eltdf-outer-space  clearfix">
                      {items.map((it, i) => (
                        <article className="eltdf-pl-item eltdf-item-space" key={i}>
                          <div className="eltdf-pl-item-inner">
                            <div className="eltdf-pli-image">
                              <img loading="lazy" width="800" height="1217" src={it.img} alt={it.title} className="attachment-full size-full wp-post-image" />
                              <div className="eltdf-pli-image-shader-overlay">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="47.994px" height="47.994px" viewBox="0 0 47.994 47.994">
                                  <line fill="none" stroke="#715B3E" strokeMiterlimit="10" x1="21.044" y1="3" x2="21.044" y2="47.994"></line>
                                  <line fill="none" stroke="#715B3E" strokeMiterlimit="10" x1="27.044" y1="0" x2="27.044" y2="44.994"></line>
                                  <line fill="none" stroke="#715B3E" strokeMiterlimit="10" x1="44.994" y1="21.484" x2="0" y2="21.484"></line>
                                  <line fill="none" stroke="#715B3E" strokeMiterlimit="10" x1="47.994" y1="26.5" x2="3" y2="26.5"></line>
                                </svg>
                              </div>
                            </div>
                            <div className="eltdf-pli-text-holder">
                              <div className="eltdf-pli-text-wrapper">
                                <div className="eltdf-pli-text">
                                  <h5 className="eltdf-pli-title entry-title">{it.title}</h5>
                                </div>
                              </div>
                            </div>
                            <a className="eltdf-pli-link eltdf-block-drag-link" href={it.href}></a>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuGallery;
