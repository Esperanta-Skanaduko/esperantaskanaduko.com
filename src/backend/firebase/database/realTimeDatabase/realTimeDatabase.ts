import { Database, getDatabase } from 'firebase/database';
import Firebase from '../../firebase';

const RealTimeDatabase: Database = getDatabase(Firebase());

export default RealTimeDatabase;
