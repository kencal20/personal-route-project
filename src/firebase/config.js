import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCupQKkzT4tAzxGtp0UAVZ0kYVlaQVr1BI",
  authDomain: "personal-project-72adf.firebaseapp.com",
  projectId: "personal-project-72adf",
  storageBucket: "personal-project-72adf.appspot.com",
  messagingSenderId: "682976957545",
  appId: "1:682976957545:web:5dc2981b5afe55421bbef8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
