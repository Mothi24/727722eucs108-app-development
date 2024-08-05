import React, { createContext, useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ProfileCard from "./components/ProfileCard";
import Buy from "./components/user_utils/pages/Buy";
import { ClothProvider } from "./components/contexts/ClothData";
import axios from "axios";
import Rent from "./components/user_utils/pages/Rent";
import Swap from "./components/user_utils/pages/Swap";
import { CartProvider } from "./components/contexts/CartContext";
import Cart from "./components/cart_utils/Cart";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDoV-Jt1fUplGShfYdo6adc8fnlfyHlZk",
  authDomain: "fashion-forward-e289e.firebaseapp.com",
  projectId: "fashion-forward-e289e",
  storageBucket: "fashion-forward-e289e.appspot.com",
  messagingSenderId: "1064462410590",
  appId: "1:1064462410590:web:7d597dc24063dca32525cf"
};

export const fbApp = initializeApp(firebaseConfig)
export const UserContext = createContext();

function App() {


  const [userData, setUserData] = useState({
    isLoggedIn: false,
    isAdmin: false,
    name: '',
    email: '',
    age: ''
  })



  return (
    <>
      <UserContext.Provider value={{ userData, setUserData }}>
        <ClothProvider>
          <CartProvider>
            <Router>
              <Routes>
                <Route path='/login' element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<Home />} />
                <Route path='/buy' element={<Buy />} />
                <Route path='/rent' element={<Rent />} />
                <Route path='/swap' element={<Swap />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Router>
          </CartProvider>
        </ClothProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
