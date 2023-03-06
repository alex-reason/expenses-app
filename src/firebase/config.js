import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD7Ul1_9-uNvhPpTfNE1TG67X7vgwAyxTU",
    authDomain: "finance-tracker-68266.firebaseapp.com",
    projectId: "finance-tracker-68266",
    storageBucket: "finance-tracker-68266.appspot.com",
    messagingSenderId: "529233377635",
    appId: "1:529233377635:web:6cc68566ff4c462d9fbb56"
};

//initialize firebase
initializeApp(firebaseConfig);

// initialize firestore and auth
const db = getFirestore();
const auth = getAuth();


export { db, auth};
