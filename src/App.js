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



export const UserContext = createContext();


function App() {



  const [userData, setUserData] = useState({
    isLoggedIn: false,
    isAdmin: true,
    name: '',
    email: '',
    age: ''
  })



  return (
    <>
      <UserContext.Provider value={{ userData, setUserData }}>
        <ClothProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route path='/buy' element={<Buy />} />
              <Route path='/rent' element={<Rent />} />
              <Route path='/swap' element={<Swap />} />
            </Routes>
          </Router>
        </ClothProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
