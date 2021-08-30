/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext, createContext } from 'react';

const SearchContext = createContext({
  categories: '',
  location: 39458});

export function SearchProvider({ children }) {
  return (
    <SearchContext.Provider value={auth}>
      { children }
    </SearchContext.Provider>
  );
}

// this is a custom hook to use the UserStateContext and access the authUser and the loading boolean
export const useSearch = () => useContext(SearchContext);
