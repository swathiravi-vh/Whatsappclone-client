import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTaQg7awkhwF3QNbxjPo643RWShnklh8k",
  authDomain: "mernwhatsappclone.firebaseapp.com",
  projectId: "mernwhatsappclone",
  storageBucket: "mernwhatsappclone.appspot.com",
  messagingSenderId: "732669348236",
  appId: "1:732669348236:web:e89b101423db95d593aea9",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth, provider };
