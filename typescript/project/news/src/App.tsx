import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Home from './page/Home';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home Kr='한국 뉴스' Us='미국 뉴스' Fr='프랑스 뉴스' />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
  );
}