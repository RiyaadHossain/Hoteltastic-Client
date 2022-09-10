import { Box, Typography } from '@mui/material';
import React from 'react';
import CommonBadge from '../../Components/CommonBadge';

const ApartmentHeading = () => {
    return (
        // main container
        <Box sx={{
            width:'100%',
            height:'8rem',
            padding:{
                xs:'10px 20px',
                sm:'20px 40px',
                md:'30px 40px',
            },
            borderRadius: '10px',
            // boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
            boxShadow:'35px 35px 70px #bebebe, -35px -35px 70px #ffffff',
            // boxShadow:  ['-35px -35px 70px #ffffff']
        }}>
            {/* top container */}
            <Box sx={{
                display:'flex',
                justifyContent:'space-between',
            }}>
                <Box sx={{
                    display:'flex',
                    flexWrap:'wrap',
                    alignItems:'center',
                    justifyContent:'space-between',
                    width:'90%'
                }}>
                    <Typography sx={{
                            fontSize:{
                                xs:'15px',
                                sm:'25px',
                                md:'30px',
                            },
                    }}>The Citizen Apartment</Typography>
                    <Box sx={{display:'flex'}}>
                        <Typography sx={{
                        color:'#fff',
                        background: ' #f2b241',
                        padding:'5px 10px',
                        fontWeight: 'bold',
                        borderRadius: '5px',
                        fontSize:'12px',
                        marginRight:'10px'
                        }}>FEATURED
                        </Typography>
                        <Typography sx={{
                        color:'#fff',
                        background: ' #7360ff',
                        padding:'5px 10px',
                        fontWeight: 'bold',
                        borderRadius: '5px',
                        fontSize:'12px'
                        }}>FOR BUY
                        </Typography>                    
                        
                    </Box>
                </Box>
                <Box>
                    <Typography component='span' sx={{
                        color:'#2dbe6c',
                        marginLeft:'10px',
                        fontSize:{
                            xs:'15px',
                            sm:'25px',
                            md:'30px',
                        },
                        fontWeight:'bold',
                    }}>$30,000.00</Typography>
                </Box>
            </Box>
            {/* down ocntainer */}
            <Box>
                <Box></Box>
                <Box></Box>
            </Box>
        </Box>
    );
};

export default ApartmentHeading;