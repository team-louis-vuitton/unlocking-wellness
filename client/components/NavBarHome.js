/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
// import MenuHome from '../components/MenuHome';
// import Menu from '../components/menu/Menu';
import { slide as Menu } from 'react-burger-menu'

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

  var stylesM = {
    bmBurgerButton: {
      position: 'fixed',
      width: '18px',
      height: '15px',
      left: '18px',
      top: '18px'
    },
    bmBurgerBars: {
      background: '#fff'
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
      {/* <Menu /> */}
      <div className={styles.showOnMobile}>
        <Menu className={styles.showOnMobile} styles={stylesM} left>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
        </Menu>
      </div>

    </div>
  );
}
