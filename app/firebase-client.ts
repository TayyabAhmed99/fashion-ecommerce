import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDXHyYRxUaP9EqeYPEy8pZjPl9OL1JUbw0",
  authDomain: "ecommerce-website-40f99.firebaseapp.com",
  projectId: "ecommerce-website-40f99",
  storageBucket: "ecommerce-website-40f99.appspot.com",
  messagingSenderId: "172367249276",
  appId: "1:172367249276:web:5cec0f7a0886dcafdbaef9",
  measurementId: "G-TLHQ6W6JMF"
};

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

// Turn off the firebase Persistence for handling this using cookies through API call.
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

export { firebase };
