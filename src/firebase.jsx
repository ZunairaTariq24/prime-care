// src/firebase.jsx
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBTsjwYrp3BxRxKbitmo6-mvK4KCa8Ue_Y',
  authDomain: 'prime-care-site.firebaseapp.com',
  projectId: 'prime-care-site',
  storageBucket: 'prime-care-site.firebasestorage.app',
  messagingSenderId: '588624897226',
  appId: '1:588624897226:web:4e42494623684b3bbc0033',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
