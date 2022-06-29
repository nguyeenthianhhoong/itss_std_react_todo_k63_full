import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqt9HIjMZLKcGatloNC12f_Wc_7R2CcQ8",
  authDomain: "fir-sample-4f3c6.firebaseapp.com",
  projectId: "fir-sample-4f3c6",
  storageBucket: "fir-sample-4f3c6.appspot.com",
  messagingSenderId: "202286968628",
  appId: "1:202286968628:web:b3c8fb37d9a7d35dad3f61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);