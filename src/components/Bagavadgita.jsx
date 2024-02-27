import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDoc, get, doc } from "firebase/firestore";

//config
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

//Component 
const BagavadGita = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const docRef = doc(collection(db, "chapterOne"), "verse2");
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists) {
            setData(docSnap.data());
          } else {
            console.log("No such document!");
          }
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (isLoading) return <p>Loading...</p>;
  
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <div>
        <h1>Name: {data.chapter_name}</h1>
        <p>Puport: {data.purport}</p>
      </div>
    );
  };

  export default BagavadGita;



























