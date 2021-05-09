import React from 'react';
import './App.css';
import Favorites from './components/Favorites';
import Header from "./components/Header";
import Main from "./components/Main";
import TestCheckout from './components/TestCheckout';
import TestProduct from './components/TestProduct';
import Wonder from "./components/Wonder";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Box } from './components/Box';
import { Canvas } from '@react-three/fiber';



function App() {
  return (
    <div className="App">
      <Router>
      <>
        <Switch>
          <Route path="/checkout">
            <Header/>
            <TestCheckout />
          </Route>
          <Route path="/animate">
            <Canvas camer={{ position: [-10, -10, -10], fov: 35}}>
              <ambientLight/>
              <pointLight position={[-10, 10, -10]} castShadow/>
              {[-3, 0, 3].map((x) =>
                [-3, 0, 3].map((z) => <Box position={[x, -3, z]}/>
                ))
              }
            </Canvas>
          </Route>
          <Route path="/">
            <Header/>
            <Main/>
            <Favorites/>
            <Wonder/>
            <TestProduct/>
          </Route>
        </Switch>
      </>
    </Router>

     
    </div>
  );
}

export default App;
