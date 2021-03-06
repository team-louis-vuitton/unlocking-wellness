/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from '../styles/Menu.module.css';
import { useUser } from './UserContext';
import Burger from './menu/Burger';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const { authUser, signOut } = useUser();

  useEffect(() => {
    const changeMenuColor = () => {
      if (window.scrollY >= 240) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };
    window.addEventListener('scroll', changeMenuColor);
  }, [])

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>

        <button className={styles.icon} onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} size='2x' />
          {/* <Burger setMenuOpen={setMenuOpen} menuOpen={menuOpen} /> */}
        </button>
        {menuOpen ? (
          <div className={styles.menuList}>
            <Link href="/index">
              <a className={colorChange ? `${styles.menuItem}` : `${styles.menuItemTop}`}>Home</a>
            </Link>
            {/* <Link href="/login">
              <a className={colorChange ? `${styles.menuItem}` : `${styles.menuItemTop}`}>Portal</a>
            </Link> */}
            <Link href="/aboutus">
              <a className={colorChange ? `${styles.menuItem}` : `${styles.menuItemTop}`}>Dark Mode</a>
              {/* button to toggle dark mode */}
            </Link>
            {!authUser ? (
              <Link href="/login">
                <a className={colorChange ? `${styles.menuItem}` : `${styles.menuItemTop}`}>Sign In</a>
              </Link>
            ): (
              <button className={colorChange ? `${styles.signout}` : `${styles.signoutTop}`} onClick={signOut}>Sign Out </button>
            )}
          </div>
        )
          : null}
      </nav>
    </div>
  );
}