import './App.css';
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import Signin from './components/Signin';
import ChatRoom from './components/ChatRoom';

firebase.initializeApp({
	apiKey: process.env.apiKey,
	authDomain: process.env.authDomain,
	projectId: process.env.projectId,
	storageBucket: process.env.storageBucket,
	messagingSenderId: process.env.messagingSenderId,
	appId: process.env.appId,
	measurementId: process.env.measurementId,
});

const auth = firebase.auth();

export default function App() {
	const [user] = useAuthState(auth);

	return <div className="App">{user ? <ChatRoom /> : <Signin />}</div>;
}
