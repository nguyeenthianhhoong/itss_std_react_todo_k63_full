import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAqt9HIjMZLKcGatloNC12f_Wc_7R2CcQ8",
//   authDomain: "fir-sample-4f3c6.firebaseapp.com",
//   projectId: "fir-sample-4f3c6",
//   storageBucket: "fir-sample-4f3c6.appspot.com",
//   messagingSenderId: "202286968628",
//   appId: "1:202286968628:web:b3c8fb37d9a7d35dad3f61"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAG5xDsv_I3W3sNAqInzBHOh7FSTFHZ6CE",
  authDomain: "fir-2-8ac9a.firebaseapp.com",
  projectId: "fir-2-8ac9a",
  storageBucket: "fir-2-8ac9a.appspot.com",
  messagingSenderId: "852986413487",
  appId: "1:852986413487:web:50707b278c9a4ac315ef5a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
}; 