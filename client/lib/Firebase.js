import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// Firebase credentials based on Zadok's firebase account... you will need to get his api keys
const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};
// if a Firebase instance doesn't exist, create one

const firebase = initializeApp(FirebaseCredentials);
firebase.auth = getAuth;
firebase.onAuthStateChanged = onAuthStateChanged;
firebase.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
firebase.signInWithEmailAndPassword = signInWithEmailAndPassword;
firebase.updateProfile = updateProfile;
// this will export a connection to an instance of firebase to the files that need it.
export default firebase;
