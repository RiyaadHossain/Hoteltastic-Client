import { Box} from '@mui/material';
import React from 'react';
import './Preloader.css'

const Preloader = () => {
    return (
        <Box sx={{
            fontFamily: "'Rubik', sans-serif",
            width: '100%',
            height: '100vh',
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            {/* -------------------preloader circle--------------------- */}
            <Box className="preloader">
                <Box className="circle"></Box>
            </Box>
            {/* -------------------preloader text----------------------- */}
            <Box className='spinner' sx={{
                fontSize : {
                    xs: '12px',
                    sm: '25px',
                    md: '60px',
                    lg: '70px',
                },
                mx:'auto'
            }}>
                <span>H</span>
                <span>O</span>
                <span>T</span>
                <span>E</span>
                <span>L</span>
                <span>T</span>
                <span>A</span>
                <span>S</span>
                <span>T</span>
                <span>I</span>
                <span>C</span>
            </Box>
        </Box>
    );
};

export default Preloader;