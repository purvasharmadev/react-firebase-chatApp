import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import App from "./App";

firebase.initializeApp({
  apiKey: "AIzaSyAf4s0pQcAmq5A_RnP-RXk-C-2daNonBts",
  authDomain: "chat-app-21e8c.firebaseapp.com",
  projectId: "chat-app-21e8c",
  storageBucket: "chat-app-21e8c.appspot.com",
  messagingSenderId: "116565176171",
  appId: "1:116565176171:web:c1b3c0cc61baff5492e62e"
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
