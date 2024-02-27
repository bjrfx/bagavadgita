import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, get } from "firebase/firestore"; 
//import Xpose from './components/Xpose';
import { Component } from 'react';
import BhagavadGita from "./components/Bagavadgita";
class App extends Component {
  render() {
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
        <BhagavadGita />
      </header>
      
    </div>
    )
  }
}

export default App;
