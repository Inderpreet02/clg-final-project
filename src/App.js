import React, { useEffect } from 'react';
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
  Route,
  useHistory
} from "react-router-dom";
import { Box } from './components/Box';
import { Canvas } from '@react-three/fiber';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN, LOGOUT, selectUser } from './features/userSlice';
import { auth } from './firebase';



function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // const user = true;


  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(LOGIN({
          name: userAuth.user.displayName,
          email: userAuth.user.email,
          uid: userAuth.user.uid,
        }))

        history.push("/");
      } else {
        dispatch(LOGOUT());
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
      <>
      {!user ? (
          <div className="app__login">
              <Header/>
              <Login/>
          </div>
        ) : (
        <Switch>
          <Route path="/checkout">
            <Header/>
            <TestCheckout />
          </Route>
          <Route path="/login">
            <Header/>
            <Login/>
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
        )
      }
      </>
    </Router>

     
    </div>
  );
}

export default App;
