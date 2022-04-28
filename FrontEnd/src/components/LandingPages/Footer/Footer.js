import React from 'react';
import styles from './Footer.module.css';
import {
  FaMapMarker,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <section id="contactus">
      <footer
        className={`${styles.ftco_footer} ${styles.ftco_section} ${styles.img}`}
      >
        <div className={`${styles.container}`}>
          <li className={`${styles.row}`}>
            <div
              className={`${styles.col_lg_6} ${styles.col_md_6} ${styles.mb_5} ${styles.mb_md_5}`}
            >
              <div className={`${styles.ftco_footer_widget} ${styles.mb_4}`}>
                <h2 className={`${styles.ftco_heading} ${styles.h2}`}>
                  ADDRESS
                </h2>
                <div className={`${styles.block_23} ${styles.mb_3}`}>
                  {/* <div> */}
                  <span>
                    <FaMapMarker className={`${styles.icons}`}></FaMapMarker>
                    <div
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      M.B.M Engineering College, Ratanada
                    </div>
                  </span>
                  <span
                    className={`${styles.text}`}
                    style={{ wordSpacing: '0.4em' }}
                  >
                    &emsp; Jodhpur - 342011
                  </span>
                  {/* </div> */}

                  <br />

                  <div>
                    <span>
                      <FaPhoneAlt className={`${styles.icons}`}></FaPhoneAlt>
                      <span
                        className={`${styles.text}`}
                        style={{ wordSpacing: '0.4em' }}
                      >
                        Registrations&nbsp;&amp;&nbsp;Enquiry:
                      </span>
                    </span>

                    <br />

                    {/* <div> */}
                    <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      <a
                        className={`${styles.text}`}
                        style={{
                          wordSpacing: '0.4em',
                          textDecoration: 'none',
                        }}
                        href="tel:+919548980225"
                      >
                        Ankit Karwasra : &emsp;+91&#8209;6378059553
                      </a>
                    </span>

                    <div>{'\n'}</div>

                    <span
                      className={`${styles.text}`}
                      style={{ wordSpacing: '0.4em' }}
                    >
                      <a
                        className={`${styles.text}`}
                        style={{
                          wordSpacing: '0.4em',
                          textDecoration: 'none',
                        }}
                        href="tel:+919829634035"
                      >
                        Amit Godara :&emsp;+91&#8209;7732957151
                      </a>
                    </span>

                    <div>{'\n'}</div>
                    <div />

                    
                    {/* </div> */}
                  </div>

                  <br />

                  
                </div>

                <h2 className={`${styles.ftco_heading} ${styles.h2}`}>
                  FOLLOW US AT : 
                </h2>
                <div
                  className={`${styles.ftco_footer_social} ${
                    styles.list_unstyled
                  } ${styles.float_md_left} ${styles.float_lft} ${
                    styles.mt - 2
                  }`}
                >
                  <span>
                    <a
                      href="https://instagram.com/enthusia2k22?igshid=YmMyMTA2M2Y="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className={`${styles.icons_lower}`} />
                    </a>
                  </span>
                  
                </div>
              </div>
            </div>
            <div
              className={`${styles.col_lg_6} ${styles.col_md_6} ${styles.mb_5} ${styles.mb_md_5}`}
            >
              <div className={`${styles.ftco_footer_widget} ${styles.mb_4}`}>
                <h2 className={`${styles.ftco_heading} ${styles.h2}`}>MAP</h2>
                <div className={`${styles.block_23} ${styles.mb_3}`}>
                  <iframe
                    title="google_map"
                    className={`${styles.gmap}`}
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=M.B.M%20Engineering%20College+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </li>
        </div>
        <div className={`${styles.createdHeading}`}>
        <h6 className={`${styles.pheading} `}>
                  Created with passion by :<a href="https://www.linkedin.com/in/prachi-soni-52680a1b4/">Prachi Soni</a>  and <a href="https://www.linkedin.com/in/radhika-manihar-77133119a/">Radhika Manihar</a>
        </h6>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
