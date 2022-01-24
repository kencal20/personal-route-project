import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB-Hm0uJgCWhiFm9VCkHa4SLCsYMeW_Odk",
  authDomain: "route-7815d.firebaseapp.com",
  projectId: "route-7815d",
  storageBucket: "route-7815d.appspot.com",
  messagingSenderId: "322532000083",
  appId: "1:322532000083:web:e8dc78937e6e6c0b85e1a6",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
