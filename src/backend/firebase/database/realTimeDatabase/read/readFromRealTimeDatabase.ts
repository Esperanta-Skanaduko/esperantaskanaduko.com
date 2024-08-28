import { DatabaseReference, ref } from 'firebase/database';
import RealTimeDatabase from '../realTimeDatabase';
/**
 * @description
 * use this when you want to read from a path in the real time database
 * @example
 * onValue(stream, snapshot => {
    const data = snapshot.val();
  });
 * @documentation https://firebase.google.com/docs/database/web/read-and-write#web_value_events
 */

const ReadStreamFromRealTimeDatabase = async (path: string) => {
  const stream: DatabaseReference = ref(RealTimeDatabase, path);
  return stream;
};

export default ReadStreamFromRealTimeDatabase;
