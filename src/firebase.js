import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4FgqQYeXQbjxamg3Yf3NkIuDEVyySlsY",
  authDomain: "whatsapp-app-8261c.firebaseapp.com",
  projectId: "whatsapp-app-8261c",
  storageBucket: "whatsapp-app-8261c.appspot.com",
  messagingSenderId: "127778335241",
  appId: "1:127778335241:web:f117e4db6fdaa821b726d8",
  measurementId: "G-GYPELCCGSS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
