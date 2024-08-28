import { getFirestore } from 'firebase/firestore';
import Firebase from '../../firebase';

const FireStoreDatabase = getFirestore(Firebase());

export default FireStoreDatabase;
