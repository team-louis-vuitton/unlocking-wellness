/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/Link';
import styles from '../styles/Menu.module.css';

export default function Menu() {
  const [navbarOpen, setNavbarOpen] = useState(false);

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
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>Username/Sign In</li>
            <li className={styles.menuItem}>Dashboard</li>
            <li className={styles.menuItem}>Dark Mode</li>
            <li className={styles.menuItem}>Sign Out</li>
          </ul>
        )
          : null}
      </nav>
    </div>
  );
}