import { useState, useEffect } from 'react';
import firebase from './Firebase';
import { useRouter } from 'next/router';
import axios from 'axios';
// this is importing the firebase connection created using Zadok's api key

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName
});
// the purpose of this function is to listen for Firebase changes
export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
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
    const auth = firebase.auth();
    // console.log(firebase.signInWithEmailAndPassword);
    firebase.signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthUser(formatAuthUser(userCredential.user));
        router.push('/loading')
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const createUserWithEmailAndPassword = (email, password, first, last, phone) => {
    const auth = firebase.auth();
    firebase.createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        axios.post('localhost:3001/user', {
          first_name: first,
          last_name: last,
          email,
          phone_num: phone,
        })
          .then(() => console.log('user created'))
          .catch((err) => console.log('error', err));
        router.push('/loading');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOut = () => {
    firebase.auth().signOut().then(clear);
  };

  const signInWithGoogle = () => {
    const auth = firebase.auth();
    const provider = new firebase.GoogleAuthProvider();
    firebase.signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        router.push('/loading')
      })
      .catch((err) => console.log(err));
  }

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
    signInWithGoogle,
  };
}
