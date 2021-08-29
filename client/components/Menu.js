/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
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
            <li className={styles.menuItem}>About Us</li>
            <li className={styles.menuItem}>Mission</li>
            <li className={styles.menuItem}>Team</li>
            <li className={styles.menuItem}>Portal</li>
          </ul>
        )
          : null}
      </nav>
    </div>
  );
}