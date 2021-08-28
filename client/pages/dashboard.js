/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Image from 'next/image';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NavBar from '../components/NavBar';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.topBox}>
          <div className={styles.left}>
            <div>
              <div className={styles.quote}>

                <span>
                  We believe in healthcare for everyone. For us, everyone really does
                  include every person and identity. Our clinics are inclusive, judgment-free zones.
                </span>

              </div>
            </div>
          </div>
          <div className={styles.right}>
            {/* <div className={styles.dashboardTitle}>
              User Dashboard
            </div> */}
            <div className={styles.topRight}>
              <div className={styles.greeting}>
                Welcome Zariopheef!
              </div>
              <form>
                <input
                  placeholder="Search"
                  className={styles.search}
                />
              </form>
            </div>

            <div className={styles.yourTeam}>
              <div className={styles.yourTeamTitle}>
                Your Preferred Providers
              </div>
              <div className={styles.providerCardContainer}>
                <div className={styles.providerCard}>
                  <div className={styles.providerBarTitle}>Gender Affirming Care</div>
                  {/* <div className={styles.providerBarDoctor}>Select Your Physician</div> */}

                </div>
                <div className={styles.providerCard}>
                  <div className={styles.providerBarTitle}>Mental Well Being</div>
                  {/* <div className={styles.providerBarDoctor}>YouBeen Jung, MD</div> */}
                </div>
                <div className={styles.providerCard}>
                  <div className={styles.providerBarTitle}>Meditation Center</div>
                  {/* <div className={styles.providerBarDoctor}>YouBeen Jung, MD</div> */}
                </div>
              </div>

            </div>

          </div>
        </div>
        <div className={styles.bottomBox}>
          <div className={styles.yourServices}>
            <div className={styles.yourTeamTitle}>
              Discover More
            </div>
            <div className={styles.carousel}>
              <ArrowBackIosIcon onClick={() => console.log('LEFT YALL')} />
              <button type="button" className={styles.discoverButton}>Accupuncture</button>
              <button type="button" className={styles.discoverButton}>Behavioral Health</button>
              <button type="button" className={styles.discoverButton}>Herbal Healing</button>
              <button type="button" className={styles.discoverButton}>Eastern Remedies</button>
              <ArrowForwardIosIcon onClick={() => console.log('RIGHT YALL')} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
