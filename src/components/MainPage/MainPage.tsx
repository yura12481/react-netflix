import React from 'react';
import AnimationBlock from './AnimationBlock/AnimationBlock';
import InfoBlock from './InfoBlock/InfoBlock';
import MainHeader from './MainHeader/MainHeader';
import style from './MainPage.module.css';

const MainPage = () => {
  return (
    <>
      <div className={style.mainWrapper}>
        <MainHeader />
        <InfoBlock />
      </div>
      <div className={style.secondaryWrapper}>
        <AnimationBlock />
      </div>
    </>
  )
}

export default MainPage;