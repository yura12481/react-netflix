import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPageLayout from './layouts/MainPageLayout';
import SignInLayout from './layouts/SignInLayout';


function App() {
  return (
    <Routes>
      <Route path='/' element={<SignInLayout />} />
      <Route path='/sign-in' element={<SignInLayout />} />
      <Route path='/main-netflix' element={<MainPageLayout />} />
    </Routes>
  );
}

export default App;
