import React from 'react';
import SignIn from '../auth/SignIn';
import Footer from '../components/Footer';
import Header from '../components/Header';
import style from './SignInLayout.module.css';

const SignInLayout: React.FC = () => {
  return (
    <div className={style.signInWrapper}>
      <Header />
      <SignIn />
      <Footer />
    </div>
  );
};

export default SignInLayout;
