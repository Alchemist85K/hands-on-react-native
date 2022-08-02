import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../env';

export const initFirebase = () => {
  return initializeApp(firebaseConfig);
};
