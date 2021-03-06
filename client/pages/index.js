/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Index.module.scss';
import NavbarHome from '../components/NavBarHome';
import SearchMain from '../components/SearchMain';
import lotus from '../public/lotus.svg';
import lotusWhite from '../public/lotus-white.svg';
import healthCheck from '../public/health-check.svg';
import medical from '../public/medical-report.svg';
import medicalWhite from '../public/medical-report-white.svg';
import care from '../public/care.svg';
import careWhite from '../public/care-white.svg';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import SearchContext from '../components/SearchContext.js';

export default function Home() {
  const { darkMode, toggleDarkMode } = useContext(SearchContext);
  return (
    <div className={darkMode ? styles.flexContainerDark : styles.flexContainer}>
      <Head>
        <title>Unlocking Wellness</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={darkMode ? styles.containerDark : styles.container}>
        <NavbarHome />
        <div className={styles.topContainer}>
          <h1 className={styles.title}>Unlocking Wellness</h1>
          <p className={styles.subtitle}>Holistic health for anyone anywhere, no matter what.</p>
        </div>

        <div className={styles.midContainer}>
          <h2 className={darkMode ? styles.missionDark : styles.mission}>We believe in healthcare for everyone. For us, everyone really does include every person and identity. Our clinics are inclusive, judgement-free zones.</h2>
          <div className={styles.iconList}>
            <div className={styles.iconItemOne}>
              {darkMode ? (
                <Image src={lotusWhite} alt="Holistic approach to health icon" />)
                : (
                  <Image src={lotus} alt="Holistic approach to health icon" />)
              }
              <p className={darkMode ? styles.listDescOneDark : styles.listDescOne}>Holistic Approach to Health</p>
            </div>
            <div className={styles.iconItemTwo}>
              {darkMode ? (
                <Image src={careWhite} alt="Care heart health icon" />)
                : (
                  <Image src={care} alt="Care heart health icon" />)
              }
              <p className={darkMode ? styles.listDescTwoDark : styles.listDescTwo}>All Backgrounds and Identities are Welcomed Here</p>
            </div>
            <div className={styles.iconItemThree}>
              {darkMode ? (
                <Image src={medicalWhite} alt="Health report icon" />)
                : (
                  <Image src={medical} alt="Health report icon" />)
              }
              <p className={darkMode ? styles.listDescThreeDark : styles.listDescThree}>Focus on Love and Support</p>
            </div>
          </div>
        </div>
        <div className={styles.coverSearch}>
          <SearchMain />
        </div>
        <br></br>
        <div className={styles.middleTitleContainer}>
          <h1 className={styles.middleTitle}>A Community of Holistic Health</h1>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.candleCard}>
            <Link href="/registration">
              <a className={styles.candleDesc}>Sign Up Today</a>
            </Link>
          </div>
          <div className={styles.womenCard}>
            <Link href="/aboutus#inclusive-health">
              <a className={styles.womenDesc}>What is Inclusive Health?</a>
            </Link>
          </div>
          <div className={styles.handsCard}>
            <Link href="/aboutus#the-team">
              <a className={styles.handsDesc}>Meet Our Team</a>
            </Link>
          </div>
        </div>
        <ChatBot />
        <Footer />
      </div>
    </div>
  );
}

// Home.getInitialProps = async () => {
//   const res = await fetch('/api/doctors/internal-medicine')
//   const json = await res.json()
//   return json;
// }

// index.js = /
// dashboard/index.js = /dashboard/