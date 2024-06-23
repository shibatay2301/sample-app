import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyC429tTvezc_vN427veXEK9iGek8blv3mA",
  authDomain: "myapp0304.firebaseapp.com",
  databaseURL: "https://myapp0304-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myapp0304",
  storageBucket: "myapp0304.appspot.com",
  messagingSenderId: "226854580531",
  appId: "1:226854580531:web:8de973578f7bfc3566ce46"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };