/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image'
import Link from 'next/link';
import logo from '../public/logo.png';
import ThemeSwitcher from './chakra/ThemeSwitcher';
import { slide as Menu } from 'react-burger-menu'

export default function Navbar() {
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 180) {
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
      background: '#FF4500'
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
    <div className={colorChange ? `${styles.containerScrolling}` : `${styles.containerHome}`}>
      <div className={styles.logo}>
        <Image src={logo} alt="Unlocking Wellness logo" />
      </div>
      <div className={styles.links}>
        <Link href="/">
          <a className={colorChange ? `${styles.linkScrolling}` : `${styles.link}`}>Home</a>
        </Link>
        <Link href="/aboutus">
          <a className={colorChange ? `${styles.linkScrolling}` : `${styles.link}`}>About Us</a>
        </Link>
        <Link href="/aboutus#mission">
          <a className={colorChange ? `${styles.linkScrolling}` : `${styles.link}`}>Mission</a>
        </Link>
        <Link href="/aboutus#the-team">
          <a className={colorChange ? `${styles.linkScrolling}` : `${styles.link}`}>Team</a>
        </Link>
        <Link href="/login">
          <a className={colorChange ? `${styles.linkScrolling}` : `${styles.link}`}>Portal</a>
        </Link>
      </div>
      <ThemeSwitcher/>
      {/* <MenuHome /> */}
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
