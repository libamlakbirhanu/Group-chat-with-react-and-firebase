import firebase from 'firebase/app';
import 'firebase/auth';

export default function Signin() {
	const auth = firebase.auth();
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return (
		<button className="sign-in" onClick={signInWithGoogle}>
			Signin
		</button>
	);
}
