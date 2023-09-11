import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase';
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAbWKwfMMHv-0TjN7Qg7k--5mTUGIfRg9Q",
  authDomain: "olx-react-app-1c6fc.firebaseapp.com",
  projectId: "olx-react-app-1c6fc",
  storageBucket: "olx-react-app-1c6fc.appspot.com",
  messagingSenderId: "135285449274",
  appId: "1:135285449274:web:7d397d831699b7fd9ecb03",
  measurementId: "G-RRMXDE0G02"
};

export default firebase.initializeApp(firebaseConfig)