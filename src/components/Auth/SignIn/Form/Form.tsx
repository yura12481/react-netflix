import React from 'react'
import Box from '@mui/material/Box';
import { Formik } from 'formik';
import * as  yup  from 'yup'
import { Button, TextField, Typography, Link } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/system';
import { useState } from 'react';

///////////////////////////////////////////Styles MUI

const StyledInput = styled(TextField)({
  input: {
    color: '#fff',
  }
})

const ToogleButton = styled(Button)({
  textTransform: 'none',
  padding: '0',
  backgroundColor: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'none'
  },

  "&.MuiButtonBase-root": {
    color: '#0071eb',
    fontSize: '13px',
  }
})
///////////////////////////////////////////////Styles MUI END

const Form = () => {
////////////////////////////// STATE
  const [checked, setChecked] = useState(true);
  let [toogleBtn, setToogleBtn] = useState(true);
////////////////////////////// STATE END

///////////////////////////////////////////////HANDLE
  const handleClick = () => {
    setToogleBtn(toogleBtn = false)
  }

  const handleChange = (e: any) => {
    setChecked(e.target.checked)
  }
///////////////////////////////////////////////HANDLE END

///////////////////////////////////////////////FORMIK
interface MyFormValues {
  email: string;
}

// const formik:any = useFormik({
  
// })

  return (
    <Box
      sx={{
        background: 'rgba(0, 0, 0, .75)',
        maxWidth: '450px',
        height: '660px',
        margin: '0 auto',
        padding: '60px 68px 40px',
        boxSizing: 'border-box',
        marginBottom: '90px'
      }}
    >
      <Box height='350px'>
        <Typography variant='h1' color='white' sx={{ fontSize: '32px', marginBottom: '28px' }}>
          Увійти
        </Typography>
        <form>
          <StyledInput
            label="Адреса електронної пошти"
            variant="standard"
            fullWidth
            style={{ background: '#333', marginBottom: '16px', borderRadius: '4px' }}
            InputLabelProps={{
              style: { color: '#8c8c8c', fontSize: '16px' },
            }}
            InputProps={{ disableUnderline: true }}
          />
          <StyledInput
            label="Пароль"
            variant="standard"
            fullWidth
            type='password'
            sx={{ background: '#333', marginBottom: '16px', borderRadius: '4px', color: 'white' }}
            InputLabelProps={{
              style: { color: '#8c8c8c', fontSize: '16px' }
            }}
            InputProps={{ disableUnderline: true }}

          />
          <Button
            variant="contained"
            fullWidth
            disableRipple
            sx={{
              height: '50px', marginTop: '24px', marginBottom: '12px', background: 'red', "&:hover": {
                background: 'red'
              }
            }}
            type={'submit'}
          >
            Увійти
          </Button>
          <Box display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <FormControlLabel
              label={'Запам’ятати мене'}
              sx={{ color: '#b3b3b3', '& .MuiFormControlLabel-label': { fontSize: '13px' } }}
              control={<Checkbox
                checked={checked}
                onChange={handleChange}
                disableRipple
                sx={{
                  "&.MuiButtonBase-root": { color: '#737373' },
                  "& .MuiSvgIcon-root": { fontSize: '18px' }
                }}
              />}
            />

            <Link
              href='#'
              variant='subtitle1'
              component="span"
              underline='hover'
              sx={{ color: '#b3b3b3', fontSize: '13px' }}
            >
              Потрібна допомога?
            </Link>
          </Box>
        </form>
      </Box>
      <Box marginTop='16px'>
        <Typography
          component='span'
          sx={{ color: '#737373', fontSize: '16px', marginRight: '5px' }}
        >
          Уперше на Netflix?
        </Typography>

        <Link
          href='#'
          variant='subtitle1'
          component="span"
          underline='hover'
          sx={{ color: '#fff', fontSize: '16px', cursor: 'pointer' }}
        >
          Зареєструватися.
        </Link>
      </Box>
      <Box marginTop='11px'>
        <Typography
          component='span'
          sx={{ color: '#8c8c8c', fontSize: '13px' }}
        >
          Щоб переконатися, що ви не бот, сторінка захищена системою Google reCAPTCHA.
        </Typography>
        <ToogleButton
          disableRipple
          onClick={handleClick}
        >
          {toogleBtn ?
            <Typography component="div" sx={{
              fontSize: '13px',
              '&:hover': {
                cursor: 'pointer',
                textDecoration: 'underline'
              },
            }}
            >
              Докладніше
            </Typography>
            :
            <Typography sx={{
              marginTop: '13px',
              "&.MuiTypography-root": {
                color: '#8c8c8c',
                fontSize: '13px',
                textAlign: 'left',
                '&:hover': {
                  cursor: 'auto',
                  textDecoration: 'none'
                },
              }
            }}
            >
              Інформація, яку збирає система Google reCAPTCHA, регулюється Політикою конфіденційності й
              Умовами використання Google. Ці дані використовуються, щоб надавати, підтримувати й
              покращувати сервіс reCAPTCHA, а також у цілях загальної безпеки
              (Google не застосовуватиме їх для персоналізації реклами).
            </Typography>
          }

        </ToogleButton>
      </Box>
    </Box>
  )
}

export default Form