import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBk45uzjPztu72ISxkXsl4RNF8zkY2QqAo",
    authDomain: "e-ride-d3d34.firebaseapp.com",
    projectId: "e-ride-d3d34",
    storageBucket: "e-ride-d3d34.appspot.com",
    messagingSenderId: "876936998156",
    appId: "1:876936998156:web:e724dad9175eb51d546d29"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


