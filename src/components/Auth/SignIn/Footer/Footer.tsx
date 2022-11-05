import React from 'react'
import Box from '@mui/material/Box';
import { Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'rgba(0,0,0,.75)',
        width: '100%',
        maxHeight: '258px',
        padding: '30px 0'
      }}
    >
      <Typography component='p'
        sx={{ maxWidth: '1000px', margin: '0 auto', color: '#737373', marginBottom: '30px'}}
      >
        Маєте запитання? Зателефонуйте за номером
        <Link
          color='inherit'
          href='tel:0800-509-416'
          underline='hover'
          marginLeft='5px'
        >
           0800-509-416
        </Link>
      </Typography>
      <Grid container spacing={2}>
        
      </Grid>
    </Box>
  )
}

export default Footer