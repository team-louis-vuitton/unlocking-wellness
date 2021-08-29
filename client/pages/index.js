/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Index.module.css';

// import ModalWindow from '../components/ModalWindow';
import Navbar from '../components/NavBar';
import Menu from '../components/Menu';
import meditation from '../public/meditation.png';
import mental from '../public/mental-health.png';
import heart from '../public/heart.png';

export default function Home() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <Navbar />
          <h1 className={styles.title}>Unlocking Wellness</h1>
          <p className={styles.subtitle}>Holistic health for anyone anywhere, no matter what.</p>
          <Menu />
        </div>
        <div className={styles.midContainer}>
          <h2 className={styles.mission}>We believe in healthcare for everyone. For us, everyone really does include every person and identity. Our clinics are inclusive, judgement-free zones.</h2>
          <div className={styles.iconList}>
            <div className={styles.iconItem}>
              <Image className={styles.iconOne} src={meditation} alt="Meditation icon" />
              <p className={styles.listDesc}>Holistic Approach to Health</p>
            </div>
            <div className={styles.iconItem}>
              <Image className={styles.iconTwo} src={mental} alt="Mental health icon" />
              <p className={styles.listDesc}>All backgrounds and identities are welcomed here</p>
            </div>
            <div className={styles.iconItem}>
              <Image className={styles.iconThree} src={heart} alt="Heart icon" />
              <p className={styles.listDesc}>Focus on love and support</p>
            </div>
          </div>
        </div>
        {/* <Link href="/dashboard">
          <a>click here dummy</a>
        </Link> */}
        {/* Navbar - About Us, Mission, Team, Portal */}
        {/* Search Component */}
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