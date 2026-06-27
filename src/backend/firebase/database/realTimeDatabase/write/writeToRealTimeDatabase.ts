import { DatabaseReference, ref, set } from 'firebase/database';
import RealTimeDatabase from '../realTimeDatabase';

const WriteToRealTimeDatabase = async (args: { path: string; data: unknown }): Promise<boolean> => {
  const { path, data } = args;
  const reference: DatabaseReference = ref(RealTimeDatabase, path);
  try {
    await set(reference, data);
    return true;
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('Error writing to real-time database: ', error);
    }
    return false;
  }
};

export default WriteToRealTimeDatabase;
