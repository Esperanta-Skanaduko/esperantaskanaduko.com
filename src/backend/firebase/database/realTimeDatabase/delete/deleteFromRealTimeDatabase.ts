import { DatabaseReference, ref, remove } from 'firebase/database';
import RealTimeDatabase from '../realTimeDatabase';

const DeleteFromRealTimeDatabase = async (args: { path: string }): Promise<void> => {
  const { path } = args;
  const reference: DatabaseReference = ref(RealTimeDatabase, path);
  await remove(reference);
};

export default DeleteFromRealTimeDatabase;
