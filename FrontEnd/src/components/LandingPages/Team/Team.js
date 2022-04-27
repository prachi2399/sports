import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Member from './Member/Member';
import styles from './Team.module.css';
import team from './team.json';

function Team() {
  return (
    <section id="team" className={styles['ftco-section']}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col className="text-center col-md-7">
            <h3 className={styles.heading}>Backbone of the event</h3>
            <h2 className={styles.subheading}>Our Team</h2>
          </Col>
        </Row>

        <Row className="justify-content-center px-1">
          {team.conveners.map((member, ind) => {
            return (
              <Member
                post={member.post}
                name={member.name}
                phone={member.phone}
                id={member.id}
                mail={member.mail}
                image={member.image}
                linkedin={member.linkedin}
                key={member.name}
              ></Member>
            );
          })}
        </Row>

        <p className={`text-center ${styles['team-heading']}`}>
          GAMES AND SPORTS COUNCIL
        </p>
        <Row className="justify-content-center px-1">
          {team['games and sports council'].map((member, ind) => {
            return (
              <Member
                post={member.post}
                name={member.name}
                phone={member.phone}
                id={member.id}
                mail={member.mail}
                image={member.image}
                linkedin={member.linkedin}
                key={member.name}
              ></Member>
            );
          })}
        </Row>

        {/* <p className={`text-center ${styles['team-heading']}`}>
          PUBLICITY TEAM
        </p>
        <Row className="justify-content-center px-1">
          {team['publicity team'].map((member, ind) => {
            return (
              <Member
                post={member.post}
                name={member.name}
                phone={member.phone}
                id={member.id}
                mail={member.mail}
                key={ind}
              ></Member>
            );
          })}
        </Row>

        <p className={`text-center ${styles['team-heading']}`}>
          PUBLICITY TEAM
        </p>
        <Row className="justify-content-center px-1">
          {team['publicity team'].map((member, ind) => {
            return (
              <Member
                post={member.post}
                name={member.name}
                phone={member.phone}
                id={member.id}
                mail={member.mail}
                key={ind}
              ></Member>
            );
          })}
        </Row>

        <p className={`text-center ${styles['team-heading']}`}>
          PUBLIC RELATIONS TEAM
        </p>
        <Row className="justify-content-center px-1">
          {team['public relations team'].map((member, ind) => {
            return (
              <Member
                post={member.post}
                name={member.name}
                phone={member.phone}
                id={member.id}
                mail={member.mail}
                key={ind}
              ></Member>
            );
          })}
        </Row>

        <p className={`text-center ${styles['team-heading']}`}>
          MARKETING TEAM
        </p>
        <Row className="justify-content-center px-1">
          {team['marketing team'].map((member, ind) => {
            return (
              <Member
                post={member.post}
                name={member.name}
                phone={member.phone}
                id={member.id}
                mail={member.mail}
                key={ind}
              ></Member>
            );
          })}
        </Row>

        <p className={`text-center ${styles['team-heading']}`}>
          HOSPITALITY TEAM
        </p>
        <Row className="justify-content-center px-1">
          {team['hospitality team'].map((member, ind) => {
            return (
              <Member
                post={member.post}
                name={member.name}
                phone={member.phone}
                id={member.id}
                mail={member.mail}
                key={ind}
              ></Member>
            );
          })}
        </Row>

        <p className={`text-center ${styles['team-heading']}`}>
          EVENTS & OPERATIONS TEAM
        </p>
        <Row className="justify-content-center px-1">
          {team['events and operations team'].map((member, ind) => {
            return (
              <Member
                post={member.post}
                name={member.name}
                phone={member.phone}
                id={member.id}
                mail={member.mail}
                key={ind}
              ></Member>
            );
          })}
        </Row>

        <p className={`text-center ${styles['team-heading']}`}>
          CONTENT WRITING TEAM
        </p>
        <Row className="justify-content-center px-1">
          {team['content writing team'].map((member, ind) => {
            return (
              <Member
                post={member.post}
                name={member.name}
                phone={member.phone}
                id={member.id}
                mail={member.mail}
                key={ind}
              ></Member>
            );
          })}
        </Row>

        <p className={`text-center ${styles['team-heading']}`}>
          TECHNICAL TEAM
        </p>
        <Row className="justify-content-center px-1">
          {team['technical team'].map((member, ind) => {
            return (
              <Member
                post={member.post}
                name={member.name}
                phone={member.phone}
                id={member.id}
                mail={member.mail}
                key={ind}
              ></Member>
            );
          })}
        </Row>

        <p className={`text-center ${styles['team-heading']}`}>
          CREATIVE DESIGN TEAM
        </p>
        <Row className="justify-content-center px-1">
          {team['creative design team'].map((member, ind) => {
            return (
              <Member
                post={member.post}
                name={member.name}
                phone={member.phone}
                id={member.id}
                mail={member.mail}
                key={ind}
              ></Member>
            );
          })}
        </Row>

        <p className={`text-center ${styles['team-heading']}`}>
          INFORMALS TEAM
        </p>
        <Row className="justify-content-center px-1">
          {team['informals team'].map((member, ind) => {
            return (
              <Member
                post={member.post}
                name={member.name}
                phone={member.phone}
                id={member.id}
                mail={member.mail}
                key={ind}
              ></Member>
            );
          })}
        </Row> */}
      </Container>
    </section>
  );
}

export default Team;
