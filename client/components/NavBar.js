/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import Menu from '../components/Menu';
import ThemeSwitcher from './chakra/ThemeSwitcher';

export default function Navbar() {
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 240) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };
    window.addEventListener('scroll', changeNavbarColor);
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link href="/">
          <a className={styles.linkScrolling}>Home</a>
        </Link>
        <Link href="/aboutus">
          <a className={styles.linkScrolling}>About Us</a>
        </Link>
        <Link href="/aboutus#mission">
          <a className={styles.linkScrolling}>Mission</a>
        </Link>
        <Link href="/aboutus#the-team">
          <a className={styles.linkScrolling}>Team</a>
        </Link>
        <Link href="/login">
          <a className={styles.linkScrolling}>Portal</a>
        </Link>
      </div>
      <ThemeSwitcher />
      {/* <Menu /> */}
    </div>
  );
}
