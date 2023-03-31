import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Info from "./components/Information/infromation";
import Filter from "./components/filters/filter";
import LoginHome from "./components/LoginHome/LoginHome";
import Profile from "./components/Profile/profile";

function App() {
  return (
    <HashRouter>
     
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/info" exact element={<Info />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/LoginHome" element={<LoginHome />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/" element={<Filter/>} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;