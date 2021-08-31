/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { UserProvider } from '../components/UserContext.js';
import '../styles/globals.css';
import {FaveProvider} from '../components/FaveContext.js';
import { SearchProvider } from '../components/SearchContext.js';

function MyApp({ Component, pageProps }) {
  // const [zipCode, setZipCode] = useState(98730);
  // const [service, setService] = useState("Fertility");
  // const [searchResults, setSearchResults] = useState([]);
  return (
    <UserProvider>
      <SearchProvider>
        <Component {...pageProps}
        />
      </SearchProvider>
    </UserProvider>
  );
}

export default MyApp;
