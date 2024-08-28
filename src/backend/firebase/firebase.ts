import { FirebaseApp, initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';

const Firebase = (): FirebaseApp => initializeApp(firebaseConfig);

export default Firebase;
