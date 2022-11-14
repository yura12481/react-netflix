import React from 'react';
import { useState } from 'react';
import logo from './../images/header-logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Box, MenuItem, FormControl, Select } from '@mui/material';

const Header = () => {
  const [selected, setSelected] = useState('English');

  const navigate = useNavigate();

  const location = useLocation();
  if (location.pathname === '/' || location.pathname === '/sign-in')
    return (
      <Box component='div'>
        <Box
          component="img"
          sx={{ width: '167px', height: '90px', marginLeft: '3%' }}
          alt="Netflix-logo"
          src={logo}
        />
      </Box>
    )
  return (
    <Box
      component='div'
      sx={{
        maxHeight: '84px',
        display: 'flex',
        margin: '0 45px',
        justifyContent: 'flex-start'
      }}
    >
      <Box
        component="img"
        sx={{ width: '167px', maxHeight: '84px', marginRight: 'auto' }}
        alt="Netflix-logo"
        src={logo}
      />
      <Box alignItems='center' display='flex'>
        <Box width='120px' textAlign='center' marginRight='32px'>
          <FormControl variant="filled" fullWidth >
            <Select
              displayEmpty
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              sx={{
                "&.MuiInputBase-root": {
                  background: '#000000',
                  color: 'white',
                  border: '1px solid white',
                  fontSize: '13px',
                  maxHeight: '37px',
                  padding: '1px 0px 14px 5px'
                }
              }}
            >
              <MenuItem value={'English'}>English</MenuItem>
              <MenuItem value={'Українська'}>Українська</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Button
            variant="contained"
            fullWidth
            disableRipple
            sx={{
              borderRadius: '3px',
              width: '85px',
              height: '35px',
              textTransform: 'none',
              background: 'red',
              "&:hover": {
                background: 'red'
              },
            }}
            onClick={() => { navigate('/sign-in') }}
            type='submit'
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Header;
