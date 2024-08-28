import { ref, remove } from 'firebase/database';
import RealTimeDatabase from '../realTimeDatabase';

const DeleteFromRealTimeDatabase = async (path: string): Promise<void> => {
  await remove(ref(RealTimeDatabase, path));
};

export default DeleteFromRealTimeDatabase;
