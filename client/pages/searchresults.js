import SearchCard from '../components/SearchCard';
import mockData from '../searchCardMock';
import styles from '../styles/SearchResults.module.css';
import PreferredProviders from '../components/PreferredProviders';
import NavBar from '../components/NavBar';
import {useState, useEffect, useContext} from 'react';
import MapToggleButton from '../components/MapToggleButton.js';
import SearchContext from '../components/SearchContext.js';
import FaveContext from '../components/FaveContext.js';
import SearchDrawer from '../components/SearchDrawer.js';

const SearchResults = ({ searchResults }) => {
  let [faveProviders, setFaveProviders] = useState([]);
  let [results, setResults] = useState([]);
  let [isLogInVisible, setIsLogInVisible] = useState(false);
  let [alignment, setAlignment] = useState('left');
  let {savedProviders, changeSavedProviders} = useContext(FaveContext);
  const { zipCode, APIResults } = useContext(SearchContext);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(APIResults) {
      setLoading(true)
      setResults(APIResults)
    }
    console.log(savedProviders);
  }, [])

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
      <section className={styles.all}>
        <NavBar />
        <button onClick={() => {

        }}>Test</button>
        <div className={styles.drawerButton}>
          <SearchDrawer />
        </div >
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
        <div className={styles.drawerButton}>
          <SearchDrawer />
        </div >
        <div className={styles.toggleButton} >
          <MapToggleButton alignment={alignment} handleAlignment={handleAlignment} />
        </div>
        <article>
          <h2 className={styles.searchHeader}>Search Results for Medical Centers{zipCode}</h2>
          {/* Zach, put your map component here */}
        </article>
        <PreferredProviders isLogInVisible={isLogInVisible} deleteFavoriteProvider={deleteFavoriteProvider} faveProviders={faveProviders}/>
      </section>
    )
  }
};

export default SearchResults;
