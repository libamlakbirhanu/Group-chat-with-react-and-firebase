import './App.css';
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import Signin from './components/Signin';
import ChatRoom from './components/ChatRoom';

firebase.initializeApp({
	apiKey: 'AIzaSyAbqXxAI3NKI2l64_tjjKG0IwL0iqACCYg',
	authDomain: 'react-with-firebase-913fb.firebaseapp.com',
	projectId: 'react-with-firebase-913fb',
	storageBucket: 'react-with-firebase-913fb.appspot.com',
	messagingSenderId: '305595907358',
	appId: '1:305595907358:web:5e7ef7d7588198f9cc1d0f',
	measurementId: 'G-W8QK5E0705',
});

const auth = firebase.auth();

export default function App() {
	const [user] = useAuthState(auth);

	return <div className="App">{user ? <ChatRoom /> : <Signin />}</div>;
}
