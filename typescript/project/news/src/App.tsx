import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Home from './page/Home';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
  );
}