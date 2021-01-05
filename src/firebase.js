import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB69CjyX63U47uo5o63bekbYH2x8TGJtwY",
  authDomain: "ecommerce-27b64.firebaseapp.com",
  databaseURL: "https://ecommerce-27b64-default-rtdb.firebaseio.com",
  projectId: "ecommerce-27b64",
  storageBucket: "ecommerce-27b64.appspot.com",
  messagingSenderId: "480147397679",
  appId: "1:480147397679:web:b7493c4a9f008635923ada"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
