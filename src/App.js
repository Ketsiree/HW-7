import React, { Component } from 'react';       //import for react 
import firebase from 'firebase/app';            //for firebase 
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './App.css';      // Styles for decorate you webpage    


const firebaseConfig = {              // Initialize Firebase
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};


firebase.initializeApp(firebaseConfig);

class SignInScreen extends Component {
  render() {
    return (
      <div className="container">
        <h1>FirebaseUI-React</h1>
        <h1> with Firebase Authentication</h1>
      </div>
    );
  }
}

export default SignInScreen;


