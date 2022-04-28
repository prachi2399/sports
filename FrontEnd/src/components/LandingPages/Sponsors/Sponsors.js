import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
  return (
    <>
      <section id="sponsors" className="ftco-section_sponsors">
        <div className="container_sponsors box-container_sponsors">
          <div className="row_sponsors justify-content-center pt-5">
            <div className="col-md-7 heading-section_sponsors text-center ftco-animate_sponsors">
              <h3 className="subheading" style={{ color: '#6db549' }}>
                The People Who Have Our Back
              </h3>
              <h2 className="mb-1">Our Past Sponsors</h2>
            </div>
          </div>
          {/* <hr style="margin-left: 30px; margin-right: 30px;"/> */}
          <div className="row_sponsors align-items-baseline justify-content-center pb-5 div-sponsor">
            <div className="col-lg-3 col-md-3 col-4 pt-5">
                <img
                  src="/images/redbull.jpeg"
                  className="img-fluid_sponsors img-sponsor"
                  alt="image_alt"
                />
            </div>
            <div className="col-lg-3 col-md-3 col-4 pt-5">
              <img
                    src="/images/bajaj.png"
                    className="img-fluid_sponsors img-sponsor"
                    alt="image_alt"
                  />
            </div>
            <div className="col-lg-3 col-md-3 col-4 pt-5">
            <img
                  src="/images/zebronicx-logo.webp"
                  className="img-fluid_sponsors img-sponsor"
                  alt="image_alt"
                />
            </div>
            <div className="col-lg-3 col-md-3 col-4 pt-5">
            <img
                  src="/images/wipro-logo.jpeg"
                  className="img-fluid_sponsors img-sponsor"
                  alt="image_alt"
                />
            </div>
            <div className="col-lg-3 col-md-3 col-4 pt-5">
            <img
                  src="/images/bewakoof.jpeg"
                  className="img-fluid_sponsors img-sponsor"
                  alt="image_alt"
                />
            </div>
            <div className="col-lg-3 col-md-3 col-4 pt-5">
            <img
                  src="/images/honda.png"
                  className="img-fluid_sponsors img-sponsor"
                  alt="image_alt"
                />
            </div>
            <div className="col-lg-3 col-md-3 col-4 pt-5">
            <img
                  src="/images/patanjali.png"
                  className="img-fluid_sponsors img-sponsor"
                  alt="image_alt"
                />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
