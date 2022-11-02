import React from 'react';
import SignIn from './components/Auth/SignIn/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/auth/sign-in' element={<SignIn />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
