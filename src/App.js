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
import ImageSlider from "./components/ImageSlider"



function App() {

  const dispatch = useDispatch();
  // const user = useSelector(selectUser);
   const user = true;


  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(LOGIN({
          name: userAuth.user?.displayName,
          email: userAuth.user?.email,
          uid: userAuth.user?.uid,
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
            <TestProduct/>
            <Wonder/>
            <ImageSlider
              head="Shop By Category"
              src1="//cdn.allbirds.com/image/fetch/q_auto,f_auto/w_450,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/1pbT8yieU1eVm3Yhjh55vV/1"
              text1="Men's Shoes"
              src2="//cdn.allbirds.com/image/fetch/q_auto,f_auto/w_450,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/4Wbncz8ES9fi5UFwLfFuvG/1"
              text2="Women's Shoes"
              src3="//cdn.allbirds.com/image/fetch/q_auto,f_auto/w_450,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/3cSb4rkKCF5P2xyIZ63mgf/2"
              text3="Men's Apparel"
              src4="//cdn.allbirds.com/image/fetch/q_auto,f_auto/w_450,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/5x4quXFhk00DbkZGSLMoer/2"
              text4="Women's Apparel"
              src5="//cdn.allbirds.com/image/fetch/q_auto,f_auto/w_450,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/carouselCard/en-US/images/2wZcLJMBdgn9pWXt2rLChu/2"
              text5="Socks"
              src6="https://cdn-media.urby.in/media/catalog/product/cache/1/image/480x480/9df78eab33525d08d6e5fb8d27136e95/w/a/walter-leather-money-clip-wallet-jet-black-in-hand.jpg"
              text6="Men' Wallet"
              src7="https://images-na.ssl-images-amazon.com/images/I/51G9pdgv2aL.jpg"
              text7="Women's Handbag"
            />
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
