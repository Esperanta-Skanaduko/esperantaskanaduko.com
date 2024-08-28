import { DatabaseReference, push, ref } from 'firebase/database';
import RealTimeDatabase from '../realTimeDatabase';

const PushToRealTimeDatabase = async (args: { path: string; data: unknown }) => {
  const { path, data } = args;
  console.warn('PushToRealTimeDatabase', { path, data });
  const reference: DatabaseReference = ref(RealTimeDatabase, path);
  await push(reference, data);
};

export default PushToRealTimeDatabase;
