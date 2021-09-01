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
  const { authUser, signOut } = useUser();

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        {/* <button className={styles.icon} onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} size='2x' />
        </button> */}
        <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} onClick={handleToggle} />
        {menuOpen ? (
          <div className={styles.menuList}>
            <Link href="/">
              <a className={styles.menuItem}>Home</a>
            </Link>
            {/* <Link href="/login">
              <a className={colorChange ? `${styles.menuItem}` : `${styles.menuItemTop}`}>Portal</a>
            </Link> */}
            {/* <Link href="/aboutus">
              <a className={styles.menuItem}>Dark Mode</a>
              button to toggle dark mode
            </Link> */}
            {!authUser ? (
              <Link href="/login">
                <a className={styles.menuItem}>Sign In</a>
              </Link>
            ): (
              <button className={styles.signout} onClick={signOut}>Sign Out </button>
            )}
          </div>
        )
          : null}
      </nav>
    </div>
  );
}