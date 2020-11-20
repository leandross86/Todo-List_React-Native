import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyDBVcKJEjm_T5wzvECZGrvTrkLtoQgcRe8",
  authDomain: "todolist-8b67e.firebaseapp.com",
  databaseURL: "https://todolist-8b67e.firebaseio.com",
  projectId: "todolist-8b67e",
  storageBucket: "todolist-8b67e.appspot.com",
  messagingSenderId: "742171210585",
  appId: "1:742171210585:web:299178b1ef3ac902db1248",
  measurementId: "G-LDH9KVC3F6"
};
// Initialize Firebase
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase