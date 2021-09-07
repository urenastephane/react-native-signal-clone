//import * as firebase from "firebase";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALln-70KLxC_IZNzhH8qzX4Mq-DqqPcLA",
  authDomain: "signal-clone-yt-build-c33f7.firebaseapp.com",
  projectId: "signal-clone-yt-build-c33f7",
  storageBucket: "signal-clone-yt-build-c33f7.appspot.com",
  messagingSenderId: "717776321943",
  appId: "1:717776321943:web:e2fbd669f3987e360118d2",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();

const auth = firebase.auth();

export { db, auth };
