import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCvk1tcOc8NPIwFSbof6wPn8WUdG1alYpg",
  authDomain: "mydictionary-214014.firebaseapp.com",
  databaseURL: "https://mydictionary-214014.firebaseio.com",
  projectId: "mydictionary-214014",
  storageBucket: "mydictionary-214014.appspot.com",
  messagingSenderId: "265836455803"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('1/content');
export const userDataRef = firebase.database().ref('0/userData');
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();

