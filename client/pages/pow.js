import React, { useEffect } from 'react';
import styles from '../styles/Index.module.scss';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

export default function Pow() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.container}>
        <NavBar />
        {/* <div className={styles.pow}>
          <p className={`${styles.powDesc} ${styles.pointer}`}>Oh hey there! I'm Pow! Please keep me healthy!</p>
          <button type="button" className={styles.powImg}></button>
        </div> */}
        <div className={styles.game}>
          <iframe src="http://wanted5games.com/games/html5/pow-new-en-s-iga-cloud/index.html?pub=10" name="cloudgames-com" width="970" height="540" frameBorder="0" scrolling="no"></iframe>
        </div>
      </div>
      <ChatBot />
      <Footer />
    </div>
  );
}