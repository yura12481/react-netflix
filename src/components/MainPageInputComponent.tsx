import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import * as  yup from 'yup';
import { useFormik } from 'formik';

const MainPageInputComponent = () => {
  const validationSchema = yup.object({
    email: yup.string()
      .email('Please enter a valid email address')
      .required('Email is required!'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema: validationSchema
  })
  return (
    <form style={{ paddingTop: '16px' }} onSubmit={formik.handleSubmit}>
      <Typography
        variant='h3'
        fontWeight='400'
        fontSize='1.2rem'
        padding='0 5%'
        paddingBottom='20px'
      >
        Ready to watch? Enter your email to create or restart your membership.
      </Typography>
      <Box>
        <TextField
          id='email'
          name='email'
          variant="outlined"
          label='Email address'
          value={formik.values.email}
          onChange={formik.handleChange}
          InputLabelProps={{
            style: { padding: '10px 10px 10px 0' }
          }}
          sx={{
            width: '500px',
            color: 'black',
            fontSize: '16px',
            "& .MuiInputBase-root": {
              background: '#fff',
              height: '70px'
            },
            "& .MuiFormHelperText-root": {
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
          sx={{
            borderRadius: '3px',
            fontSize: '23px',
            width: '245px',
            height: '70px',
            background: 'red',
            "&:hover": {
              background: 'red'
            },
          }}
          type='submit'
        >
          Get Started
        </Button>
      </Box>
    </form>
  )
}

export default MainPageInputComponent;