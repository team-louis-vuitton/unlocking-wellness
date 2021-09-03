/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext, createContext } from 'react';
import styles from '../styles/SearchMain.module.css';
import axios from 'axios';
import SearchContext from './SearchContext.js';
import { useRouter } from 'next/router';
import SearchIcon from '@material-ui/icons/Search';


const SearchMain = () => {
  const router = useRouter();

  const [focus, setFocus] = useState("0");
  const [language, setLanguage] = useState("0");
  const [errors, setErrors] = useState([]);
  const { zipCode, changeZip, service, changeService, APIResults, changeSearchResults, darkMode, toggleDarkMode} = useContext(SearchContext);

  const searchHandler = (e) => {
    e.preventDefault();

    let newErrors = checkForm();

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    let searchObj = {
      "categories": service,
      "location": zipCode
    }

    const ip = process.env.NEXT_PUBLIC_SERVER_IP || 'http://localhost';

    axios.get(`${ip}:3001/yelp`, { params:searchObj })
      .then(response => changeSearchResults(response.data.businesses))
      .then(() => {
        changeZip(null)
        changeService("0")
        setFocus("0")
        setLanguage("0");
        router.push('/searchresults');
      })
      .catch(err => console.log(err))

  };

  const zipCodeHandler = (e) => {
    e.preventDefault();
    changeZip(e.target.value);
  };

  const serviceHandler = (e) => {
    e.preventDefault();
    changeService(e.target.value);
  };

  const focusHandler = (e) => {
    e.preventDefault();
    setFocus(e.target.value);
  };

  const languageHandler = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
  };

  const checkForm = () => {
    let zipLength = zipCode.toString().length;
    let errors = [];
    if (zipLength < 5) {
      errors.push('Please provide a valid zipcode.')
    }
    if (service === "0") {
      errors.push('Please select a service.')
    }
    return errors;
  }

  return (
    <section>
      <div className={darkMode? styles.searchMainTitleDark : styles.searchMainTitle}>Tailored Care</div>
      <article className={darkMode? styles.containerDark : styles.container}>
        <div className={darkMode? styles.searchSubTitleDark : styles.searchSubTitle}>Find a care provider near you:</div>
        <div className={styles.subContainer}>
          <form onSubmit={searchHandler} className={styles.mediaForm}>
            <input
              id="outlined-error-helper-text"
              label="Zip Code"
              value={zipCode}
              placeholder="Zip Code"
              className={styles.zipcode}
              onChange={zipCodeHandler}
            />
            <select className={styles.dropDown} value={service} onChange={serviceHandler}>
              <option value="0">Select Services</option>
              <option value="acupuncture">Acupuncture</option>
              <option value="alternativemedicine">Alternative Medicine</option>
              <option value="herbalshops">Herbal Remedies</option>
              <option value="homeopathic">Homeopathic</option>
              <option value="hypnosis">Hypnosis</option>
              <option value="massage_therapy">Massage Therapy</option>
              <option value="meditationcenters">Meditation</option>
              <option value="naturopathic">Naturopathic/Holistic</option>
              <option value="nutritionists">Nutritionists</option>
              <option value="psychiatrists">Psychiatrists</option>
              <option value="reiki">Reiki</option>
              <option value="obgyn">Women's Health</option>
            </select>

            <select className={styles.dropDown} value={focus} onChange={focusHandler}>
              <option value="0">Filter By Focus</option>
              <option value="lgbtq">LGBTQ+</option>
              <option value="idd">Int./Dev.Disabilities</option>
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
            <div className={styles.errors}>
                    {errors.map(error => (
                      <div key={error}>{error}</div>
                    ))}
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default SearchMain;
