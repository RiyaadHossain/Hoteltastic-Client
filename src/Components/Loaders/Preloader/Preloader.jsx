import { Box, Typography } from '@mui/material';
import React from 'react';
import './Preloader.css'

const Preloader = () => {
    return (
        <Box sx={{
            fontFamily: "'Rubik', sans-serif",
            // fontWeight: '600',
            width: '100%',
            height: '100vh',
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            {/* -------------------preloader circle--------------------- */}
            <Box className="preloader">
                <Box className="circle"></Box>
            </Box>
            {/* -------------------preloader text----------------------- */}
            <Box className='spinner'>
                {/* <Typography component='span'
                sx={{
                fontSize : {
                    xs: '20px',
                    sm: '25px',
                    md: '80px',
                    lg: '100px',
                },
                padding:{
                    xs : '10px',
                    sm : '20px',
                    md : '30px',
                    lg : '40px',
                },
                color: '#fff',
                fontWeight: '600',
                }}>HOTELTASTIC
                </Typography> */}
                <Typography component='span'>H</Typography>
                <Typography component='span'>O</Typography>
                <Typography component='span'>T</Typography>
                <Typography component='span'>E</Typography>
                <Typography component='span'>T</Typography>
                <Typography component='span'>A</Typography>
                <Typography component='span'>S</Typography>
                <Typography component='span'>T</Typography>
                <Typography component='span'>I</Typography>
                <Typography component='span'>C</Typography>
            </Box>
        </Box>
    );
};

export default Preloader;