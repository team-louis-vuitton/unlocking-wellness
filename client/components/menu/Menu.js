import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/BrianMenu.module.css';
import { useUser } from '../UserContext';
import Burger from './Burger';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { authUser, signOut } = useUser();

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Burger setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        {menuOpen ? (
          <div className={styles.menuList}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/aboutus">
              <a>Dark Mode</a>
            </Link>
            {!authUser ? (
              <Link href="/login">
                <a>Sign In</a>
              </Link>
            ): (
              <button onClick={signOut}>Sign Out </button>
            )}
          </div>
        )
          : ''}
      </nav>
    </div>
  );
}