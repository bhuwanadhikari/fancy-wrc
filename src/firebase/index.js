import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
    measurementId: "G-GDS8LF1MEK"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}