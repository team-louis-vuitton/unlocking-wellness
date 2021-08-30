/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from 'react';
import styles from '../styles/SearchMain.module.css';
import axios from 'axios';
import SearchContext from './SearchContext.js';
import { useRouter } from 'next/router';
// Create context -> Import on any page
const SearchMain = () => {
  const [zipCode, setZipCode] = useState('');
  const [service, setService] = useState("0");
  const [focus, setFocus] = useState("0");
  const [language, setLanguage] = useState("0");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (e) => {
    e.preventDefault();

    let searchObj = {
      categories: service,
      location: zipCode};

    axios.get('/api/yelp/category', searchObj)
      .then(response => setSearchResults(response.data.businesses))
      .then(() => {
        setZipCode('')
        setService("0")
        setFocus("0")
        setLanguage("0");
      })
      .catch(err => console.log(err))

      //Route to search results page
      router.push('/searchResults');
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
    setFocus(e.target.value);
  };

  const languageHandler = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
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

            <select className={styles.dropDown} value={language} onChange={languageHandler}>
              <option value="0">Filter By Language</option>
              <option value="arabic">Arabic</option>
              <option value="bengali">Bengali</option>
              <option value="mandarin">Chinese (Mandarin)</option>
              <option value="canto">Chinese (Cantonese)</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="hindi">Hindi</option>
              <option value="japanse">Japanese</option>
              <option value="Korean">Korean</option>
              <option value="marathi">Marathi</option>
              <option value="Portuguese">Portuguese</option>
              <option value="russian">Russian</option>
              <option value="sign">Sign Language</option>
              <option value="spanish">Spanish</option>
              <option value="turkish">Turkish</option>
              <option value="vietnamese">Vietnamese</option>
              <option value="punjabi">Western Punjabi</option>
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
