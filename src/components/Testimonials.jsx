import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TESTIMONIALS = [
  {
    text:
      'Ut enim ad minim venia orem ipsum dolor sit amet, consectetur adipisic sed do. Eiusmod tempor incididunt ut labore et dolore magna.',
    author: 'Jan Winsent',
    job: 'Cook',
  },
  {
    text:
      'Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia orem ipsum dolor sit amet, consectetur.',
    author: 'Andrea Chung',
    job: 'Cook',
  },
  {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisic sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.',
    author: 'Robert Chang',
    job: 'Sommelier',
  },
];

function Testimonials() {
  return (
    <section className="eltdf-section" style={{ backgroundColor: '#0f1d22' }}>
      <div className="eltdf-row-grid-section-wrapper">
        <div className="eltdf-row-grid-section">
          <div className="vc_row wpb_row vc_row-fluid">
            <div className="wpb_column vc_column_container vc_col-sm-12">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <div className="eltdf-elements-holder eltdf-two-columns eltdf-responsive-mode-768 fifty-fifty">
                    <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-testimonials-a">
                      <div className="eltdf-eh-item-inner">
                        <div className="eltdf-eh-item-content eltdf-eh-custom-testimonials-a" style={{ padding: '23% 0 23% 4%' }}>
                          <div className="eltdf-testimonials-holder clearfix eltdf-testimonials-standard" style={{ color: '#c9ab81' }}>
                            <Swiper
                              modules={[Autoplay, Pagination]}
                              autoplay={{ delay: 4000, disableOnInteraction: false }}
                              loop
                              pagination={{ clickable: true }}
                            >
                              {TESTIMONIALS.map((t, i) => (
                                <SwiperSlide key={i}>
                                  <div className="eltdf-testimonial-content">
                                    <div className="eltdf-testimonial-text-holder">
                                      <p className="eltdf-testimonial-text" style={{ color: '#fff' }}>{t.text}</p>
                                      <h5 className="eltdf-testimonial-author" style={{ color: '#c9ab81' }}>
                                        <span className="eltdf-testimonials-author-name">{t.author}</span>
                                      </h5>
                                      <p className="eltdf-testimonials-author-job" style={{ color: '#c9ab81' }}>{t.job}</p>
                                    </div>
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right side empty to maintain original spacing (pattern could be added) */}
                    <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-testimonials-b">
                      <div className="eltdf-eh-item-inner">
                        <div className="eltdf-eh-item-content eltdf-eh-custom-testimonials-b" style={{ padding: '23% 0' }}>
                          {/* Decorative / reserved space */}
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

export default Testimonials;
