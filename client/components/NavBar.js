/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { useUser } from './UserContext';
import Image from 'next/image'
import Link from 'next/link';
import logo from '../public/logo.png';
import ThemeSwitcher from './chakra/ThemeSwitcher';
import { slide as Menu } from 'react-burger-menu'

export default function Navbar() {
  const [colorChange, setColorChange] = useState(false);
  const { authUser } = useUser();

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

  var stylesM = {
    bmBurgerButton: {
      position: 'fixed',
      width: '18px',
      height: '15px',
      right: '18px',
      top: '18px'
    },
    bmBurgerBars: {
      background: '#212121'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div className={styles.logo}>
          <Image src={logo} alt="Unlocking Wellness logo" />
        </div>
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
        {authUser ? (
          <Link href="/dashboard">
            <a className={styles.linkScrolling}>Dashboard</a>
          </Link>
        ) :null}
      </div>
      <ThemeSwitcher />
      {/* <Menu /> */}
      <div className={styles.showOnMobile}>
        <Menu className={styles.showOnMobile} styles={stylesM} right>
          <Link href="/">
            <a className={styles.slideLink}>Home</a>
          </Link>
          <br />
          <Link href="/aboutus">
            <a className={styles.slideLink}>About Us</a>
          </Link>
          <br />
          <Link href="/aboutus#mission">
            <a className={styles.slideLink}>Mission</a>
          </Link>
          <br />
          <Link href="/aboutus#the-team">
            <a className={styles.slideLink}>Team</a>
          </Link>
          <br />
          <Link href="/login">
            <a className={styles.slideLink}>Portal</a>
          </Link>
          <br />
          <a className={styles.slideLink}>Dark Mode</a>
          <br />
          <a className={styles.slideLink}>Sign Out</a>
        </Menu>
      </div>
    </div>
  );
}
