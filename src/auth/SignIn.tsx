import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as  yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField, Typography, Link, Box, FormControlLabel, Checkbox } from '@mui/material';
import axios from 'axios';

///////////////LOGIN DATA/////////////////
// "email": "eve.holt@reqres.in"//////////
// "password": "cityslicka"///////////////
///////////////LOGIN DATA/////////////////

const SignIn = () => {
    let [toogleBtn, setToogleBtn] = useState(true);
    const validationSchema = yup.object({
        email: yup.string()
            .email('Please enter a valid email')
            .required('Please enter a valid email or phone number.'),
        password: yup.string()
            .required('Your password must contain between 4 and 60 characters.')
            .min(4, 'Your password must contain between 4 and 60 characters.')
            .max(60, 'Your password must contain between 4 and 60 characters.')
    })

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            checked: true,
        },
        onSubmit: () => {
            axios.post('https://reqres.in/api/login', {
                email: formik.values.email,
                password: formik.values.password
            })
                .then(result => {
                    if (result) {
                        navigate('/main-netflix');
                    }
                })
                .catch(() => {
                    alert('Incorrect email or password. Please try again.');
                })
        },
        validationSchema: validationSchema
    })
    return (
        <Box
            sx={{
                background: 'rgba(0, 0, 0, .75)',
                maxWidth: '450px',
                minHeight: '660px',
                margin: '0 auto',
                padding: '60px 68px 40px',
                boxSizing: 'border-box',
                marginBottom: '90px'
            }}
        >
            <Box height='370px'>
                <Typography variant='h1'
                    sx={{
                        fontSize: '32px',
                        marginBottom: '28px',
                        color: '#fff',
                        fontWeight: '500'
                    }}
                >
                    Sign In
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        sx={{
                            input:
                            {
                                color: '#fff',
                                paddingLeft: '20px'
                            },
                            "& .MuiFormLabel-root":
                            {
                                paddingLeft: '20px'
                            },
                            background: '#333',
                            marginBottom: '16px',
                            borderRadius: '4px'
                        }}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        name='email'
                        label="Email or phone number"
                        variant="standard"
                        color='success'
                        fullWidth
                        type='email'
                        InputLabelProps={{
                            style: { color: '#8c8c8c', fontSize: '16px' }
                        }}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        sx={{
                            input:
                            {
                                color: '#fff',
                                paddingLeft: '20px'
                            },
                            "& .MuiFormLabel-root":
                            {
                                paddingLeft: '20px'
                            },
                            background: '#333',
                            marginBottom: '16px',
                            borderRadius: '4px'
                        }}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        name='password'
                        label="Password"
                        variant="standard"
                        color='success'
                        fullWidth
                        type='password'
                        InputLabelProps={{
                            style: { color: '#8c8c8c', fontSize: '16px' }
                        }}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button
                        variant="contained"
                        fullWidth
                        disableRipple
                        sx={{
                            fontSize: '16px',
                            fontWeight: '500',
                            height: '50px',
                            marginTop: '24px',
                            marginBottom: '12px',
                            background: 'red',
                            textTransform: 'none',
                            "&:hover": {
                                background: 'red'
                            },
                        }}
                        type='submit'
                    >
                        Sign In
                    </Button>
                    <Box display='flex' alignItems='center'>
                        <FormControlLabel
                            label={'Remember me'}
                            sx={{
                                flexGrow: '1',
                                color: '#b3b3b3',
                                '& .MuiFormControlLabel-label':
                                {
                                    fontSize: '13px',
                                    fontWeight: '400'
                                }
                            }}
                            control={
                                <Checkbox
                                    name='checked'
                                    value={formik.values.checked}
                                    onChange={formik.handleChange}
                                    defaultChecked
                                    disableRipple
                                    sx={{
                                        "&.MuiButtonBase-root":
                                        {
                                            color: '#737373'
                                        },
                                        "& .MuiSvgIcon-root":
                                        {
                                            fontSize: '18px'
                                        }
                                    }}
                                />}
                        />
                        <Link
                            href='/'
                            component="a"
                            underline='hover'
                            sx={{
                                color: '#b3b3b3',
                                fontSize: '13px'
                            }}
                        >
                            Need help?
                        </Link>
                    </Box>
                </form>
            </Box>
            <Box marginTop='16px'>
                <Typography
                    component='span'
                    sx={{ color: '#737373', fontSize: '16px', marginRight: '5px' }}
                >
                    New to Netflix?
                </Typography>
                <Link
                    href='/'
                    component="a"
                    underline='hover'
                    sx={{ color: '#fff', fontSize: '16px' }}
                >
                    Sign up now.
                </Link>
            </Box>
            <Box marginTop='11px'>
                <Typography
                    component='span'
                    sx={{ color: '#8c8c8c', fontSize: '13px' }}
                >
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                </Typography>
                {toogleBtn ?
                    <Button
                        disableRipple
                        onClick={() => setToogleBtn(false)}
                        sx={{
                            textTransform: 'none',
                            padding: '0',
                            backgroundColor: 'none',
                            '&:hover': {
                                textDecoration: 'underline'
                            },
                            "&.MuiButtonBase-root": {
                                color: '#0071eb',
                                fontSize: '13px'
                            }
                        }}
                    >
                        Learn more.
                    </Button>
                    :
                    <Typography
                        sx={{
                            marginTop: '13px',
                            "&.MuiTypography-root": {
                                color: '#8c8c8c',
                                fontSize: '13px',
                            }
                        }}
                    >
                        The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and
                        Terms of Service, and is used for providing, maintaining,
                        and improving the reCAPTCHA service and for general security purposes
                        (it is not used for personalized advertising by Google).
                    </Typography>
                }
            </Box>
        </Box>
    )
}

export default SignIn;