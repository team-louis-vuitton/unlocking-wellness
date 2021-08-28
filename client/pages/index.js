/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Index.module.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <Navbar />
          <h1 className={styles.title}>Unlocking Wellness</h1>
          <p className={styles.subtitle}>Holistic health for anyone anywhere, no matter what.</p>
          {/* <button className={}></button> */}
        </div>
        <div className={styles.midContainer}>
          <h2 className={styles.mission}>We believe in healthcare for everyone. For us, everyone really does include every person and identity. Our clinics are inclusive, judgement-free zones.</h2>
        </div>
        {/* <Link href="/dashboard">
          <a>click here dummy</a>
        </Link> */}
        {/* Navbar - About Us, Mission, Team, Portal */}
        {/* Search Component */}
      </div>
    </div>
  )
}

// Home.getInitialProps = async () => {
//   const res = await fetch('/api/doctors/internal-medicine')
//   const json = await res.json()
//   return json;
// }

// index.js = /
// dashboard/index.js = /dashboard/