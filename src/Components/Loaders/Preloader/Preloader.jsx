import { Box } from '@mui/material';
import React from 'react';
import './Preloader.css'

const Preloader = () => {
    return (
        <Box className="preloader">
            <Box className="circle"></Box>
        </Box>
    );
};

export default Preloader;