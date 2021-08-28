/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext, createContext } from 'react';

const UserStateContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState('example');
  return (
    <UserStateContext.Provider value={{ user, setUser }}>
      { children }
    </UserStateContext.Provider>
  );
};

export const useUser = () => useContext(UserStateContext);
