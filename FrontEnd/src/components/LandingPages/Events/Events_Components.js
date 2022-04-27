import React from 'react';
import styles from './Events.module.css';
import rules from './rules.jpg';
import trophy from './trophy.jpg';
import contacts from './contacts.jpg';
import { FaTimes } from 'react-icons/fa';



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

export {
  Basketball,
  Chess,
  Cricket,
  Khokho,
  TableTennis,
  Volleyball,
  Futsal
};
