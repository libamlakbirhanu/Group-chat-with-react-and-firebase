import './App.css';
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import Signin from './components/Signin';
import ChatRoom from './components/ChatRoom';

firebase.initializeApp({
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
	measurementId: process.env.REACT_APP_measurementId,
});

const auth = firebase.auth();

export default function App() {
	const [user] = useAuthState(auth);

	return <div className="App">{user ? <ChatRoom /> : <Signin />}</div>;
}
