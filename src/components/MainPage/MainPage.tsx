import React from 'react';
import InfoBlock from './InfoBlock/InfoBlock';
import MainHeader from './MainHeader/MainHeader';
import style from './MainPage.module.css';

const MainPage = () => {
  return (
    <>
      <div className={style.authWrapper}>
        <MainHeader />
        <InfoBlock />
      </div>
    </>
  )
}

export default MainPage;