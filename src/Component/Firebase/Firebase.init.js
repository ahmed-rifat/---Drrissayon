// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx1D3L0xohYeuCqKO74zIm8M81qQaROIE",
  authDomain: "drrissayon-2e22d.firebaseapp.com",
  projectId: "drrissayon-2e22d",
  storageBucket: "drrissayon-2e22d.appspot.com",
  messagingSenderId: "637488497483",
  appId: "1:637488497483:web:8f5d63ac964f01d3ad1ece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;