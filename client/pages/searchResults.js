import SearchCard from '../components/SearchCard';
import mockData from '../searchCardMock';
import styles from '../styles/SearchResults.module.css';
import PreferredProviders from '../components/PreferredProviders';
import NavBar from '../components/NavBar';
import {useState} from 'react';

const SearchResults = () => {
  let [faveProviders, setFaveProviders] = useState([]);
  
  const handleFavoriteProvider = (obj) => {
    let curProviders = faveProviders.slice();
    curProviders.push(obj);
    setFaveProviders(curProviders);
    console.log(faveProviders);
  }

  const deleteFavoriteProvider = (id) => {
    let curProviders = faveProviders.slice();
    for (let i = 0; i < curProviders.length; i++) {
      if (curProviders[i].id === id) {
        curProviders.splice(i, 1);
        break;
      }
    }
    setFaveProviders(curProviders);
  }

  return (
    <section>
      <NavBar />
      <h2 className={styles.searchHeader}>Search Results for Medical Centers</h2>
      <article className={styles.container}>
        {
          mockData.map((card) => <SearchCard handleFavoriteProvider={handleFavoriteProvider} card={card} key={card.id}/>
          )
        }
      </article>
      <PreferredProviders deleteFavoriteProvider={deleteFavoriteProvider} faveProviders={faveProviders}/>
    </section>
  )
};

export default SearchResults;
