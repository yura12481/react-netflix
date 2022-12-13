import React from 'react';
import style from './MainPageLayout.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainPage from '../components/MainPage';

const MainPageLayout: React.FC = () => {
  return (
    <div className={style.mainPageWrapper}>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};

export default MainPageLayout;
