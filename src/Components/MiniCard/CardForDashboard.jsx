import { Box, Typography } from '@mui/material';
import React from 'react';
import './CardForDashboard.css'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const CardForDashboard = () => {
    return (
        <>
            <Box>
            <Box className="card">
                <Box sx={{
                    fontFamily: "'Rubik', sans-serif",
                    color:'#000',
                    zIndex:1,
                    display:'flex',
                    justifyContent:'space-between',
                    // alignItems:'center',
                    flexDirection:'column',
                }}>
                    <Typography sx={{
                        fontSize: 20,
                        marginBottom: 3,
                    }}>$14,20,100.00</Typography>
                    <Typography >Revenue</Typography>
                </Box>
                <LocalLibraryIcon sx={{fontSize: 40,color:'#64b5f6',zIndex:1}}/>
            </Box>
            </Box>  
        </>
    );
};

export default CardForDashboard;