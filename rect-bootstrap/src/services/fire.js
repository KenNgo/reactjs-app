// Initialize Firebase
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBh54AUFLIn7J4RW91iBZx0nNQ_LOllyEw",
    authDomain: "react-firebase-a780f.firebaseapp.com",
    databaseURL: "https://react-firebase-a780f.firebaseio.com",
    projectId: "react-firebase-a780f",
    storageBucket: "react-firebase-a780f.appspot.com",
    messagingSenderId: "299891148025"
  };
const fire = firebase.initializeApp(config);
export default fire;