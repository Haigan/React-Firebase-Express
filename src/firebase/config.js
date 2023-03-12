import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe6ggUl_pJkCcCSLoQXEY8kPEC3U0U18U",
  authDomain: "miniblog-2f58a.firebaseapp.com",
  projectId: "miniblog-2f58a",
  storageBucket: "miniblog-2f58a.appspot.com",
  messagingSenderId: "809548615301",
  appId: "1:809548615301:web:54396574baec5bf51023ec",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
