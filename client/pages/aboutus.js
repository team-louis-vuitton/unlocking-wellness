/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import styles from '../styles/AboutUs.module.css';
import NavBar from '../components/NavBar';
import NavbarHome from '../components/NavBarHome';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

export default function AboutUs() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.container}>
        {/* <NavbarHome /> */}
        <NavBar />
        <div className={styles.topContainer}>
          <h1 className={styles.title}>Unlocking Wellness</h1>
        </div>
        <div id="about-us" className={styles.midContainer}>
          <h2 id="inclusive-health" className={styles.storyTitle}>Our Story</h2>
          <p className={styles.story}>Combining smart technology with modern, welcoming clinics, Unlocking Wellness delivers a uniquely seamless experience — with virtual and in-person appointments, primary care, urgent care, and mental healthcare — to meet you where you are. We aim to make the exceptional expected.</p>
          <p className={styles.story}>We’re removing traditional boundaries in healthcare, to make high-quality, transparent, and inclusive care and wellness accessible — because great care should always be within reach, no matter who or where you are.</p>
          <br></br>
          <h2 id="mission" className={styles.inclusiveTitle}>What is Inclusive Health?</h2>
          <p className={styles.inclusive}>At Unlocking Wellness, our vision is for the inclusion of all people. If a system is inclusive, that means they have made the necessary changes to their practice to make their program more accessible for those less represented and marginalized. Inclusive health is based on two main principles: equitable access and full participation. Equitable Access means ensuring that people have access to the services and resources necessary to achieve their full health potential. Full Participation means that patients, regardless of background, are fully and meaningfully included in health programs and services.</p>
          <p className={styles.inclusive}>Making healthcare inclusive comes down to one simple concept – respect. Treat each and every patient that walks into your practice with the same respect. Take advantage of the opportunity to learn about a culture or life experience different from your own.</p>
          <br></br>
          <h2 id="the-team" className={styles.missionTitle}>Our Mission</h2>
          <p className={styles.mission}>At Unlocking Wellness, we believe in the power of health, of medicine, and of technology. We aim to create a supportive environment where you can develop your career and continually refine your craft, whether you work in one of our clinics or with the team at Unlocking Wellness headquarters.</p>
          <p className={styles.mission}>We hire people who genuinely care. In doing so, we’ve built a diverse and passionate team of employees who are all driven to learn from one another and support Unlocking Wellness's mission of bringing high-quality healthcare to everyone.</p>
          <br></br>
          <h2 id="contact-us" className={styles.teamHeaderTitle}>Our Team</h2>
          <div className={styles.teamContainer}>
            <Carousel
              autoPlay={false}
            >
              {/* <ArrowBackIosIcon onClick={() => console.log('LEFT YALL')} /> */}
              <div className={styles.carouselBody}>
                <div className={styles.teamItem}>
                  <button type="button" className={styles.zabrian}></button>
                  <p className={styles.teamName}>Mx.Kay Oss</p>
                  <p className={styles.teamTitle}>Founder, CEO</p>
                </div>
                <div className={styles.teamItem}>
                  <button type="button" className={styles.jonathan}></button>
                  <p className={styles.teamName}>Jonathan Lewis</p>
                  <p className={styles.teamTitle}>Product Director</p>
                </div>
                <div className={styles.teamItem}>
                  <button type="button" className={styles.zadok}></button>
                  <p className={styles.teamName}>Zadok Kim</p>
                  <p className={styles.teamTitle}>Product Manager</p>
                </div>
                <div className={styles.teamItem}>
                  <button type="button" className={styles.brian}></button>
                  <p className={styles.teamName}>Brian Lee</p>
                  <p className={styles.teamTitle}>Architecture Owner</p>
                </div>
              </div>
              <div className={styles.carouselBody}>
                <div className={styles.teamItem}>
                  <button type="button" className={styles.soph}></button>
                  <p className={styles.teamName}>Sophia Nguyen</p>
                  <p className={styles.teamTitle}>UI Owner</p>
                </div>
                <div className={styles.teamItem}>
                  <button type="button" className={styles.caleb}></button>
                  <p className={styles.teamName}>Caleb Broderick</p>
                  <p className={styles.teamTitle}>Voice of Reason</p>
                </div>
                <div className={styles.teamItem}>
                  <button type="button" className={styles.keefe}></button>
                  <p className={styles.teamName}>Keefe Dashiell</p>
                  <p className={styles.teamTitle}>Database Master</p>
                </div>
                <div className={styles.teamItem}>
                  <button type="button" className={styles.ran}></button>
                  <p className={styles.teamName}>Ran An</p>
                  <p className={styles.teamTitle}>API Guru</p>
                </div>
              </div>
              <div className={styles.carouselBody}>
                <div className={styles.teamItem}>
                  <button type="button" className={styles.zach}></button>
                  <p className={styles.teamName}>Zachary Bretz</p>
                  <p className={styles.teamTitle}>Logo/Animation Creator</p>
                </div>
                <div className={styles.teamItem}>
                  <button type="button" className={styles.ubin}></button>
                  <p className={styles.teamName}>Ubin Jung</p>
                  <p className={styles.teamTitle}>Lead of Mental Breaks</p>
                </div>
                <div className={styles.teamItem}>
                  <button type="button" className={styles.dom}></button>
                  <p className={styles.teamName}>Dom Stepek</p>
                  <p className={styles.teamTitle}>Helper Function</p>
                </div>
              </div>
              {/* <ArrowForwardIosIcon onClick={() => console.log('RIGHT YALL')} /> */}
            </Carousel>
          </div>
          <br></br>
          <h2 id="legal" className={styles.contactTitle}>Contact Us</h2>
          <p className={styles.contactInfo}>Call 678-999-8212 {' (9AM-8PM PDT, Monday through Saturday)'} and we'll be happy to help!</p>
          <p className={styles.contactInfo}>Email support@unlockingwellness.com about any questions or concerns! Response times could be longer depending on traffic but we will get back to you as soon as possible!</p>
          <br></br>
          <h2 id="legals" className={styles.legalTitle}>Privacy Policy</h2>
          <p className={styles.legalInfo}>Unlocking Wellness Technologies, Inc. {' ("Unlocking Wellness" “we,” “our,” or “us”)'} is committed to protecting your privacy.</p>
          <p className={styles.legalInfo}>You and your data are not our product. Our business is your health, not your data. We do not sell your data.</p>
          <p className={styles.legalInfo}>At Unlocking Wellness, we are committed to protecting it through our compliance with our privacy policy and also through our compliance with our Notice of Privacy Practices {' (“HIPAA Privacy Practices”, “Notice of HIPAA Privacy Practices”)'}.</p>
        </div>
        <ChatBot />
        <Footer />
      </div>
    </div>
  )
}