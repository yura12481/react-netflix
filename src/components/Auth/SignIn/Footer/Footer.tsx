import React from 'react'
import { Typography, Link, Grid, Box, MenuItem, FormControl, Select } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

///////////////////////////////////////////Styles MUI
const ContainerBox = styled(Box)({
  maxWidth: '1000px',
  margin: '0 auto',
})

const SelectStyled = styled(Select)({
  "&.MuiInputBase-root": {
    background: '#000000',
    color: '#737373',
    border: '1px solid #737373',
    fontSize: '13px',
    maxHeight: '48px',
    padding: '12px 4px 23px 24px'
  }
})
///////////////////////////////////////////////Styles MUI END


const Footer = () => {
  ////////////////////////////// STATE
  const [selected, setSelected] = useState('');


  ////////////////////////////// STATE END

  ///////////////////////////////////////////////HANDLE
  const selectionChangeHandler = (event: any) => {
    setSelected(event.target.value);
  }
  ///////////////////////////////////////////////HANDLE END
  return (
    <Box
      sx={{
        background: 'rgba(0,0,0,.75)',
        width: '100%',
        maxHeight: '258px',
        padding: '30px 0'
      }}
    >
      <ContainerBox>
        <Typography component='p'
          sx={{ color: '#737373', marginBottom: '30px' }}
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
        <Box>
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
        <Box width='144px' marginTop='30px'>
          <FormControl variant="filled" fullWidth >
            <SelectStyled displayEmpty value={selected} onChange={selectionChangeHandler}>
              <MenuItem disabled value=""><em>Українська</em></MenuItem>
              <MenuItem value={1}>Українська</MenuItem>
              <MenuItem value={2}>English</MenuItem>
            </SelectStyled>
          </FormControl>
        </Box>
      </ContainerBox>
    </Box>
  )
}

export default Footer