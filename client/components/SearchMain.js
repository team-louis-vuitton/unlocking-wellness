/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import styles from '../styles/SearchMain.module.css';

const SearchMain = () => {
  const [zipCode, setZipCode] = useState('');
  const [service, setService] = useState(null);
  const [focus, setFocus] = useState(null);

  const searchHandler = (e) => {
    e.preventDefault();
    // console.log(zipCode, service);
  };

  const zipCodeHandler = (e) => {
    e.preventDefault();
    setZipCode(e.target.value);
  };

  const serviceHandler = (e) => {
    e.preventDefault();
    setService(e.target.value);
  };

  const focusHandler = (e) => {
    e.preventDefault();
    setService(e.target.value);
  };

  return (
    <section className={styles.coverSearch}>
      <div className={styles.searchMainTitle}>Tailored Care</div>
      <article className={styles.container}>
        <div className={styles.searchSubTitle}>Find a care provider near you:</div>
        <div>
          <form onSubmit={searchHandler}>
            <input
              id="outlined-error-helper-text"
              label="Zip Code"
              value={zipCode}
              placeholder="Zip Code"
              className="textField"
              onChange={zipCodeHandler}
            />
            <select className={styles.dropDown} value={service} onChange={serviceHandler}>
              <option value="0">Select Services</option>
              <option value="Acupuncture">Acupuncture</option>
              <option value="Alternative Medicine">Alternative Medicine</option>
              <option value="Cryotherapy">Cryotherapy</option>
              <option value="Gender Affirming Care">Gender Affirming Care</option>
              <option value="Herbal">Herbal Remedies</option>
              <option value="Hypnosis">Hypnosis</option>
              <option value="Massage Therapy">Massage Therapy</option>
              <option value="Meditation">Meditation</option>
              <option value="Naturopathic/Holistic">Naturopathic/Holistic</option>
              <option value="Nutritionists">Nutritionists</option>
              <option value="Reiki">Reiki</option>
              <option value="Women's Health">Women's Health</option>
            </select>

            <select className={styles.dropDown} value={focus} onChange={focusHandler}>
              <option value="0">Filter By Focus</option>
              <option value="lgbtq">LGBTQ+</option>
              <option value="idd">Intellectual/Development Disabilities</option>
              <option value="Women of Color">Women of Color</option>
              <option value="immigrants">Immigrants</option>
              <option value="First Nations">First Nations</option>
              <option value="Women of Color">Women of Color</option>
            </select>
            <input
              type="submit"
              value="Search Providers"
              className={styles.searchButton}
            />
          </form>
        </div>
      </article>
    </section>
  );
};

export default SearchMain;
