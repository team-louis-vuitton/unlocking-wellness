/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext, createContext } from 'react';

const FaveContext = createContext({
  savedProviders: [],
  changeSavedProviders: () => {}
});

export function FaveProvider({ children }) {

  const changeSavedProviders = (saved) => {
    setSavedProviders(saved)
  }

  let [savedProviders, setSavedProviders] = useState(['hello']);
  return (
    <FaveContext.Provider value={{savedProviders, changeSavedProviders}}>
      { children }
    </FaveContext.Provider>
  );
}

// this is a custom hook to use the FaveContext and access the authUser and the loading boolean
export default FaveContext;