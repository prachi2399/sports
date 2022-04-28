import React, { useState } from 'react';
import basketball from './basketball.png';
import chess from './chess.png';
import cricket from './cricket.png';
import question from './question.png';
import khokho from './kho-kho.png';

import tabletennis from './table-tennis.png';

import volleyball from './volleyball.png';
import futsal from "./futsal.png"
import styles from './Events.module.css';
import { Link } from 'react-router-dom';
import {
  Basketball,
  Chess,
  Cricket,
  Khokho,
  TableTennis,
  Volleyball,
  Futsal

} from './Events_Components.js';
import { Card, Button } from 'reactstrap';

const Events = () => {
 
  const [showResults2, setShowResults2] = useState(false);
  const [showResults4, setShowResults4] = useState(false);
  const [showResults5, setShowResults5] = useState(false);

  const [showResults11, setShowResults11] = useState(false);
  const [showResults13, setShowResults13] = useState(false);
  const [showResults16, setShowResults16] = useState(false);
  const [showResults17, setShowResults17] = useState(false);


  const onClick2 = () => {

    setShowResults2(!showResults2);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults11(false);
    setShowResults13(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  
  const onClick4 = () => {
    setShowResults2(false);
    setShowResults4(!showResults4);
    setShowResults5(false);
    setShowResults11(false);
    setShowResults13(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  const onClick5 = () => {
    setShowResults2(false);
    setShowResults4(false);
    setShowResults5(!showResults5);
    setShowResults11(false);
    setShowResults13(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  
  const onClick11 = () => {
    setShowResults2(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults11(!showResults11);
    setShowResults13(false);
    setShowResults16(false);
    setShowResults17(false);
  };
  
  const onClick13 = () => {
    setShowResults2(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults11(false);
    setShowResults13(!showResults13);
    setShowResults16(false);
    setShowResults17(false);
  };

  
  const onClick16 = () => {
    setShowResults2(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults11(false);
    setShowResults13(false);
    setShowResults16(!showResults16);
    setShowResults17(false);
  };


  const onClick17 = () => {
    setShowResults2(false);
    setShowResults4(false);
    setShowResults5(false);
    setShowResults11(false);
    setShowResults13(false);
    setShowResults16(false);
    setShowResults17(!showResults17);
  };
  

  return (
    <section id="events" className={`${styles.ftco_section} ${styles.events}`}>
      <div className={`${styles.container} ${styles.pb_1}`}>
        <div
          className={`${styles.row} ${styles.justify_content_center} ${styles.mb_5}`}
        >
          <div
            className={`${styles.col_md_7} ${styles.heading_section} ${styles.text_center}`}
          >
            <h3
              className={`${styles.subheading}`}
              style={{ color: '#6db549', fontWeight: 'bold' }}
            >
              Find Your Interest
            </h3>
            <h2 className={`${styles.mb_1} ${styles.H2}`}>
              Sports &amp; Games
            </h2>
          </div>
        </div>
        

        <div className={`${styles.row}`}>
          

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="2"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={basketball}
              alt=""
              onClick={onClick2}
            />
          </div>
          
        

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="0"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={chess}
              alt=""
              onClick={onClick4}
            />
          </div>

          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="1"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={cricket}
              alt=""
              onClick={onClick5}
            />
          </div>
          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="1"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={futsal}
              alt=""
              onClick={onClick17}
            />
          </div>

          {showResults2 ? (
            <Basketball changeState={(showResult2) => setShowResults2(false)} />
          ) : null}
         
          {showResults4 ? (
            <Chess changeState={(showResult4) => setShowResults4(false)} />
          ) : null}
          {showResults5 ? (
            <Cricket changeState={(showResult5) => setShowResults5(false)} />
          ) : null}
          {showResults17 ? (
            <Futsal changeState={(showResult17) => setShowResults17(false)} />
          ) : null}
        </div>

        <div className={`${styles.row} ${styles.col2}`}>     
          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="1"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={khokho}
              alt=""
              onClick={onClick11}
            />
          </div>
          
          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="1"
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={tabletennis}
              alt=""
              onClick={onClick13}
            />
          </div>
          <div
            className={`${styles.col_2} ${styles.padding} ${styles.shake}`}
            id="1"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            <img
              className={`${styles.img_responsive} ${styles.hvr_buzz_out} ${styles.grayscale}`}
              src={volleyball}
              alt=""
              onClick={onClick16}
            />
          </div>  
          
          {showResults11 ? (
            <Khokho changeState={(showResult11) => setShowResults11(false)} />
          ) : null}
          {showResults13 ? (
            <TableTennis
              changeState={(showResult13) => setShowResults13(false)}
            />
          ) : null}
          {showResults16 ? (
            <Volleyball
              changeState={(showResult0) => setShowResults16(false)}
            />
          ) : null}
          
         
        </div>


      </div>

      <div className={`${styles.container}`}>
        <div className={`${styles.row} ${styles.mt_5} ${styles.pt_5}`}>
          <div className={`${styles.col_md_3}`}></div>
          <div className={`${styles.col_md_6}`}>
            <div className={`${styles.block_7}`}>
              <div className={`${styles.text_justify}`}>
                
                <h4
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Open Sans',
                    fontWeight: '700',
                  }}
                >
                   <img src={question} alt="" style={{ width: '3rem' }} />
                  Register Now !! What are you thinking??
                </h4>
                <div
                  className={`${styles.text_center}`}
                  style={{ marginTop: '2em' }}
                >
                  <Link
                    to="/register/signup/"
                    className={`${styles.btn_xlg} ${styles.btn} ${styles.btn_success}`}
                    style={{
                      color: 'white',
                      fontFamily: 'Open Sans',
                      fontWeight: '500',
                    }}
                  >
                    Click here to Register for Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
