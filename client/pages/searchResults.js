// lists of physicians after search
// need a way to pass down props
// modal => physician information

import SearchCard from '../components/SearchCard.js';
import mockData from '../searchCardMock.js';
import styles from '../styles/SearchResults.module.css';

const SearchResults = () => {
  return (
    <section>
      <h2>Search Results</h2>
      <article className={styles.container}>
        {
          mockData.map(card => {
            return <SearchCard card={card} />
          })
        }
      </article>
    </section>
  )
}

export default SearchResults;