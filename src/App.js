import React from 'react';
import './App.css';
import Favorites from './components/Favorites';
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Favorites/>
    </div>
  );
}

export default App;
