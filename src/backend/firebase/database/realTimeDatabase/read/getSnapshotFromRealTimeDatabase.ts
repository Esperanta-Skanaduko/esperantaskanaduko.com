import { DataSnapshot, DatabaseReference, get, ref } from 'firebase/database';
import RealTimeDatabase from '../realTimeDatabase';

function removeDoubleQuotes(input: string): string {
  return input.replace(/"/g, '');
}

const GetSnapshotFromRealTimeDatabase = async (path: string): Promise<DataSnapshot> => {
  path = removeDoubleQuotes(path);
  const stream: DatabaseReference = ref(RealTimeDatabase, path);
  let snapshot: DataSnapshot | null = null;
  await get(stream)
    .then(retrievedSnapshot => {
      snapshot = retrievedSnapshot;
    })
    .catch(error => {
      console.error(error);
    });
  if (!snapshot) throw new Error('No snapshot was retrieved from the real time database');
  return snapshot;
};

export default GetSnapshotFromRealTimeDatabase;
