/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className={colorChange ? `${styles.container}` : `${styles.containerScrolling}`}>
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
