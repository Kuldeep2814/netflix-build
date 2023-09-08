// import firebase from 'firebase'; (this is not correct way)
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcAzuK8xSAoyCf2SwhGbulzX0hydCw_HE",
  authDomain: "netflix-build-new-6d836.firebaseapp.com",
  projectId: "netflix-build-new-6d836",
  storageBucket: "netflix-build-new-6d836.appspot.com",
  messagingSenderId: "262964261565",
  appId: "1:262964261565:web:860b38679a6c539a39fdd4"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;