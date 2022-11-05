import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
    sx={{
      background: 'rgba(0,0,0,.75)', 
      width: '100%', 
      height: '258px',
    }}
    >
      <Typography component='div'
      sx={{maxWidth: '1000px', margin: '0 auto'}}
      >
        a ebaniy rot sykaa
      </Typography>
    </Box>
  )
}

export default Footer