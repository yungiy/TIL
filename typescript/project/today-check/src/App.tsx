import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './page/SignUp';
import SignIn from './page/SignIn';
import Home from './page/Home';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />  
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />
  </Routes>
  );
}

export default App;