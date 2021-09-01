import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.company}>2021 - Unlocking Wellness</p>
      <div className={styles.footerLinks}>
        <Link href="/">
          <a className={styles.link}>HOME</a>
        </Link>
        <Link href="/aboutus">
          <a className={styles.link}>ABOUT</a>
        </Link>
        <Link href="/aboutus#contact-us">
          <a className={styles.link}>HELP</a>
        </Link>
        <Link href="/aboutus">
          <a className={styles.link}>LEGAL</a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;