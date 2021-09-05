import { useState, useEffect, useContext } from 'react';
import firebase from './Firebase';
import { useRouter } from 'next/router';
import FaveContext from '../components/FaveContext';
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
  const { savedProviders, changeSavedProviders} = useContext(FaveContext);
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
        console.log('prov-len', savedProviders)
          axios.put('http://localhost:3001/user', {
            email: userCredential.user.email,
            providers: savedProviders
          })
            .then((results) => {
              console.log('saved providers',results.data.newProviders);
              changeSavedProviders(results.data.newProviders);
            })
            .catch(() => console.log('bro'));

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
        console.log(userCredential.user.uid, first, last, email, phone);
        axios.post('http://localhost:3001/user', {
          id: userCredential.user.uid,
          first_name: first,
          last_name: last,
          email,
          phone_num: phone,
          providers: savedProviders
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
        console.log(result);
        if (savedProviders.length) {
          axios.put(`/user/${result.user.uid}`, {
            email: result.user.email,
            providers: savedProviders
          })
            .then((results) => {
              console.log('saved providers', results.data);

              changeSavedProviders(results.data.providers);
            })
            .catch(() => console.log('bro'));
        }
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
