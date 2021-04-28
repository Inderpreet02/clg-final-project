import React from 'react';
import './App.css';
import Favorites from './components/Favorites';
import Header from "./components/Header";
import Main from "./components/Main";
import Wonder from "./components/Wonder";
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Favorites/>
      <Wonder/>
     
    </div>
  );
}

export default App;
