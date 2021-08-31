/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import MenuHome from '../components/MenuHome';
import Menu from '../components/menu/Menu';

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
  }, [])


  return (
    <div className={colorChange ? `${styles.containerScrolling}` : `${styles.containerHome}`}>
      <div className={styles.links}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/aboutus">
          <a className={styles.link}>About Us</a>
        </Link>
        <Link href="/aboutus#mission">
          <a className={styles.link}>Mission</a>
        </Link>
        <Link href="/aboutus#the-team">
          <a className={styles.link}>Team</a>
        </Link>
        <Link href="/login">
          <a className={styles.link}>Portal</a>
        </Link>
      </div>
      {/* <MenuHome /> */}
      <Menu />
    </div>
  );
}
