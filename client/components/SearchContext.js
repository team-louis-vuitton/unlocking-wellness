/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext, createContext } from 'react';

const SearchContext = createContext({
  zipCode: null,
  changeZip: () => {},
  service: null,
  changeService: () => {},
  APIResults: null,
  changeSearchResults: () => {},
  darkMode: false,
});

export function SearchProvider({ children }) {
  const [zipCode, setZipCode] = useState(null);
  const [service, setService] = useState("");
  const [APIResults, setSearchResults] = useState( null);
  const [darkMode, setDarkMode] = useState(false);

  const changeZip = (zip) => {
    setZipCode(zip);
  }

  const changeService = (serv) => {
    setService(serv);
  }
  const changeSearchResults = (data) => {
    setSearchResults(data)
  }
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <SearchContext.Provider value={{zipCode, changeZip, service, changeService, APIResults, changeSearchResults, darkMode, toggleDarkMode}}>
      { children }
    </SearchContext.Provider>
  );
}

export default SearchContext;

// this is a custom hook to use the UserStateContext and access the authUser and the loading boolean
//export const useSearch = () => useContext(SearchContext);
