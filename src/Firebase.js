import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyCBExMX9Q-5PIdayQCTDRzsrCZk8UM11GE",
  authDomain: "fp-pweb-253d0.firebaseapp.com",
  projectId: "fp-pweb-253d0",
  storageBucket: "fp-pweb-253d0.appspot.com",
  messagingSenderId: "439956823874",
  appId: "1:439956823874:web:ee6f6f95d15db18b3172db"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
