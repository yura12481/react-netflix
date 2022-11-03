import React from 'react'
import Form from './Form/Form'
import Header from './Header/Header'
import style from './SignIn.module.css'

const SignIn = () => {
  return (
    <div className={style.authWrapper}>
      <Header/>
      <Form/>
    </div>
  )
}

export default SignIn