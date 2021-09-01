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
          <p className={styles.story}>Combining smart technology with modern, welcoming clinics, Unlocking Wellness delivers a uniquely seamless experience — with virtual and in-person appointments, primary care, urgent care, and mental healthcare — to meet you where you are. We aim to make the exceptional expected.</p>
          <p className={styles.story}>We’re removing traditional boundaries in healthcare, to make high-quality, transparent, and inclusive care and wellness accessible — because great care should always be within reach, no matter who or where you are.</p>
          <br></br>
          <h2 id="mission" className={styles.missionTitle}>Our Mission</h2>
          <p className={styles.mission}>At Unlocking Wellness, we believe in the power of health, of medicine, and of technology. We aim to create a supportive environment where you can develop your career and continually refine your craft, whether you work in one of our clinics or with the team at Unlocking Wellness headquarters.</p>
          <p className={styles.mission}>We hire people who genuinely care. In doing so, we’ve built a diverse and passionate team of employees who are all driven to learn from one another and support Unlocking Wellness's mission of bringing high-quality healthcare to everyone.</p>
          <br></br>
          <h2 id="the-team" className={styles.teamHeaderTitle}>Our Team</h2>
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
          <br></br>
          <h2 id="contact-us" className={styles.contactTitle}>Contact Us</h2>
          <p className={styles.contactInfo}>Call 678-999-8212 {' (9AM-8PM PDT, Monday through Saturday)'} and we'll be happy to help!</p>
          <p className={styles.contactInfo}>Email support@unlockingwellness.com about any questions or concerns! Response times could be longer depending on traffic but we will get back to you as soon as possible!</p>
          <br></br>
          <h2 id="legal" className={styles.legalTitle}>Privacy Policy</h2>
          <p className={styles.legalInfo}>Unlocking Wellness Technologies, Inc. {' ("Unlocking Wellness" “we,” “our,” or “us”)'} is committed to protecting your privacy.</p>
          <p className={styles.legalInfo}>You and your data are not our product. Our business is your health, not your data. We do not sell your data.</p>
          <p className={styles.legalInfo}>At Unlocking Wellness, we are committed to protecting it through our compliance with our privacy policy and also through our compliance with our Notice of Privacy Practices {' (“HIPAA Privacy Practices”, “Notice of HIPAA Privacy Practices”)'}.</p>
        </div>
        <Footer />
      </div>
    </div>
  )
}