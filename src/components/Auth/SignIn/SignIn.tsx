import React from 'react';
import Footer from './Footer/Footer';
import FormAuth from './Form/FormAuth';
import Header from './Header/Header';
import style from './SignIn.module.css';

const SignIn = () => {
  return (
    <div className={style.authWrapper}>
      <Header />
      <FormAuth />
      <Footer />
    </div>
  )
}

export default SignIn