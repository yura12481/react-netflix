import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material';

const InfoBlock = () => {
////////////////////////// FORMIK


  return (
    <Box
      borderBottom='8px solid #222'
      color='#fff'
      padding='70px 45px'
    >
      <Box
        margin='0 auto'
        maxWidth='950px'
        padding='85px 0'
        position='relative'
        textAlign='center'
        width='100%'
      >
        <Typography
          variant="h1"
          fontSize='62px'
          fontWeight='500'
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
          fontSize='26px'
        >
          Дивіться будь-де. Скасувати підписку можна будь-коли.
        </Typography>
        <form style={{ paddingTop: '16px' }}>
          <Typography
            variant='h3'
            fontWeight='400'
            fontSize='19px'
            padding='0 5%'
          >
            Готові до перегляду? Введіть адресу електронної пошти, щоб оформити або поновити підписку.
          </Typography>
          <Box>
            <TextField
              id='email'
              name='email'
              variant="outlined"
              label='Адреса електронної пошти'
              sx={{
                width: '450px', background: '#fff', color: 'black',
                "&.MuiFormLabel-root": {
                  fontSize: '30px'
                }
              }}
            />
            <Button
              variant="contained"
              fullWidth
              // disableRipple
              sx={{
                borderRadius: '3px',
                fontSize: '23px',
                width: '168px',
                height: '56px',
                background: 'red',
                "&:hover": {
                  background: 'red'
                },
              }}
              type='submit'
            >
              Почати
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default InfoBlock