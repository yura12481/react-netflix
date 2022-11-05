import React from 'react'
import Box from '@mui/material/Box';
import { Button, TextField, Typography, Link } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/system';
import { useState } from 'react';

const StyledButton = styled(Button)`
  &:hover {
    background: red;
  }
`

const Form = () => {
  const [checked, setChecked] = useState(true);


  const handleChange = (e: any) => {
    setChecked(e.target.checked)
  }

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
      <Box height='350px'>
        <Typography variant='h1' color='white' sx={{ fontSize: '32px', marginBottom: '28px' }}>
          Увійти
        </Typography>
        <form>
          <TextField
            label="Адреса електронної пошти"
            variant="standard"
            fullWidth
            style={{ background: '#333', marginBottom: '16px', borderRadius: '4px' }}
            InputLabelProps={{
              style: { color: '#8c8c8c', fontSize: '16px' },
            }}
            InputProps={{ disableUnderline: true }}
          />
          <TextField
            label="Пароль"
            variant="standard"
            fullWidth
            type='password'
            style={{ background: '#333', marginBottom: '16px', borderRadius: '4px', color: '#fff' }}
            InputLabelProps={{
              style: { color: '#8c8c8c', fontSize: '16px' },
            }}
            InputProps={{ disableUnderline: true }}
          />
          <StyledButton
            variant="contained"
            fullWidth
            disableRipple
            sx={{ height: '50px', marginTop: '24px', marginBottom: '12px', background: 'red' }}
            type={'submit'}
          >
            Увійти
          </StyledButton>
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
          sx={{color: '#737373', fontSize: '16px', marginRight: '5px'}}
        >
          Уперше на Netflix?
        </Typography>

        <Link
          href='#'
          variant='subtitle1'
          component="span"
          underline='hover'
          sx={{color: '#fff', fontSize: '16px'}}
        >
          Зареєструватися.
        </Link>
      </Box>
    </Box>
  )
}

export default Form