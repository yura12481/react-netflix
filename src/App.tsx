import React from 'react';
import SignIn from './components/Auth/SignIn/SignIn';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
  );
}

export default App;
