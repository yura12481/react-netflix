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
        sx={{ maxWidth: '1000px', margin: '0 auto', color: '#737373', marginBottom: '30px' }}
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
      <Box sx={{ maxWidth: '1000px', margin: '0 auto', }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Link
              href='#'
              variant='subtitle1'
              component="span"
              underline='hover'
              sx={{ color: '#737373', fontSize: '13px', cursor: 'pointer', padding: '5px' }}
            >
              Поширені запитання
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link
              href='#'
              variant='subtitle1'
              component="span"
              underline='hover'
              sx={{ color: '#737373', fontSize: '13px', cursor: 'pointer', padding: '5px' }}
            >
              Довідковий центр
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link
              href='#'
              variant='subtitle1'
              component="span"
              underline='hover'
              sx={{ color: '#737373', fontSize: '13px', cursor: 'pointer', padding: '5px' }}
            >
              Умови використання
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link
              href='#'
              variant='subtitle1'
              component="span"
              underline='hover'
              sx={{ color: '#737373', fontSize: '13px', cursor: 'pointer', padding: '5px' }}
            >
              Конфіденційність
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link
              href='#'
              variant='subtitle1'
              component="span"
              underline='hover'
              sx={{ color: '#737373', fontSize: '13px', cursor: 'pointer', padding: '5px' }}
            >
              Налаштування файлів cookie
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link
              href='#'
              variant='subtitle1'
              component="span"
              underline='hover'
              sx={{ color: '#737373', fontSize: '13px', cursor: 'pointer', padding: '5px' }}
            >
              Корпоративна інформація
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Footer