/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext, createContext } from 'react';

const FaveContext = createContext({
  faveProviders: ['hello']
});

export function FaveProvider({ children }) {
  return (
    <FaveContext.Provider value={[]}>
      { children }
    </FaveContext.Provider>
  );
}

// this is a custom hook to use the FaveContext and access the authUser and the loading boolean
export const useFave = () => useContext(FaveContext);