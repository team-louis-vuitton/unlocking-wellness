import SearchCard from '../components/SearchCard';
import mockData from '../searchCardMock';
import styles from '../styles/SearchResults.module.css';
import PreferredProviders from '../components/PreferredProviders';
import NavBar from '../components/NavBar';
import {useState, useEffect, useContext} from 'react';
import MapToggleButton from '../components/MapToggleButton.js'
import SearchContext from '../components/SearchContext.js';
import FaveContext from '../components/FaveContext.js';
import SearchDrawer from '../components/SearchDrawer.js';
import MapContainer from '../components/Map.js';
import { useRouter } from 'next/router';

const SearchResults = ({ searchResults }) => {
  let [faveProviders, setFaveProviders] = useState([]);
  let [results, setResults] = useState([]);
  let [isLogInVisible, setIsLogInVisible] = useState(false);
  let [alignment, setAlignment] = useState('left');
  let {savedProviders, changeSavedProviders} = useContext(FaveContext);
  const { zipCode, APIResults } = useContext(SearchContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  let [providerVisible, setProviderVisible] = useState(false);

  useEffect(() => {
    if(APIResults) {
      setLoading(true);
      setResults(APIResults);
    }
  }, [APIResults])

  const handleFavoriteProvider = (obj) => {
    if (!faveProviders.includes(obj)) {
      let curProviders = faveProviders.slice();
      curProviders.push(obj);
      setFaveProviders(curProviders);
      changeSavedProviders(curProviders);
      setIsLogInVisible(true);
      setProviderVisible(true);
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
      setProviderVisible(false);
    }
    setFaveProviders(curProviders);
    changeSavedProviders(curProviders);
  }

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  if (alignment === 'left') {
    return (
      <section className={styles.all}>
        <NavBar />
        <div className={styles.buttonGroup}>
          <div className={styles.drawerButton}>
            <SearchDrawer />
          </div >
          <div className={styles.toggleButton} >
            <MapToggleButton alignment={alignment} handleAlignment={handleAlignment} />
          </div>
        </div>
        <article>
          <div style={{marginLeft: providerVisible ? '25%' : '0'}} className={styles.resultsContainer}>
            {
              results.length ? <h2 className={styles.searchHeader}>Search Results for {results[0].categories[0].title}</h2> : null
            }
            <div className={styles.cardcontainer}>
              {
                results.map((card) => <SearchCard handleFavoriteProvider={handleFavoriteProvider} card={card} key={card.id}/>)
              }
            </div>
          </div>
        </article>
        <div style={{display: providerVisible ? 'inline-block' : 'none'}}>
          <PreferredProviders changeSavedProviders={changeSavedProviders} isLogInVisible={isLogInVisible} deleteFavoriteProvider={deleteFavoriteProvider} faveProviders={faveProviders} />
        </div>
      </section>
    )
  } else {
    return (
      <section>
        <NavBar />
        <div className={styles.buttonGroup}>
          <div className={styles.drawerButton}>
            <SearchDrawer />
          </div >
          <div className={styles.toggleButton} >
            <MapToggleButton alignment={alignment} handleAlignment={handleAlignment} />
          </div>
        </div>
        <article>
          <div className={styles.resultsContainer}>
            {
              results.length ? <h2 className={styles.searchHeader}>Search Results for {results[0].categories[0].title}</h2> : null
            }
          </div>
          <div className={styles.container}>
            <MapContainer data={results}/>
          </div>
        </article>
        <div style={{display: providerVisible ? 'inline-block' : 'none'}}>
          <PreferredProviders changeSavedProviders={changeSavedProviders} isLogInVisible={isLogInVisible} deleteFavoriteProvider={deleteFavoriteProvider} faveProviders={faveProviders} />
        </div>
      </section>
    )
  }
};

export default SearchResults;