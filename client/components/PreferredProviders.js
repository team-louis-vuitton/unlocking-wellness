import styles from '../styles/PreferredProviders.module.css';
import FavoritedProvider from '../components/FavoritedProvider';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import { useUser } from './UserContext.js';

const PreferredProviders = ({faveProviders, deleteFavoriteProvider, isLogInVisible, changeSavedProviders}) => {
  const router = useRouter();
  const {authUser} = useUser();

  return (
    <article className={styles.preferredContainer}>
      <h3 className={styles.preferredTitle}>Preferred Providers</h3>
      <div className={styles.titleContainer}>
        {
          faveProviders.map(provider => <FavoritedProvider deleteFavoriteProvider={deleteFavoriteProvider} provider={provider} key={provider.id}/>)
        }
      </div>
      <div style={{display: (isLogInVisible && !authUser) ? 'flex' : 'none'}} className={styles.logIn}>
        <Button onClick={() => {
          changeSavedProviders(faveProviders);
          router.push('/login')
          }} size='large' variant="contained">Login</Button>
        <p style={{textAlign: 'center'}}>to save your preferred providers</p>
      </div>
    </article>
  )
};

export default PreferredProviders;

// style={{display: isLogInVisible ? 'flex' : 'none', backgroundColor: 'rgb(175, 169, 163)', flexFlow: 'column nowrap', alignItems: 'center', fontSize: '1.3rem', margin: '0 7%', padding: '8% 5% 0 5%', boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.25)'}}