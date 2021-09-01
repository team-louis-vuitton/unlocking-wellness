import SearchCard from '../components/SearchCard';
import mockData from '../searchCardMock';
import styles from '../styles/SearchResults.module.css';
import PreferredProviders from '../components/PreferredProviders';
import NavBar from '../components/NavBar';
import {useState, useEffect, useContext} from 'react';
import ModalWindow from '../components/modalWindow';
import MapToggleButton from '../components/MapToggleButton.js'
import SearchContext from '../components/SearchContext.js';
import FaveContext from '../components/FaveContext.js';
import SearchDrawer from '../components/SearchDrawer.js';
import MapContainer from '../components/Map.js'
import ReactDependentScript from 'react-dependent-script';
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

  useEffect(() => {
    if(APIResults) {
      setLoading(true)
      setResults(APIResults)
    }
  }, [])

  const handleFavoriteProvider = (obj) => {
    if (!faveProviders.includes(obj)) {
      let curProviders = faveProviders.slice();
      curProviders.push(obj);
      setFaveProviders(curProviders);
      changeSavedProviders(curProviders);
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
    changeSavedProviders(curProviders);
  }

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  if (alignment === 'left') {
    return (
      <section className={styles.all}>
        <NavBar />
        <div className={styles.drawerButton}>
          <SearchDrawer />
        </div >
        <div className={styles.toggleButton} >
          <MapToggleButton alignment={alignment} handleAlignment={handleAlignment} />
        </div>
        <article>
          <div className={styles.resultsContainer}>
            <h2 className={styles.searchHeader}>Search Results for Medical Centers</h2>
            <div className={styles.cardcontainer}>
              {
                results.map((card) => <SearchCard handleFavoriteProvider={handleFavoriteProvider} card={card} key={card.id}/>)
              }
            </div>
          </div>
        </article>
        <PreferredProviders changeSavedProviders={changeSavedProviders} isLogInVisible={isLogInVisible} deleteFavoriteProvider={deleteFavoriteProvider} faveProviders={faveProviders}/>
        <ModalWindow />
      </section>
    )
  } else {
    return (
      <section>
        <NavBar />
        <div className={styles.drawerButton}>
          <SearchDrawer />
        </div >
        <div className={styles.toggleButton} >
          <MapToggleButton alignment={alignment} handleAlignment={handleAlignment} />
        </div>
        <article>
        <h2 className={styles.searchHeader}>Search Results for Medical Centers</h2>
          <div className={styles.container}>
          <MapContainer data={results}/>
          </div>
        </article>
        <PreferredProviders isLogInVisible={isLogInVisible} deleteFavoriteProvider={deleteFavoriteProvider} faveProviders={faveProviders}/>
        <ModalWindow />
      </section>
    )
  }
};

export default SearchResults;