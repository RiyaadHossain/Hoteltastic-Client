import { Box, Typography } from '@mui/material';
import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <Box className='loader'>
            <Typography component='span' sx={{
                color: '#000'
            }}>Loading...</Typography>
        </Box>
    );
};

export default Spinner;