import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Form = () => {
  return (
    <Box
    sx={{
      background: 'rgba(0, 0, 0, .75)', 
      maxWidth: '450px', 
      height: '660px',
      margin: '0 auto',
      padding: '60px 68px 40px',
      boxSizing: 'border-box',
    }}
    >
      <Box>
        <Typography variant='h1' color='white'>
        Увійти
        </Typography>
      </Box>
    </Box>
  )
}

export default Form