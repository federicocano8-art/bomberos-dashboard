import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyDTXhNePjZV4DqWRkRNFnDHQUmgWe1BoE0",
  authDomain: "bomberos-ramallo.firebaseapp.com",
  projectId: "bomberos-ramallo",
  storageBucket: "bomberos-ramallo.firebasestorage.app",
  messagingSenderId: "526631464706",
  appId: "1:526631464706:web:73f13ed77fb078eaab5c1b",
  measurementId: "G-BKPDRTXK9P"
};

const app = initializeApp(firebaseConfig);

export default app;
