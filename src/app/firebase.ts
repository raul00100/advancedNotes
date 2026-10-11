import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCLGr10EvQVC4Cp1SBunlxrSUa6H23gjY',
  authDomain: 'notesadvanced-9c672.firebaseapp.com',
  projectId: 'notesadvanced-9c672',
  storageBucket: 'notesadvanced-9c672.firebasestorage.app',
  messagingSenderId: '338145931593',
  appId: '1:338145931593:web:0b6cdcfab5d4dfc49cea98',
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

// did not set the auth methods because it is educational project
