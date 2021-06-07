import firebase from 'firebase/app';
import 'firebase/auth';

export default function ChatMessage(props) {
	const auth = firebase.auth();
	const { text, uid } = props.message;
	const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

	return (
		<>
			<div className={`message ${messageClass}`}>
				<div>
					<span>{auth.currentUser.displayName.split(' ')[0]}</span>
					<p>{text}</p>
				</div>
			</div>
		</>
	);
}
