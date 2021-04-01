import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZ4Heg3KaTdFI1lAWAe6Yue64TpwpuD7M",
  authDomain: "discord-clone-49439.firebaseapp.com",
  projectId: "discord-clone-49439",
  storageBucket: "discord-clone-49439.appspot.com",
  messagingSenderId: "215258919907",
  appId: "1:215258919907:web:e787a6b7f8603b4776a6d6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
