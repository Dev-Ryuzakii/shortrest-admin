import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/pages/(auth)/sign-in.jsx';
import SignUp from './components/pages/(auth)/sign-up.jsx';
import Recover from './components/pages/(auth)/recover.jsx';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path='/forget-password' element={<Recover />} />
    </Routes>
  );
};

export default App;
