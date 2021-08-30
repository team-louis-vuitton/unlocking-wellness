import styles from '../styles/PreferredProviders.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash as faSol} from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt as faReg} from '@fortawesome/free-regular-svg-icons';
import {useState} from 'react';

const FavoritedProvider = ({provider, deleteFavoriteProvider}) => {
  let [isTrashHover, setIsTrashHover] = useState(false);
  let [isBoxHover, setIsBoxHover] = useState(false);

  return (
    <div onMouseEnter={() => setIsBoxHover(true)} onMouseLeave={() => setIsBoxHover(false)} className={styles.providerFit}>
      <h3 className={styles.provider}>{provider.name}</h3>
      <div style={{display: isBoxHover ? 'inline-block' : 'none', fontSize: '0.7rem', marginRight: '3%', cursor: 'pointer'}} onMouseEnter={() => setIsTrashHover(true)} onMouseLeave={() => setIsTrashHover(false)} onClick={() => deleteFavoriteProvider(provider.id)}>
        <FontAwesomeIcon icon={isTrashHover ? faSol : faReg} size='2x' />
      </div>
    </div>
  )
};

export default FavoritedProvider;