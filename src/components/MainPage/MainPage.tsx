import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import style from './MainPage.module.css'

const MainPage = () => {
  return (
    <>
      <div className={style.authWrapper}>
        <MainHeader />
      </div>
    </>
  )
}

export default MainPage;