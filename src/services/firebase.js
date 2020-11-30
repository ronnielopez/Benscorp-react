import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBKEIHt2ywvZQ99rnX5twIJhhZcoPutwpo",
    authDomain: "benscorp-fc694.firebaseapp.com",
    databaseURL: "https://benscorp-fc694.firebaseio.com",
    projectId: "benscorp-fc694",
    storageBucket: "benscorp-fc694.appspot.com",
    messagingSenderId: "704847668270",
    appId: "1:704847668270:web:a37a856638204c43486bbf",
    measurementId: "G-5KYR2Y8ZDP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  export const auth = firebase.auth();