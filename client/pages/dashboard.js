/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.greeting}>
          Welcome Zariopheef!
        </div>
        <form>
          <input
            placeholder="Search"
            className={styles.search}
          />
        </form>

        <div>
          <div className={styles.quote}>

            <span>
              We believe in healthcare for everyone. For us, everyone reall does
              include every person and identity. Our clinics are inclusive, judgment-free zones.
            </span>

          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.dashboardTitle}>
          User Dashboard
        </div>
        <div className={styles.yourTeam}>
          <div className={styles.yourTeamTitle}>
            Your Team
          </div>
          <div className={styles.providerBarContainer}>
            <div className={styles.providerBar}>
              <div className={styles.providerBarTitle}>Gender Affirming Care</div>
              <div className={styles.providerBarDoctor}>Select Your Physician</div>
              <div className={styles.providerBarMenu}>|||</div>
            </div>
            <div className={styles.providerBar}>
              <div className={styles.providerBarTitle}>Mental Well Being</div>
              <div className={styles.providerBarDoctor}>YouBeen Jung, MD</div>
              <div className={styles.providerBarMenu}>|||</div>
            </div>
          </div>

        </div>
        <div className={styles.yourServices}>
          <div className={styles.yourTeamTitle}>
            Your Services
          </div>
          <div className={styles.providerBarContainer}>
            <div className={styles.providerBar}>
              <div className={styles.providerBarTitle}>PLACEHOLDER</div>
              <div className={styles.providerBarDoctor}>PLACEHOLDER</div>
              <div className={styles.providerBarMenu}>|||</div>
            </div>
            <div className={styles.providerBar}>
              <div className={styles.providerBarTitle}>PLACEHOLDER</div>
              <div className={styles.providerBarDoctor}>PLACEHOLDER</div>
              <div className={styles.providerBarMenu}>|||</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
