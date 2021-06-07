import { useState, useRef } from 'react';
import firebase from 'firebase/app';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import 'firebase/firestore';

import ChatMessage from './ChatMessage';
import SendMessage from './SendMessage';
import Signout from './Signout';

export default function ChatRoom() {
	const [formValue, setFormValue] = useState('');

	const firestore = firebase.firestore();

	const messagesRef = firestore.collection('messages');
	const query = messagesRef.orderBy('createdAt').limit(25);

	const [messages] = useCollectionData(query, { idField: 'id' });

	const dummy = useRef();

	return (
		<>
			<header>
				<h1 className="Logo">Dirty talk</h1>
				<Signout />
			</header>
			<main>
				{messages &&
					messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
				<div ref={dummy}></div>
			</main>
			<form
				onSubmit={(e) =>
					SendMessage(e, formValue, messagesRef, setFormValue, dummy)
				}
			>
				<input
					value={formValue}
					onChange={(e) => setFormValue(e.target.value)}
				/>
				<button type="submit">✈</button>
			</form>
		</>
	);
}
