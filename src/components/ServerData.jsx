import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDoc } from "firebase/firestore";

async function ServerData() {
    //firebase init
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
    const db = getFirestore(app);
    const querySnapshot = await getDoc(collection(db, "chapterOne"));
     querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().verse2}`);
    })

    return (
        <div>
            
        </div>
    )
}

export default ServerData;