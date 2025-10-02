import React from 'react';

function ReservationSection() {
  return (
    <section id="reservation" className="eltdf-section" style={{ backgroundColor: '#111d22' }}>
      <div className="eltdf-full-width">
        <div className="eltdf-full-width-inner">
          <div className="eltdf-row-grid-section-wrapper eltdf-content-aligment-left" style={{ backgroundColor: '#111d22' }}>
            <div className="eltdf-row-grid-section">
              <div className="vc_row wpb_row vc_row-fluid vc_custom_1577182567213 vc_row-has-fill">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                      <div className="eltdf-section-title-holder eltdf-st-decor-animation" style={{ textAlign: 'center' }}>
                        <div className="eltdf-st-inner">
                          <span className="eltdf-st-tagline">Reservations</span>
                          <div className="eltdf-st-title-holder">
                            <div className="decor"><svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146"><path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path><path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path></svg></div>
                            <h1 className="eltdf-st-title">Book a table</h1>
                            <div className="decor"><svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146"><path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"></path><path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"></path></svg></div>
                          </div>
                        </div>
                      </div>

                      <div className="vc_empty_space" style={{ height: 56 }}><span className="vc_empty_space_inner"></span></div>

                      <div className="eltdf-elements-holder eltdf-one-column eltdf-responsive-mode-768">
                        <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-5773">
                          <div className="eltdf-eh-item-inner">
                            <div className="eltdf-eh-item-content eltdf-eh-custom-5773" style={{ padding: '0 8.4%' }}>
                              <div className="eltdf-rf-holder eltdf-rf-inline">
                                <form className="eltdf-rf" onSubmit={(e) => e.preventDefault()}>
                                  <div className="eltdf-rf-row clearfix">
                                    <div className="eltdf-rf-col-holder">
                                      <div className="eltdf-rf-field-holder clearfix">
                                        <select name="partysize" className="eltdf-ot-people" defaultValue="2">
                                          {[...Array(8)].map((_, i) => (
                                            <option value={String(i+1)} key={i}>{i+1} {i===0? 'Person':'People'}</option>
                                          ))}
                                        </select>
                                      </div>
                                    </div>
                                    <div className="eltdf-rf-col-holder">
                                      <div className="eltdf-rf-field-holder eltdf-rf-date-col clearfix">
                                        <input type="date" className="eltdf-ot-date" name="date" />
                                      </div>
                                    </div>
                                    <div className="eltdf-rf-col-holder eltdf-rf-time-col">
                                      <div className="eltdf-rf-field-holder clearfix">
                                        <select name="time" className="eltdf-ot-time" defaultValue="">
                                          <option value="" disabled>— Petit-déjeuner —</option>
                                          <option value="petit-dejeuner-07:30-08:30">07:30–08:30</option>
                                          <option value="petit-dejeuner-08:30-09:30">08:30–09:30</option>
                                          <option value="petit-dejeuner-09:30-10:30">09:30–10:30</option>
                                          <option value="" disabled>— Déjeuner —</option>
                                          <option value="dejeuner-12:00-13:00">12:00–13:00</option>
                                          <option value="dejeuner-13:00-14:00">13:00–14:00</option>
                                          <option value="dejeuner-13:30-14:30">13:30–14:30</option>
                                          <option value="" disabled>— Pause gourmande pour le thé —</option>
                                          <option value="pause-the-15:30-16:30">15:30–16:30</option>
                                          <option value="pause-the-16:30-17:30">16:30–17:30</option>
                                          <option value="" disabled>— After work convivial —</option>
                                          <option value="after-work-17:30-18:30">17:30–18:30</option>
                                          <option value="after-work-18:30-19:30">18:30–19:30</option>
                                          <option value="" disabled>— Dîner raffiné —</option>
                                          <option value="diner-19:30-20:30">19:30–20:30</option>
                                          <option value="diner-20:30-21:30">20:30–21:30</option>
                                          <option value="diner-21:30-22:30">21:30–22:30</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="eltdf-rf-col-holder eltdf-rf-btn-holder">
                                      <button type="submit" className="eltdf-btn eltdf-btn-huge eltdf-btn-outline">
                                        <span className="eltdf-btn-before-line" style={{ height: 50, left: 47 }}></span>
                                        <span className="eltdf-btn-text">Book Now</span>
                                        <span className="eltdf-btn-after-line" style={{ height: 50, left: 150 }}></span>
                                      </button>
                                    </div>
                                  </div>
                                </form>
                                <p className="eltdf-rf-copyright">*No external booking — demo form</p>
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

export default ReservationSection;
