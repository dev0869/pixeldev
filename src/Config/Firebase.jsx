import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcSs_E6KBnojcuqf8Ki_rkcqMaI4DWE34",
  authDomain: "open-ai-image-generator.firebaseapp.com",
  projectId: "open-ai-image-generator",
  storageBucket: "open-ai-image-generator.appspot.com",
  messagingSenderId: "345772747904",
  appId: "1:345772747904:web:08054034aae291f2c94a65"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)