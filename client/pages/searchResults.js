// lists of physicians after search
// need a way to pass down props
// modal => physician information

import SearchCard from '../components/SearchCard';
import mockData from '../searchCardMock';
import styles from '../styles/SearchResults.module.css';
import PreferredProviders from '../components/PreferredProviders';
import NavBar from '../components/NavBar';

/* Rectangle 11 */

// position: absolute;
// width: 304.98px;
// height: 492.39px;
// left: -33.07px;
// top: 412px;

// background: rgba(184, 175, 152, 0.12);
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// transform: rotate(0.68deg);

const SearchResults = () => (
  <section>
    <NavBar />
    <h2>Search Results</h2>
    <article className={styles.container}>
      {
        mockData.map((card) => <SearchCard card={card} key={card.id}/>)
      }
    </article>
    <PreferredProviders />
  </section>
);

export default SearchResults;