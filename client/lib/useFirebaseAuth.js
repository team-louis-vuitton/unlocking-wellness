import { useState, useEffect } from 'react';
import firebase from './Firebase';
// this is importing the firebase connection created using Zadok's api key

const formatAuthUser = (user) => ({
  uid: user.id,
  email: user.email,
});
// the purpose of this function is to listen for Firebase changes
export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // if authUser is null, it will mean that the user is not logged in
  // and should be redirected to the login page

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPassword = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const createUserWithEmailAndPassword = (email, password) => {
    const auth = firebase.auth();
    firebase.createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signOut = () => {
    firebase.auth().signOut().then(clear);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
    // firebase.auth keeps track of the state
    // onAuthStateChanged allows you to listen for state changes
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
}
