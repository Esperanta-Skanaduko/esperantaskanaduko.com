import { FirebasePerformance, getPerformance } from 'firebase/performance';
import Firebase from '../firebase';

const Performance: FirebasePerformance = getPerformance(Firebase());

export default Performance;
