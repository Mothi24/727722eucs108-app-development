import React, { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from "./components/SignUp";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
