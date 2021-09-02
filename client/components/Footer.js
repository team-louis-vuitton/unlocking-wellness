import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import logo from '../public/logo.png';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.group}>
          <div className={styles.logo}>
            <Image src={logo} alt="Unlocking Wellness logo" />
          </div>
          <p className={styles.company}>Unlocking Wellness</p>
        </div>
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
          <Link href="/aboutus#legal">
            <a className={styles.link}>LEGAL</a>
          </Link>
        </div>
      </div>
      <div className={styles.middle}>
        <p className={styles.copyright}>Copyright 2021 Team Louis Vuiton - All rights reserved.</p>
      </div>
      <div className={styles.bottom}>
        <p className={styles.fluff}>All trademarks, service marks, trade names, product names, logos and trade dress appearing on our website are the property of their respective owners. Adobe, Creative Cloud and Photoshop are either registered trademarks or trademarks of Adobe in the United States and/or other countries. a4391f37bcf9559ea5f1741ac3cee53c31ab75cc</p>
      </div>
    </div>
  );
}

export default Footer;