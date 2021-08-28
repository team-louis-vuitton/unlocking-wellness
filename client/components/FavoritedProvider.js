import styles from '../styles/PreferredProviders.module.css';

const FavoritedProvider = ({provider}) => (
  <div className={styles.providerFit}>
    <h3 className={styles.provider}>{provider.name}</h3>
  </div>
);

export default FavoritedProvider;