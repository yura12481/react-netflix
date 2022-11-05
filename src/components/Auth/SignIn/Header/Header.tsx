import React from 'react'
import Box from '@mui/material/Box';
import logo from './img/header-logo.png'

const Header = () => {
  return (
    <Box component='div'>
      <Box
        component="img"
        sx={{ width: '167px', height: '90px', marginLeft: '5px' }}
        alt="Netflix-logo"
        src={logo}
      />
    </Box>
  )
}

export default Header