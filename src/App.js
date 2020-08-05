import React from 'react';
import firebase from './firebase';
import './App.css';


function App() {
  // firebase messaging
  const messaging = firebase.messaging();
  messaging.requestPermission().then(() => {
    return messaging.getToken()
  }).then((token) => {
      console.log('token',token);
  })
  // firebase
  return (
    <div className="App">
     hello world
    </div>
  );
}

export default App;
