import React from "react";
import firebase from "firebase/app";
// import "firebase/firestore";
import "firebase/auth";

function SignIn() {
  const auth = firebase.auth();

  const signInWitheGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    console.log(provider);
  };
  return <button onClick={signInWitheGoogle}>Sign with Google</button>;
}

export default SignIn;
