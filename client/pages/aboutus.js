/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import styles from '../styles/AboutUs.module.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.container}>
        <NavBar />
        <div className={styles.topContainer}>
          <h1 className={styles.title}>Unlocking Wellness</h1>
        </div>
        <div id="about-us" className={styles.midContainer}>
          <h2 className={styles.storyTitle}>Our Story</h2>
          <p className={styles.story}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel eros donec ac odio tempor orci. Purus in massa tempor nec feugiat nisl pretium fusce. Pretium lectus quam id leo in vitae turpis massa sed. Leo in vitae turpis massa. Amet facilisis magna etiam tempor orci. Sed arcu non odio euismod lacinia at quis risus. Auctor eu augue ut lectus. Est lorem ipsum dolor sit amet consectetur. Posuere urna nec tincidunt praesent semper.</p>
          {/* <br /> */}
          <p className={styles.story}>Feugiat pretium nibh ipsum consequat nisl vel. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Nisl purus in mollis nunc sed id semper risus in. Nisi scelerisque eu ultrices vitae auctor eu. Etiam tempor orci eu lobortis elementum nibh tellus. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. At ultrices mi tempus imperdiet nulla. Diam vel quam elementum pulvinar. Eros in cursus turpis massa tincidunt dui. Metus vulputate eu scelerisque felis.</p>
          <h2 id="mission" className={styles.missionTitle}>Our Mission</h2>
          <p className={styles.mission}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel eros donec ac odio tempor orci. Purus in massa tempor nec feugiat nisl pretium fusce. Pretium lectus quam id leo in vitae turpis massa sed. Leo in vitae turpis massa. Amet facilisis magna etiam tempor orci. Sed arcu non odio euismod lacinia at quis risus. Auctor eu augue ut lectus. Est lorem ipsum dolor sit amet consectetur. Posuere urna nec tincidunt praesent semper.</p>
          <h2 id="the-team" className={styles.missionTitle}>Our Team</h2>
          <div className={styles.teamContainer}>
            <div className={styles.teamItem}>
              <Avatar size="xl" name="Mx. Kay Oss" src="https://ca.slack-edge.com/T0455847Q-U01LPFZGJT0-0a8e0e904763-512" />
              <p className={styles.teamName}>Mx. Kay Oss</p>
              <p className={styles.teamTitle}>CEO</p>
            </div>
            <div className={styles.teamItem}>
              <Avatar size="xl" name="Zadok Kim" src="https://ca.slack-edge.com/T0455847Q-U024Z3K3BHQ-d6e807a6725f-512" />
              <p className={styles.teamName}>Zadok Kim</p>
              <p className={styles.teamTitle}>PM</p>
            </div>
            <div className={styles.teamItem}>
              <Avatar size="xl" name="Brian Lee" src="https://ca.slack-edge.com/T0455847Q-U024Z9S32AF-fbf79ee66503-512" />
              <p className={styles.teamName}>Brian Lee</p>
              <p className={styles.teamTitle}>AO</p>
            </div>
            <div className={styles.teamItem}>
              <Avatar size="xl" name="Sophia Nguyen" src="https://ca.slack-edge.com/T0455847Q-U024SA0H38W-3d16123f54ae-512" />
              <p className={styles.teamName}>Sophia Nguyen</p>
              <p className={styles.teamTitle}>UIO</p>
            </div>
            <div className={styles.teamItem}>
              <Avatar size="xl" name="Caleb Broderick" src="https://ca.slack-edge.com/T0455847Q-U025BMQGGKB-42a9e41029dc-512" />
              <p className={styles.teamName}>Caleb Broderick</p>
              <p className={styles.teamTitle}>VOR</p>
            </div>
            <div className={styles.teamItem}>
              <Avatar size="xl" name="Keefe Dashiell
              " src="https://ca.slack-edge.com/T0455847Q-U024SA47PP0-b19625f23012-512" />
              <p className={styles.teamName}>Keefe Dashiell</p>
              <p className={styles.teamTitle}>TTM</p>
            </div>
            <div className={styles.teamItem}>
              <Avatar size="xl" name="Ran An" src="https://ca.slack-edge.com/T0455847Q-U025NT3MN00-d16835f6fd94-512" />
              <p className={styles.teamName}>Ran An</p>
              <p className={styles.teamTitle}>YAG</p>
            </div>
            <div className={styles.teamItem}>
              <Avatar size="xl" name="Zachary Bretz" src="https://ca.slack-edge.com/T0455847Q-U025BMNAD4H-7f03f7e91b6b-512" />
              <p className={styles.teamName}>Zachary Bretz</p>
              <p className={styles.teamTitle}>LM</p>
            </div>
            <div className={styles.teamItem}>
              <Avatar size="xl" name="Ubin Jung" src="https://ca.slack-edge.com/T0455847Q-U02558CSYCC-607af5374092-512" />
              <p className={styles.teamName}>Ubin Jung</p>
              <p className={styles.teamTitle}>MMB</p>
            </div>
          </div>
          <h2 id="contact-us" className={styles.contactTitle}>Contact Us</h2>
          <p className={styles.contactInfo}>Call 678-999-8212 {' (9AM-8PM PDT, Monday through Saturday)'} and we'll be happy to help!</p>
          <br />
          <p className={styles.contactInfo}>Please feel free to email our team at teamlouisvuitton@galvanize.com with any questions or concerns. Response times may be longer depending on traffic.</p>
        </div>
        <Footer />
      </div>
    </div>
  )
}