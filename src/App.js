import React from "react";
import "./styles.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import Chatroom from "./components/chatroom";
import SignIn from "./components/signin";
import SignOut from "./components/signout";

import { useAuthState } from "react-firebase-hooks/auth";

export default function App() {
  const auth = firebase.auth();

  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Chit-Chat</h2>
        <SignOut />
      </header>

      <section>{user ? <Chatroom /> : <SignIn />}</section>
    </div>
  );
}
