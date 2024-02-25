import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

function GeethaFirebase() {
    //Config
    const firebaseConfig = {
        apiKey: "AIzaSyDOMyoG08LF4NwYXP_vU4AAYNLWEB87ZiA",
  authDomain: "bhagavadgita-49b72.firebaseapp.com",
  projectId: "bhagavadgita-49b72",
  storageBucket: "bhagavadgita-49b72.appspot.com",
  messagingSenderId: "398958753611",
  appId: "1:398958753611:web:d3546aa170ddade75edace"
    };
    //Initialize Firebase
    const app = initializeApp(firebaseConfig);

    //Initialize cloud Firestore and get a reference to the service
    const db = getFirestore(app);
}

export default GeethaFirebase;