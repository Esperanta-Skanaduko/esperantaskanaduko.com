import { getAnalytics } from 'firebase/analytics';
import Firebase from './firebase';

const Analytics = getAnalytics(Firebase());

export default Analytics;
