import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import { validationSchema } from './Validations/validationSchema';

const InfoBlock = () => {
////////////////////////// FORMIK
const formik = useFormik({
  initialValues: {
    email: '',
  },

  onSubmit: (values) => {
    console.log(JSON.stringify(values))
  },

  validationSchema: validationSchema
})
////////////////////////// FORMIK END

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
        <form style={{ paddingTop: '16px' }} onSubmit={formik.handleSubmit}>
          <Typography
            variant='h3'
            fontWeight='400'
            fontSize='19px'
            padding='0 5%'
            paddingBottom='20px'
          >
            Готові до перегляду? Введіть адресу електронної пошти, щоб оформити або поновити підписку.
          </Typography>
          <Box>
            <TextField
              id='email'
              name='email'
              variant="outlined"
              label='Адреса електронної пошти'
              value={formik.values.email}
              onChange={formik.handleChange}
              sx={{
                width: '450px', color: 'black', fontSize: '16px', 
                "& .MuiInputBase-root": {
                  background: '#fff',
                },
                "& .MuiFormHelperText-root" : {
                  fontSize: '15px',
                  color: '#ffa00a'
                }
              }}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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