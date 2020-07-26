import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCfO-j8nK64RGhBpsEKNBFMXO3qK-QcqXE",
    authDomain: "crown-db-c054b.firebaseapp.com",
    databaseURL: "https://crown-db-c054b.firebaseio.com",
    projectId: "crown-db-c054b",
    storageBucket: "crown-db-c054b.appspot.com",
    messagingSenderId: "617918575788",
    appId: "1:617918575788:web:d77396a5a8c01868601b09",
    measurementId: "G-Y61TVC1LRQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;