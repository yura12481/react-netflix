import React from 'react'
import Footer from './Footer/Footer'
import Form from './Form/Form'
import Header from './Header/Header'
import style from './SignIn.module.css'

const SignIn = () => {
  return (
    <div className={style.authWrapper}>
      <Header />
      <Form />
      <Footer />
    </div>
  )
}

export default SignIn