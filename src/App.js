import React from 'react';
import './App.css';
import Favorites from './components/Favorites';
import Header from "./components/Header";
import Main from "./components/Main";
import Wonder from "./components/Wonder";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  return (
    <div className="App">
      {/* <Router>
      <>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router> */}



      <Header/>
      <Main/>
      <Favorites/>
      <Wonder/>
     
    </div>
  );
}

export default App;
