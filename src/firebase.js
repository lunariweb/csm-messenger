import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6_YIYY-N1w5IsYSwFfqnLpDEd6gznyCE",
  authDomain: "cloud-library-messenger-cfa4f.firebaseapp.com",
  projectId: "cloud-library-messenger-cfa4f",
  storageBucket: "cloud-library-messenger-cfa4f.appspot.com",
  messagingSenderId: "99675339236",
  appId: "1:99675339236:web:64c06759c3bd84b4a56ff1",
  measurementId: "G-K9Z2196LXQ"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
  