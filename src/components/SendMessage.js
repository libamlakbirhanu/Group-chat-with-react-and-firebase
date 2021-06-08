import firebase from 'firebase/app';
import 'firebase/auth';

export default async function SendMessage(
	e,
	value,
	author,
	messagesRef,
	updateForm,
	dummy
) {
	const auth = firebase.auth();
	e.preventDefault();

	const { uid } = auth.currentUser;

	await messagesRef.add({
		text: value,
		author: author,
		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		uid,
	});

	updateForm('');

	dummy.current.scrollIntoView({ behavior: 'smooth' });
}
