/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import MenuHome from '../components/MenuHome';

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
    <div className={colorChange ? `${styles.containerScrolling}` : `${styles.containerHome}`}>
      <div className={styles.links}>
      <Link href="/index">
          <a>Home</a>
        </Link>
        <Link href="/aboutus">
          <a>About Us</a>
        </Link>
        <Link href="/aboutus">
          <a>Mission</a>
        </Link>
        <Link href="/aboutus">
          <a>Team</a>
        </Link>
        <Link href="/login">
          <a>Portal</a>
        </Link>
      </div>
      <MenuHome />
    </div>
  );
}
