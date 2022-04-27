import React from 'react';
import styles from './Events.module.css';
import rules from './rules.jpg';
import trophy from './trophy.jpg';
import contacts from './contacts.jpg';
import { FaTimes } from 'react-icons/fa';
import BasketballPDF from './pdf/Basketballpayment.pdf'
import FutsallPDF from './pdf/futsalpayment.pdf'
import chessPdf from './pdf/chess payment.pdf'
import CricketPDF from './pdf/cricket payment.pdf'
import VolleyballPDF from './pdf/volleyball payment.pdf';
import TTPDF from './pdf/TTpayment.pdf'
import khokhoPDF from './pdf/khokhopayment.pdf'

const Basketball = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={BasketballPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Futsal = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Payment & Contact Detail </h4>
                    <a
                      href={FutsallPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const Chess = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Payment & Contact Detail </h4>
                    <a
                      href={chessPdf}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cricket = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          
          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Payment & Contact Detail </h4>
                    <a
                      href={CricketPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Khokho = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Payment & Contact Detail </h4>
                    <a
                      href={khokhoPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TableTennis = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
         

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Payment & Contact Detail </h4>
                    <a
                      href={TableTennis}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Volleyball = (props) => {
  return (
    <div className="row" style={{ marginLeft: '5px', marginRight: '5px' }}>
      <div
        className={`${styles.col_10} ${styles.text_center} ${styles.Main_block}`}
      >
        <button
          className={`${styles.fa} ${styles.fa_times}`}
          id="0x"
          onClick={() => props.changeState(false)}
        >
          <FaTimes />
        </button>
        <div
          className="row"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.contact_box}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={contacts}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Payment & Contact Detail </h4>
                    <a
                      href={VolleyballPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {
  Basketball,
  Chess,
  Cricket,
  Khokho,
  TableTennis,
  Volleyball,
  Futsal
};
