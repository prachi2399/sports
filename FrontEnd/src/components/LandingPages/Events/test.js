import React from 'react';
import styles from './Events.module.css';
import rules from './rules.jpg';
import trophy from './trophy.jpg';
import contacts from './contacts.jpg';
import { FaTimes } from 'react-icons/fa';
import AthleticsPDF from './AthleticsPDF.pdf';
import BadmintonPDF from './BadmintonPDF.pdf';
import BasketballPDF from './BasketballPDF.pdf';
import BoxingPDF from './BoxingPDF.pdf';
import CricketPDF from './CricketPDF.pdf';
import ChessPDF from './ChessPDF.pdf';
import CyclingPDF from './CyclingPDF.pdf';
import FootballPDF from './FootballPDF.pdf';
import HandballPDF from './HandBallPDF.pdf';
import HockeyPDF from './HockeyPDF.pdf';
import KabbadiPDF from './KabbadiPDF.pdf';
import KhoKhoPDF from './KhoKhoPDF.pdf';
import SquashPDF from './SquashPDF.pdf';
import TableTennisPDF from './TableTennisPDF.pdf';
import TennisPDF from './TennisPDF.pdf';
import VolleyballPDF from './VolleyBallPDF.pdf';
import WeightliftingPDF from './WeightliftingPDF.pdf';
import TaekwondoPDF from './TaekwondoPDF.pdf';

const Athletics = (props) => {
  return (
    <div>
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
            style={{ marginLeft: '15px', marginRight: '15px' }}
          >
            <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
              <div className={`${styles.event_block}`}>
                <div className={`${styles.rule_box}`}>
                  <div className={`${styles.a_rule}`}>
                    <div className={`${styles.image}`}>
                      <img
                        className={`${styles.img_responsive}`}
                        src={rules}
                        alt="img"
                      />
                    </div>
                    <div className={`${styles.info} ${styles.rule}`}>
                      <h4> Rules </h4>
                      <a
                        href={AthleticsPDF}
                        target="_blank"
                        rel="noreferrer"
                        className={`${styles.rulebook}`}
                      >
                        CLICK HERE FOR RULES
                      </a>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
              <div className={`${styles.event_block}`}>
                <div className={`${styles.winner_box} ${styles.info}`}>
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={trophy}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info}`}>
                    <h4>Athletics</h4>
                    <p>
                      Coming Soon
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
                    <h4>Contacts</h4>
                    <p
                      className={`${styles.paragraph}`}
                      style={{ paddingBottom: '10px' }}
                    >
                      <b>CAPTAIN</b>
                      <br />
                      Rohit Diwakar
                      <br />
                      8827687934
                      <br />
                      rohit.diwakar.ece19@itbhu.ac.in
                      <br />
                      <br />
                      Anshika Singh <b>(W)</b>
                      <br />
                      7985967630
                      <br />
                      anshika.singh.phy19@itbhu.ac.in
                      <br />
                      <br />
                      <b>VICE-CAPTAIN</b>
                      <br />
                      Gurjot
                      <br />
                      7528980380
                      <br />
                      gurjot.student.ece19@itbhu.ac.in
                      <br />
                      <br />
                      Shivanjali Verma <b>(W)</b>
                      <br />
                      8869038250
                      <br />
                      shivanjali.verma.mec19@itbhu.ac.in
                      <br />
                    </p>
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

const Badminton = (props) => {
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={BadmintonPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Badminton</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '20px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Sayan Ghosh <br />
                    7602961003
                    <br />
                    sayan.ghosh.cd.mat19@itbhu.ac.in
                    <br />
                    <br />
                    Anshul Sahai <b>(W)</b>
                    <br />
                    91668498500
                    <br />
                    anshul.sahai.che19@itbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Kushagra Yadav
                    <br />
                    8285600365
                    <br />
                    kushagra.yadav.ece19@itbhu.ac.in
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={BasketballPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Basketball</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '20px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Aryan Shukla <br />
                    8171354203
                    <br />
                    aryanshukla.mat18@itbhu.ac.in
                    <br />
                    <br />
                    Arya Kumari <b>(W)</b>
                    <br />
                    8409372829
                    <br />
                    aryakumari.mst18@itbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Kinshuk Dwivedi
                    <br />
                    9425183369
                    <br />
                    kinshuk.dwivedi.phy19@itbhu.ac.in
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Boxing = (props) => {
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={BoxingPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Boxing</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Ankur Minj <br />
                    9171946273
                    <br />
                    ankur.minj.min19@itbhu.ac.in
                    <br />
                    <br />
                    Smriti Sharma <b>(W)</b>
                    <br />
                    8303077445
                    <br />
                    smriti.sharma.ece19@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                  </p>
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={ChessPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Chess</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Mack Mohan Verma <br />
                    9548338599
                    <br />
                    mack.mohanverma.mec19@itbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Shaurya Panpalia <br />
                    7877860896
                    <br />
                    shaurya.panpalia.mst19@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={CricketPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Cricket</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '15px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Shashank S Prakash <br />
                    8368920987
                    <br />
                    shashanksp.met18@iitbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Satyendra Kumar Satyarthi <br />
                    9877437762
                    <br />
                    satyendraks.rs.cer17@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cycling = (props) => {
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={CyclingPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Cycling</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Football = (props) => {
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={FootballPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Football</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '15px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Ritwik Singh <br />
                    9549847995
                    <br />
                    ritviksingh.phy18@itbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Sachin Kumar <br />
                    6205237836
                    <br />
                    sachin.kumar.met19@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Handball = (props) => {
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={HandballPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Handball</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph} ${styles.paragraph1}`}
                    style={{ paddingBottom: '15px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Sharath Ram <br />
                    8072714518
                    <br />
                    sharath.ramsb.mst19@itbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Tarun Khandelwal <br />
                    8102029500
                    <br />
                    tarun.khandelwal.eee19@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hockey = (props) => {
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={HockeyPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Hockey</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '20px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Raghubir <br />
                    6265573271
                    <br />
                    raghubir.student.phe19@itbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Ashish Kumar <br />
                    9370766492
                    <br />
                    ashish.kumar.min19@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Kabbadi = (props) => {
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={KabbadiPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Kabaddi</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Sateesh Kumar <br />
                    7354388062
                    <br />
                    sateesh.kumar.bme19@itbhu.ac.in
                    <br />
                    <br />
                    Keloth Tejaswini <b>(W)</b>
                    <br />
                    9177574613
                    <br />
                    keloth.tejaswini.min20@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={KhoKhoPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Kho Kho</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '10px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Rahul Lakra
                    <br />
                    8877441658
                    <br />
                    rahul.lakra.min19@itbhu.ac.in
                    <br />
                    <br />
                    Tejswinee Karwar <b>(W)</b>
                    <br />
                    7770880674
                    <br />
                    tejswinee.karwar.met19@itbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Munavath Prashanth
                    <br />
                    6301984558
                    <br />
                    munavath.prashanth.min19@itbhu.ac.in
                    <br />
                    <br />
                    Jayshree Das <b>(W)</b>
                    <br />
                    6000805732
                    <br />
                    jayshree.das.min19@itbhu.ac.in
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Squash = (props) => {
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={SquashPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Squash</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph} ${styles.paragraph1}`}
                    style={{ paddingBottom: '15px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    B Rohith Netha <br />
                    8331891203
                    <br />
                    brohith.netha.mec19@itbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Harsh B Parmar <br />
                    9381444955
                    <br />
                    harshbparmar.cse18@iitbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={TableTennisPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Table Tennis</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Sachin Arya <br />
                    7073524926
                    <br />
                    sachinarya.mec18@iitbhu.ac.in
                    <br />
                    <br />
                    Kajal Pathriyal <b>(W)</b>
                    <br />
                    8127141299
                    <br />
                    kajal.pathriyal.eee19@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Taekwondo = (props) => {
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={TaekwondoPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Taekwondo</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Suraj Gupta <br />
                    7737877228
                    <br />
                    suraj.gupta.che19@itbhu.ac.in
                    <br />
                    <br />
                    Anjali. C <b>(W)</b>
                    <br />
                    9207970160
                    <br />
                    anjalic.civ18@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tennis = (props) => {
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={TennisPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Tennis</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '12px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Baidhar Soren <br />
                    6372843510
                    <br />
                    baidhar.srn@gmail.com
                    <br />
                    <br />
                    Charmitha <b>(W)</b>
                    <br />
                    9666165321
                    <br />
                    charmithakrishna2002@gmail.com
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={VolleyballPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Volleyball</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph}`}
                    style={{ paddingBottom: '10px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Shivkaran Singh Ranawat <br />
                    8824018065
                    <br />
                    shivkarans.ranawat.phe19@itbhu.ac.in <br />
                    <br />
                    Yashika lamba <b>(W)</b>
                    <br />
                    8076365550
                    <br />
                    yashika.lamba.phe19@itbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Mukul jaiman <br />
                    8302122511
                    <br />
                    mukul.jaiman.civ19@itbhu.ac.in
                    <br />
                    <br />
                    Priya Rathore <b>(W)</b>
                    <br />
                    8225934951
                    <br />
                    priya.rathore.cer19@itbhu.ac.in
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WeightLifting = (props) => {
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
              <div className={`${styles.rule_box}`}>
                <div className={`${styles.a_rule}`}>
                  {/* Ye Upar Waali div actually <a> hai, so iska dhyan rakhna, styling hai iski kuch!!! */}
                  <div className={`${styles.image}`}>
                    <img
                      className={`${styles.img_responsive}`}
                      src={rules}
                      alt="img"
                    />
                  </div>
                  <div className={`${styles.info} ${styles.rule}`}>
                    <h4> Rules </h4>
                    <a
                      href={WeightliftingPDF}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.rulebook}`}
                    >
                      CLICK HERE FOR RULES
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.col_md_4} ${styles.col_sm_4}`}>
            <div className={`${styles.event_block}`}>
              <div className={`${styles.winner_box} ${styles.info}`}>
                <div className={`${styles.image}`}>
                  <img
                    className={`${styles.img_responsive}`}
                    src={trophy}
                    alt="img"
                  />
                </div>
                <div className={`${styles.info}`}>
                  <h4>Weight Lifting</h4>
                  <p>
                    Coming Soon
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                  <h4>Contacts</h4>
                  <p
                    className={`${styles.paragraph} ${styles.paragraph1}`}
                    style={{ paddingBottom: '15px' }}
                  >
                    <b>CAPTAIN</b>
                    <br />
                    Pulkit Khandelwal <br />
                    6350078788
                    <br />
                    pkhandelwal.civ18@itbhu.ac.in
                    <br />
                    <br />
                    <b>VICE-CAPTAIN</b>
                    <br />
                    Uday Kiran <br />
                    78976 10891
                    <br />
                    moningi.udaykiran.mst19@itbhu.ac.in
                    <br />
                    <br />
                    <br />
                    {/* <br /> */}
                  </p>
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
  Athletics,
  Badminton,
  Basketball,
  Boxing,
  Chess,
  Cricket,
  Cycling,
  Football,
  Handball,
  Hockey,
  Kabbadi,
  Khokho,
  Squash,
  TableTennis,
  Taekwondo,
  Tennis,
  Volleyball,
  WeightLifting,
};