import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 
//import Xpose from './components/Xpose';


  async function fireData() {
    //firebase
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

const querySnapshot = await getDocs(collection(db, "chapterOne"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().synonyms}`);
    })

  }
 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {/* <Xpose /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
