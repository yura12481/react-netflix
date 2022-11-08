import React from 'react'
import Footer from './Footer/Footer'
import FormAuth from './Form/FormAuth'
import Header from './Header/Header'

const SignIn = () => {
  return (
    <div className='sign-in'>
      <Header />
      <FormAuth />
      <Footer />
    </div>
  )
}

export default SignIn