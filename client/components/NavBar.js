/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link href="/aboutus">
          <a>About Us</a>
        </Link>
        <Link href="/aboutus">
          <a>Mission</a>
        </Link>
        <Link href="/aboutus">
          <a>Team</a>
        </Link>
        <Link href="/aboutus">
          <a>Portal</a>
        </Link>
      </div>
    </div>
  );
}
