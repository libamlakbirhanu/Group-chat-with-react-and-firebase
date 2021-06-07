import firebase from 'firebase/app';
import 'firebase/auth';

export default function Signout() {
	const auth = firebase.auth();

	return (
		auth.currentUser && <button onClick={() => auth.signOut()}>Signout</button>
	);
}
