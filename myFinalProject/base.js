import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCvk1tcOc8NPIwFSbof6wPn8WUdG1alYpg",
    authDomain: "mydictionary-214014.firebaseapp.com",
    databaseURL: "https://mydictionary-214014.firebaseio.com",
    projectId: "mydictionary-214014",
    storageBucket: "mydictionary-214014.appspot.com",
    messagingSenderId: "265836455803"
  };


export const fire = firebase.initializeApp(config);
export const connectRef = firebase.database().ref("1/content")