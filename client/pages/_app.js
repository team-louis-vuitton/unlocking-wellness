/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { UserProvider } from '../components/UserContext.js';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    // <UserProvider>
    <Component {...pageProps} />
    // </UserProvider>
  );
}

export default MyApp;
