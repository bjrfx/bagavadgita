import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore, doc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOMyoG08LF4NwYXP_vU4AAYNLWEB87ZiA",
    authDomain: "bhagavadgita-49b72.firebaseapp.com",
    projectId: "bhagavadgita-49b72",
    storageBucket: "bhagavadgita-49b72.appspot.com",
    messagingSenderId: "398958753611",
    appId: "1:398958753611:web:d3546aa170ddade75edace"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const BagavadgitaForm = () => {
  const [newData, setNewData] = useState({ audio_link: "", chapter_no: 0, chapter_name: "", language: "", purport: "", synonyms: "", traslation: "", verse_no:0 });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const colRef = collection(db, "chapterOne");
      const customDoc = doc(colRef, "verse1");
      const docRef = await addDoc(colRef, newData);
      console.log("Document written with ID:", docRef.id);
      setNewData({ audio_link: "", chapter_no: 0, chapter_name: "", language: "", purport: "", synonyms: "", traslation: "", verse_no:0 }); // Clear the form after successful submission
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Audio Link
        <input type="text" value={newData.audio_link} onChange={(e) => setNewData({ ...newData, audio_link: e.target.value })} />
      </label>
      <br />
      <label>
        Chapter Name
        <input type="text" value={newData.chapter_name} onChange={(e) => setNewData({ ...newData, chapter_name: e.target.value })} />
      </label>
      <br />
      <label>
        Chapter No:
        <input type="number" value={newData.chapter_no} onChange={(e) => setNewData({ ...newData, chapter_no: Number(e.target.value) })} />
      </label>
      <br />
      <label>
        language
        <input type="text" value={newData.language} onChange={(e) => setNewData({ ...newData, language: e.target.value })} />
      </label>
      <br />
      <label>
         Puport
        <input type="text" value={newData.purport} onChange={(e) => setNewData({ ...newData, purport: e.target.value })} />
      </label>
      <br />
      <label>
         Synonyms
        <input type="text" value={newData.synonyms} onChange={(e) => setNewData({ ...newData, synonyms: e.target.value })} />
      </label>
      <br />
      <label>
        Translation
        <input type="text" value={newData.traslation} onChange={(e) => setNewData({ ...newData, traslation: e.target.value })} />
      </label>
      <br />
      <label>
        Verse No:
        <input type="number" value={newData.verse_no} onChange={(e) => setNewData({ ...newData, verse_no: Number(e.target.value) })} />
      </label>
      <button type="submit">Add data</button>
    </form>
  );
};

export default BagavadgitaForm;
