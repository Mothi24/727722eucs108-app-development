import React, { createContext, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ProfileCard from "./components/ProfileCard";



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
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
