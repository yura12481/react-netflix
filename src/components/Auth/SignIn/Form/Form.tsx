import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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


  const handleButton = (e:any) => {
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
      <Box>
        <Typography variant='h1' color='white' sx={{ fontSize: '32px', marginBottom: '28px' }}>
          Увійти
        </Typography>
        <form>
          <TextField
            label="Адреса електронної пошти"
            variant="standard"
            fullWidth
            style={{ background: '#333', marginBottom: '16px', borderRadius: '4px' }}
          />
          <TextField
            label="Адреса електронної пошти"
            variant="standard"
            fullWidth
            style={{ background: '#333', marginBottom: '16px', borderRadius: '4px' }}
          />
          <StyledButton
            variant="contained"
            fullWidth
            disableRipple
            sx={{ height: '50px', marginTop: '24px', marginBottom: '12px', background: 'red' }}
          >
            Увійти
          </StyledButton>
          <Box>
            <Checkbox 
            defaultChecked 
            color="info"
            onChange={handleButton} 
            />
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Form