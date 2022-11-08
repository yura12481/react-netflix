import React from 'react';
import SignIn from './components/Auth/SignIn/SignIn';
import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import style from './App.module.css'

function App() {
  return (
    <div className={style.authWrapper}>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/main-netflix' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
