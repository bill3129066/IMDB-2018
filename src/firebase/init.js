  // Initialize Firebase
import firebase from 'firebase'
import firestore from 'firebase/firestore'

  var config = {
    apiKey: "AIzaSyCY_8W_g3aILwX93JKmZQDQ5HIDqccbUJ4",
    authDomain: "database-78b82.firebaseapp.com",
    databaseURL: "https://database-78b82.firebaseio.com",
    projectId: "database-78b82",
    storageBucket: "database-78b82.appspot.com",
    messagingSenderId: "606141614636"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})

  // export firestore database
  export default firebaseApp.firestore()