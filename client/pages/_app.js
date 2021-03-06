/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from '../components/UserContext.js';
import '../styles/globals.css';
import { FaveProvider } from '../components/FaveContext.js';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../components/theme';
import { SearchProvider } from '../components/SearchContext.js';

const progress = new ProgressBar({
  size: 2,
  color: "#29e",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <SearchProvider>
            <FaveProvider>
              <Component {...pageProps} />
            </FaveProvider>
          </SearchProvider>
        </UserProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default MyApp;
