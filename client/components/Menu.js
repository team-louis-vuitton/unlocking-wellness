/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from '../styles/Menu.module.css';

export default function Menu() {
  const [navbarOpen, setNavbarOpen] = useState(false);
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

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <button className={styles.icon} onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} size='2x' />
        </button>
        {navbarOpen ? (
          // <ul className={styles.menuList}>
          //   <li className={styles.menuItem}>Username/Sign In</li>
          //   <li className={styles.menuItem}>Dashboard</li>
          //   <li className={styles.menuItem}>Dark Mode</li>
          //   <li className={styles.menuItem}>Sign Out</li>
          // </ul>
          <div className={styles.menuList}>
            <Link href="/aboutus">
              <a className={colorChange ? `${styles.menuItem}` : `${styles.menuItemTop}`}>About Us</a>
              {/* if user is logged in then username should be displayed otherwise it should be sign in*/}
            </Link>
            <Link href="/index">
              <a className={colorChange ? `${styles.menuItem}` : `${styles.menuItemTop}`}>Mission</a>
            </Link>
            <Link href="/aboutus">
              <a className={colorChange ? `${styles.menuItem}` : `${styles.menuItemTop}`}>Team</a>
              {/* button to toggle dark mode */}
            </Link>
            <Link href="/aboutus">
              <a className={colorChange ? `${styles.menuItem}` : `${styles.menuItemTop}`}>Portal</a>
              {/* button to toggle dark mode */}
            </Link>
            <Link href="/aboutus">
              <a className={colorChange ? `${styles.menuItem}` : `${styles.menuItemTop}`}>Dark Mode</a>
              {/* button to toggle dark mode */}
            </Link>
            <Link href="/login">
              <a className={colorChange ? `${styles.menuItem}` : `${styles.menuItemTop}`}>Sign Out</a>
            </Link>
          </div>
        )
          : null}
      </nav>
    </div>
  );
}