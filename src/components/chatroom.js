import React, { useState, useRef } from "react";
import firebase from "firebase/app";
import firestore from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

function Chatroom() {
  const auth = firebase.auth();
  const dummy = useRef();
  const firestore = firebase.firestore();

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });
    setFormValue("");

    dummy.current.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <div ref={dummy}></div>
      </main>
      <form onSubmit={sendMessage}>
        <input
          placeholder="say something nice ❤"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">
          {" "}
          <span role="img">📤</span>
        </button>
      </form>
    </>
  );
}
function ChatMessage(props) {
  const auth = firebase.auth();
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "recived";
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="img.." />
      <p>{text}</p>
    </div>
  );
}

export default Chatroom;
