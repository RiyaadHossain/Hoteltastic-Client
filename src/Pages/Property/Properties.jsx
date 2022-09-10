import { Box, Typography } from '@mui/material';
import React from 'react';
import Background from '../../Assets/Background/callToActionBg.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Properties = () => {
    return (
        <Box sx={{height:'100vh',fontFamily: "'Rubik', sans-serif",}}>
            <Box sx={{
                width:'100%',
                height:'15rem',
                background:`rgba(229, 248, 237,0.9) url(${Background}) no-repeat`,
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <Typography sx={{
                    fontSize:{
                        xs:'20px',
                        sm:'30px',
                        md:'40px',
                    },
                    marginBottom:'10px',
                    fontWeight:500,
                }}>Property Details 01</Typography>
                <Typography>Home 
                <ChevronRightIcon sx={{fontSize:14,mx:1}}/> 
                <Typography component='span' sx={{
                color:'#2dbe6c',
                fontWeight:500,
                }}>Property Details 01</Typography>
                </Typography>
            </Box>
        </Box>
    );
};

export default Properties;