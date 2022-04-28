import React from 'react';
import styles from './About.module.css';
import trophy from './trophy.png';
import newspaper from './newspaper.png';
import accessory from './accessory.png';
// import Greencounter from '../GreenCounter/Greencounter';

const About = () => {
  return (
    <>
      <div id="about">
        <section id={styles['about']} className="ftco-section">
          <div className={styles['container']}>
            <div
              className={`${styles.row}
                    ${styles.justify_content_center}
                    ${styles.align_items_center}
                    ${styles.mb - 5}
                    ${styles.pb - 3}`}
            >
              <div
                className={`${styles.col_md_7} ${styles.heading_section} ${styles.text_center}`}
              >
                <h3
                  className={`${styles.subheading_mt - 5} ${styles.pt - 5}`}
                  style={{
                    color: '#6db549',
                    fontFamily: 'League Spartan',
                    marginTop: '75px',
                    fontWeight: '800',
                    letterSpacing: '2px',
                  }}
                >
                  &nbsp;WHAT ARE WE
                </h3>
                <h2
                  className={styles['mb-1']}
                  style={{
                    color: 'white',
                    // fontSize: '3.5em',
                    fontfamily: 'League spartan',
                    fontWeight: '900',
                    marginBottom: '1em',
                    letterSpacing: '2px',
                  }}
                >
                  ABOUT US
                </h2>
              </div>
            </div>

            <div className={styles['row']}>
              <div className={styles['col-md-12']}>
                <div className={styles['block-7']}>
                  <div className={styles['text-justify']}>
                    <p
                      style={{
                        fontFamily: 'Open Sans',
                        fontSize: '18px',
                        lineHeight: '1.8',
                        fontWeight: '400',
                        color: '#808080',
                      }}
                    >
                      Enthusia is the annual sports festival of M.B.M Engineering College and one of the most 
                      awaited sports festival of north west India. The fest is planned to host about 1000 students
                      and has a large number of exciting competitions and activities relevant to the theme. Enthusia 
                      celebrates spirit of sportsmanship and serves as a platform to showcase the countless hours of
                       perspiration put in by the teams to achieve excellence in their sport. So gear up yourself 
                       and your squads to witness the frolicsome #Enthusia2k22
                    </p>
                  </div>
                </div>
              </div>

               <div className={styles['col-md-4']}> 
                <div className={styles['block-7']}>
                  <div style={{ textAlign: 'center' }}>
                    <img
                      src={trophy}
                      alt="/"
                      style={{
                        width: '20%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                    <h3
                      className={styles['text-wrap']}
                      style={{
                        fontSize: '22px',
                        color: '#000',
                        lineHeight: '1.4',
                        fontWeight: 'bold',
                      }}
                    >
                      Hype&nbsp;Around Enthusia
                    </h3>
                    <p className={`${styles.para1}`}>
                      With Enthusia we bring peple togetherof diverse campus together
                      and create friendly competition with the team working for a common goal.
                      Here at Enthusia, you can find healthy outlets of energy. 
                      <br />
                    </p>
                  </div>
                </div>
              </div> 

              <div className={styles['col-md-4']}>
                <div className={styles['block-7']}>
                  <div style={{ textAlign: 'center' }}>
                    <img
                      src={newspaper}
                      alt="/"
                      style={{
                        width: '20%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                    <h3
                      className={styles['text-wrap']}
                      style={{
                        fontSize: '22px',
                        color: '#000',
                        lineHeight: '1.4',
                        fontWeight: 'bold',
                      }}
                    >
                      The&nbsp;Talk&nbsp;Of The&nbsp;Town
                    </h3>
                    <p className={`${styles.para2}`}>
                      Many participants at Enthusia
                      put their hard work to test in a vast array of sports. If
                      this doesn't catch your attention, the bustle of people
                       on the campus streets surely will. Its them who
                      make this festival, a celebration of four
                      long days.
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles['col-md-4']}>
                <div className={styles['block-7']}>
                  <div style={{ textAlign: 'center' }}>
                    <img
                      src={accessory}
                      alt="/"
                      style={{
                        width: '20%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                    <h3
                      className={styles['text-wrap']}
                      style={{
                        fontSize: '22px',
                        color: '#000',
                        lineHeight: '1.4',
                        fontWeight: 'bold',
                      }}
                    >
                      What&nbsp;You Take Back
                    </h3>
                    <p className={`${styles.para3}`}>
                      It's about making memories, and living them. Every time
                      you win a race or lose your voice cheering for your team,
                      adds up to your moments and get an experience worth cherishing and some beautiful
                      memories to treasure forever!
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <Greencounter /> */}
    </>
  );
};

export default About;
