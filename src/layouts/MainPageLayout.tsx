import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainPage from '../components/MainPage';
import style from './MainPageLayout.module.css'

const MainPageLayout = () => {
  return (
    <>
      <div className={style.background}>
        <Header />
        <MainPage />
        <Footer/>
      </div>
    </>
  )
}

export default MainPageLayout;