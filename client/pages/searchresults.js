import SearchCard from '../components/SearchCard';
import mockData from '../searchCardMock';
import styles from '../styles/SearchResults.module.css';
import PreferredProviders from '../components/PreferredProviders';
import NavBar from '../components/NavBar';
import { useState, useEffect, useContext } from 'react';
import MapToggleButton from '../components/MapToggleButton.js'
import SearchContext from '../components/SearchContext.js';
import FaveContext from '../components/FaveContext.js';
import SearchDrawer from '../components/SearchDrawer.js';
import MapContainer from '../components/Map.js';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import Button from '@material-ui/core/Button';
import { useUser } from '../components/UserContext.js';

const SearchResults = ({ searchResults }) => {
  let {savedProviders, changeSavedProviders} = useContext(FaveContext);
  let [faveProviders, setFaveProviders] = useState(savedProviders);
  let [results, setResults] = useState([]);
  let [isLogInVisible, setIsLogInVisible] = useState(false);
  let [alignment, setAlignment] = useState('left');
  const { zipCode, APIResults } = useContext(SearchContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  let [providerVisible, setProviderVisible] = useState(true);
  const {authUser, signOut} = useUser();

  useEffect(() => {
    if(APIResults) {
      setLoading(true);
      setResults(APIResults);
    }
    if (!savedProviders.length) {
      setProviderVisible(false);
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
          <div className={styles.drawerButton} >
            <Button onClick={() => router.push('/login')} size="large">
              Back to Dashboard
            </Button>
          </div>
          <div style={{display: authUser ? 'inline-block' : 'none'}} className={styles.drawerButton} >
            <Button onClick = {() => {
              signOut();
              changeSavedProviders([]);
              setFaveProviders([]);
              setProviderVisible(false);
            }} size="large">
              Sign Out
            </Button>
          </div>
        </div>
        <article>
          <div style={{ marginLeft: providerVisible ? '25%' : '0' }} className={styles.resultsContainer}>
            {
              results.length ? <h2 className={styles.searchHeader}>Search Results for {results[0].categories[0].title}</h2> : null
            }
            <div className={styles.cardcontainer}>
              {
                results.map((card) => <SearchCard handleFavoriteProvider={handleFavoriteProvider} card={card} key={card.id} />)
              }
            </div>
          </div>
        </article>
        <div style={{ display: providerVisible ? 'inline-block' : 'none' }}>
          <PreferredProviders changeSavedProviders={changeSavedProviders} isLogInVisible={isLogInVisible} deleteFavoriteProvider={deleteFavoriteProvider} faveProviders={faveProviders} />
        </div>
        <ChatBot />
        <Footer />
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
              results.length ? <h2  className={styles.searchHeader}>Search Results for {results[0].categories[0].title}</h2> : null
            }
          </div>
          <div style={{marginLeft: providerVisible ? '25%' : '0'}} className={styles.container}>
            <MapContainer data={results}/>
          </div>
        </article>
        <div style={{display: providerVisible ? 'inline-block' : 'none'}}>
          <PreferredProviders changeSavedProviders={changeSavedProviders} isLogInVisible={isLogInVisible} deleteFavoriteProvider={deleteFavoriteProvider} faveProviders={faveProviders} />
        </div>
        <ChatBot />
        <Footer />
      </section>
    )
  }
};

export default SearchResults;