import React from 'react';

function MenuSection() {
  return (
    <section id="menu" className="eltdf-section" style={{ backgroundColor: '#0f1d22' }}>
      <div className="eltdf-full-width">
        <div className="eltdf-full-width-inner">
          {/* Title block */}
          <div className="eltdf-row-grid-section-wrapper" style={{ backgroundColor: '#0f1d22' }}>
            <div className="eltdf-row-grid-section">
              <div className="vc_row wpb_row vc_row-fluid vc_custom_1577721733574">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="eltdf-section-title-holder eltdf-st-decor-animation" style={{ padding: '0 3%', textAlign: 'center' }}>
                        <div className="eltdf-st-inner">
                          <span className="eltdf-st-tagline">Special selection</span>
                          <div className="eltdf-st-title-holder">
                            <div className="decor">
                              <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146"><path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path><path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path></svg>
                            </div>
                            <h1 className="eltdf-st-title">From our menu</h1>
                            <div className="decor">
                              <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146"><path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path><path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two-column pricing list */}
          <div className="eltdf-row-grid-section-wrapper" style={{ backgroundColor: '#0f1d22' }}>
            <div className="eltdf-row-grid-section">
              <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="eltdf-elements-holder eltdf-two-columns eltdf-responsive-mode-1024 fifty-fifty">
                        {/* Column A */}
                        <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-6707">
                          <div className="eltdf-eh-item-inner">
                            <div className="eltdf-eh-item-content eltdf-eh-custom-6707" style={{ padding: '0 42px 0 0' }}>
                              <div className="eltdf-pricing-holder">
                                {[
                                  { t: 'Beef burger meal', p: '$32', d: 'Classic greek salad, barrel aged feta cheese, bread' },
                                  { t: 'Roasted lamb rump', p: '$25', d: 'Grilled lamb cutlets, pomegranate glaze, butternut squash' },
                                  { t: 'Pan seared sea bass', p: '$38', d: 'Saffron and mussel’s broth, new potatoes, edamame beans' },
                                  { t: 'King prawns and lobster', p: '$38', d: 'Creamy saffron, sauce Vierge' },
                                  { t: 'Citrus cured salmon', p: '$41', d: 'Horseradish creme fraiche, beetroot mousse, oil' },
                                ].map((it, i) => (
                                  <div className="eltdf-pricing-item" key={`a-${i}`}>
                                    <div className="eltdf-pricing-main">
                                      <h6 className="eltdf-pricing-title">{it.t}</h6>
                                      <div className="eltdf-pricing-lines"></div>
                                      <span className="eltdf-pricing-price">{it.p}</span>
                                    </div>
                                    <p className="eltdf-pricing-desc">{it.d}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Column B */}
                        <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-2676">
                          <div className="eltdf-eh-item-inner">
                            <div className="eltdf-eh-item-content eltdf-eh-custom-2676" style={{ padding: '0 0 0 42px' }}>
                              <div className="eltdf-pricing-holder">
                                {[
                                  { t: 'Pan seared scallops', p: '$29', d: 'Saffron, celeriac puree, black pudding, olive oil' },
                                  { t: 'Baked Camembert', p: '$25', d: 'Red onion marmelade, garlic Foccacia bread, grilled figs' },
                                  { t: 'Braised ox cheek ravioli', p: '$23', d: 'Mediterranean olives casserole, celeriac puree, mushrooms' },
                                  { t: 'Corn fed chicken', p: '$17', d: 'Wild mushrooms, truffle potatoes, braised leeks, carrots' },
                                  { t: 'Nduja pork chicken terrine', p: '$41', d: 'Smoked duck breast, pistachio, smoked pancetta' },
                                ].map((it, i) => (
                                  <div className="eltdf-pricing-item" key={`b-${i}`}>
                                    <div className="eltdf-pricing-main">
                                      <h6 className="eltdf-pricing-title">{it.t}</h6>
                                      <div className="eltdf-pricing-lines"></div>
                                      <span className="eltdf-pricing-price">{it.p}</span>
                                    </div>
                                    <p className="eltdf-pricing-desc">{it.d}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default MenuSection;
