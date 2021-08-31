import SearchCard from '../components/SearchCard';
import mockData from '../searchCardMock';
import styles from '../styles/SearchResults.module.css';
import PreferredProviders from '../components/PreferredProviders';
import NavBar from '../components/NavBar';
import {useState, useEffect} from 'react';
import ModalWindow from '../components/modalWindow';
import MapToggleButton from '../components/MapToggleButton.js'
import MapContainer from '../components/Map.js'

const SearchResults = () => {
  let [faveProviders, setFaveProviders] = useState([]);
  let [results, setResults] = useState(mockData);
  let [isLogInVisible, setIsLogInVisible] = useState(false);
  let [alignment, setAlignment] = useState('left');

  const handleFavoriteProvider = (obj) => {
    if (!faveProviders.includes(obj)) {
      let curProviders = faveProviders.slice();
      curProviders.push(obj);
      setFaveProviders(curProviders);
      setIsLogInVisible(true);
    }
  }

  const deleteFavoriteProvider = (id) => {
    let curProviders = faveProviders.slice();
    for (let i = 0; i < curProviders.length; i++) {
      if (curProviders[i].id === id) {
        curProviders.splice(i, 1);
        break;
      }
    }
    if (curProviders.length <= 0) {
      setIsLogInVisible(false);
    }
    setFaveProviders(curProviders);
  }

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  if (alignment === 'left') {
    return (
      <section>
        <NavBar />
        <div className={styles.toggleButton} >
          <MapToggleButton alignment={alignment} handleAlignment={handleAlignment} />
        </div>
        <article>
          <h2 className={styles.searchHeader}>Search Results for Medical Centers</h2>
          <div className={styles.container}>
            {
              results.map((card) => <SearchCard handleFavoriteProvider={handleFavoriteProvider} card={card} key={card.id}/>)
            }
          </div>
        </article>
        <PreferredProviders isLogInVisible={isLogInVisible} deleteFavoriteProvider={deleteFavoriteProvider} faveProviders={faveProviders}/>
        <ModalWindow />
      </section>
    )
  } else {
    return (
      <section>
        <NavBar />
        <div className={styles.toggleButton} >
          <MapToggleButton alignment={alignment} handleAlignment={handleAlignment} />
        </div>
        <article>
        <h2 className={styles.searchHeader}>Search Results for Medical Centers</h2>
          <div className={styles.container}>
          {/* Zach, put your map component here */}
          <MapContainer/>
          </div>
        </article>
        <PreferredProviders isLogInVisible={isLogInVisible} deleteFavoriteProvider={deleteFavoriteProvider} faveProviders={faveProviders}/>
        <ModalWindow />
      </section>
    )
  }
};

export default SearchResults;
