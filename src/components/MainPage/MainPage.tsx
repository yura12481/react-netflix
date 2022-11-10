import React from 'react';
import AnimationBlock from './AnimationBlock/AnimationBlock';
import Footer from './Footer/Footer';
import InfoBlock from './InfoBlock/InfoBlock';
import MainHeader from './MainHeader/MainHeader';
import style from './MainPage.module.css';
import Questions from './Questions/Questions';

const MainPage = () => {
  return (
    <>
      <div className={style.mainWrapper}>
        <MainHeader />
        <InfoBlock />
      </div>
      <div className={style.secondaryWrapper}>
        <AnimationBlock />
        <Questions />
        <Footer />
      </div>
    </>
  )
}

export default MainPage;