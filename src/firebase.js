import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwrcXd04zv5FB1QIhEdN9Jt2j_l2D_csM",
  authDomain: "authy-55.firebaseapp.com",
  projectId: "authy-55",
  storageBucket: "authy-55.appspot.com",
  messagingSenderId: "899528020656",
  appId: "1:899528020656:web:67c29723e992d53520e175",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
