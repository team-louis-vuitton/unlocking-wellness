/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Index.module.scss';
import NavbarHome from '../components/NavBarHome';
import SearchMain from '../components/SearchMain';
// import ModalWindow from '../components/ModalWindow';
import holistic from '../public/holistic.png';
import mental from '../public/mental-health.png';
import heart from '../public/heart.png';
import candle from '../public/candle.png';
import women from '../public/women.png';
import hands from '../public/hands.png';

export default function Home() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.container}>
        <NavbarHome />
        <div className={styles.topContainer}>
          <h1 className={styles.title}>Unlocking Wellness</h1>
          <p className={styles.subtitle}>Holistic health for anyone anywhere, no matter what.</p>
        </div>
        <div className={styles.midContainer}>
          <h2 className={styles.mission}>We believe in healthcare for everyone. For us, everyone really does include every person and identity. Our clinics are inclusive, judgement-free zones.</h2>
          <div className={styles.iconList}>
            <div className={styles.iconItem}>
              <Image src={holistic} alt="Holistic icon" />
              <p className={styles.listDesc}>Holistic Approach to Health</p>
            </div>
            <div className={styles.iconItemMental}>
              <Image
                src={mental}
                alt="Mental health icon"
                width={100}
                height={100}
              />
              <p className={styles.listDescMental}>All Backgrounds and Identities are Welcomed Here</p>
            </div>
            <div className={styles.iconItemHeart}>
              <Image src={heart} alt="Heart icon" />
              <p className={styles.listDescHeart}>Focus on Love and Support</p>
            </div>
          </div>
          <Link href="/login">
            <a className={styles.signup}>SIGN UP TODAY</a>
          </Link>
        </div>
        <div>
          <SearchMain />
        </div>
        <br></br>
        <div>
          <h1>Sign Up Today</h1>
        </div>
        <div className={styles.navCardsContainer}>
          <div className={styles.candleCard}>
            <Link href="/registration">
              <a className={styles.candleDesc}>Sign Up Today</a>
            </Link>
          </div>
          <div className={styles.womenCard}>
            <Link href="/aboutus">
              <a className={styles.womenDesc}>What is Inclusive Health?</a>
            </Link>
          </div>
          <div className={styles.handsCard}>
            <Link href="/aboutus">
              <a className={styles.handsDesc}>Meet Our Team</a>
            </Link>
          </div>
        </div>
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