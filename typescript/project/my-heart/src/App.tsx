import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './page/SignUp';
import SignIn from './page/SignIn';
import Home from './page/Home';
import Message from './page/Message';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />  
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/message" element={<Message />} />
  </Routes>
  );
}

export default App;