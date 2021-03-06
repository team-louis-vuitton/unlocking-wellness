/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext, createContext } from 'react';
import useFirebaseAuth from '../lib/useFirebaseAuth';

const UserStateContext = createContext({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: async () => {},
  createUserWithEmailAndPassword: async () => {},
  signOut: async () => {},
  signInWithGoogle: async () => {},
});

export function UserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <UserStateContext.Provider value={auth}>
      { children }
    </UserStateContext.Provider>
  );
}

// this is a custom hook to use the UserStateContext and access the authUser and the loading boolean
export const useUser = () => useContext(UserStateContext);
