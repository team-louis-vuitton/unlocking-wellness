// lists of physicians after search
// need a way to pass down props
// modal => physician information

import SearchCard from '../components/SearchCard';
import mockData from '../searchCardMock';
import styles from '../styles/SearchResults.module.css';
import ModalWindow from '../components/modalWindow';

const SearchResults = () => (
  <>
    <section>
      <h2>Search Results</h2>
      <article className={styles.container}>
        {
        mockData.map((card) => <SearchCard card={card} key={card.id} />)
      }
      </article>
    </section>
    <ModalWindow />
  </>
);

export default SearchResults;
