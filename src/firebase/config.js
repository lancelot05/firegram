  import * as firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  import 'firebase/auth';

  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCeSIE8FvC2CglpQHQL_wex0A-eFEkG8JM",
    authDomain: "lancelot-firegram.firebaseapp.com",
    databaseURL: "https://lancelot-firegram.firebaseio.com",
    projectId: "lancelot-firegram",
    storageBucket: "lancelot-firegram.appspot.com",
    messagingSenderId: "319357398200",
    appId: "1:319357398200:web:3c1e2f2a0f13e9a4e9184d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectAuth = firebase.auth();
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, projectAuth, timestamp };