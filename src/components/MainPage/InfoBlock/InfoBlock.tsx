import React from 'react'
import { Box, Typography } from '@mui/material';

const InfoBlock = () => {
  return (
    <Box
      borderBottom='8px solid #222'
      color='#fff'
      padding='70px 45px'
    >
      <Box
        margin='0 auto'
        maxWidth='950px'
        padding='75px 0'
        position='relative'
        textAlign='center'
        width='100%'
      >
        <Typography
          variant="h1"
          fontSize='62px'
          fontWeight='500'
          lineHeight='70.4px'
          maxWidth='840px'
          textAlign='center'
          margin='0 auto'
        >
          Фільми, серіали й інший контент без обмежень.
        </Typography>
        <Typography
          variant='h2'
          margin='1rem auto'
          fontWeight='400'
          height='66px'
          fontSize='26px'
          lineHeight='21.7px'
        >
          Дивіться будь-де. Скасувати підписку можна будь-коли.
        </Typography>
      </Box>
    </Box>
  )
}

export default InfoBlock