import React from 'react';
import logo from './img/header-logo.png';
import { Button, Box, MenuItem, FormControl, Select } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/////////////////////////////////////////// Styles MUI
const SelectStyled = styled(Select)({
    "&.MuiInputBase-root": {
        background: '#000000',
        color: 'white',
        border: '1px solid white',
        fontSize: '13px',
        maxHeight: '37px'
    }
});
/////////////////////////////////////////// End Styles MUI


const MainHeader = () => {
    ////////////////////////////// STATE
    const [selected, setSelected] = useState('');
    ////////////////////////////// STATE END

    /////////////////////////////////////////////// HANDLE
    const selectionChangeHandler = (event: any) => {
        setSelected(event.target.value);
    }
    /////////////////////////////////////////////// HANDLE END


    /////////////////////////////////////////////// NAVIGATE
    const navigate = useNavigate();
    const handleClickNavigate = () => {
        navigate('/sign-in');
    }
    /////////////////////////////////////////////// NAVIGATE END
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
                        <SelectStyled displayEmpty value={selected} onChange={selectionChangeHandler}>
                            <MenuItem disabled value=""><em>Українська</em></MenuItem>
                            <MenuItem value={1}>Українська</MenuItem>
                            <MenuItem value={2}>English</MenuItem>
                        </SelectStyled>
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
                            background: 'red',
                            "&:hover": {
                                background: 'red'
                            },
                        }}
                        onClick={() => { handleClickNavigate() }}
                        type='submit'
                    >
                        Увійти
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default MainHeader