import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Dashboard from "./components/Dashboard";
import LoginForm from './components/LoginForm';
import Favorites from './components/home/Favorites';

function AppRouter() {
  return (
    <div>

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path='/Favorite' element={<Favorites/>}/>

        </Routes>

    </div>
  );
}

export default AppRouter;
