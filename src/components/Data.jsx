import { Component } from "react";
import GeethaFirebase from "../server/GeethaFireBase";
import { collection, getDocs } from "firebase/firestore"; 
import {db} from "../server/GeethaFireBase";

async function firebasedata() {
    GeethaFirebase();
    const dataBase = db;
    const querySnapshot = await getDocs(collection(dataBase, "chapterOne"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    })
}

class Data extends Component {
    render() {
        return (
            <div>
                <h1>Data</h1>
                {firebasedata()}
            </div>
        )
    }
}

export default Data;