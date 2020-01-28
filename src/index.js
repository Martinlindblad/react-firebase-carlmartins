import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBpHvmoqbMbMWNuyr0HMbj_YoLK5XH1Few",
    authDomain: "react-firebase-carlmartins.firebaseapp.com",
    databaseURL: "https://react-firebase-carlmartins.firebaseio.com",
    projectId: "react-firebase-carlmartins",
    storageBucket: "react-firebase-carlmartins.appspot.com",
    messagingSenderId: "233891059580",
    appId: "1:233891059580:web:fb179b0a92d6ed7f9876f9"
  };
firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
