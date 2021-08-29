import styles from '../styles/PreferredProviders.module.css';
import FavoritedProvider from '../components/FavoritedProvider';

let providers = [
  {
    id: 'j45-I0KaQ4EgzYZ2q_G4kw',
    alias: 'palo-alto-medical-foundation-fremont',
    name: 'Palo Alto Medical Foundation',
    image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/BKplWElqPjYGDFEocmElbA/o.jpg',
    is_closed: false,
    url: 'https://www.yelp.com/biz/palo-alto-medical-foundation-fremont?adjust_creative=_AhrLdprWQOFnvndroR2zw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_AhrLdprWQOFnvndroR2zw',
    review_count: 339,
    categories: [
      {
        alias: 'medcenters',
        title: 'Medical Centers',
      },
    ],
    rating: 2.5,
    coordinates: {
      latitude: 37.548619,
      longitude: -121.973907,
    },
    transactions: [],
    location: {
      address1: '3200 Kearney St',
      address2: '',
      address3: 'Fremont Center',
      city: 'Fremont',
      zip_code: '94538',
      country: 'US',
      state: 'CA',
      display_address: [
        '3200 Kearney St',
        'Fremont Center',
        'Fremont, CA 94538',
      ],
    },
    phone: '+15104901222',
    display_phone: '(510) 490-1222',
    distance: 2223.199814440134,
  },
  {
    id: 'j45-I0KaQ4EgzYZ2q_G4kw',
    alias: 'palo-alto-medical-foundation-fremont',
    name: 'Palo Alto Medical Foundation',
    image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/BKplWElqPjYGDFEocmElbA/o.jpg',
    is_closed: false,
    url: 'https://www.yelp.com/biz/palo-alto-medical-foundation-fremont?adjust_creative=_AhrLdprWQOFnvndroR2zw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=_AhrLdprWQOFnvndroR2zw',
    review_count: 339,
    categories: [
      {
        alias: 'medcenters',
        title: 'Medical Centers',
      },
    ],
    rating: 2.5,
    coordinates: {
      latitude: 37.548619,
      longitude: -121.973907,
    },
    transactions: [],
    location: {
      address1: '3200 Kearney St',
      address2: '',
      address3: 'Fremont Center',
      city: 'Fremont',
      zip_code: '94538',
      country: 'US',
      state: 'CA',
      display_address: [
        '3200 Kearney St',
        'Fremont Center',
        'Fremont, CA 94538',
      ],
    },
    phone: '+15104901222',
    display_phone: '(510) 490-1222',
    distance: 2223.199814440134,
  },
];

const PreferredProviders = () => (
  <article className={styles.preferredContainer}>
    <h3 className={styles.preferredTitle}>Preferred Providers</h3>
    <div className={styles.titleContainer}>
      {
        providers.map(provider => <FavoritedProvider provider={provider} key={provider.id}/>)
      }
    </div>
  </article>
);

export default PreferredProviders;
