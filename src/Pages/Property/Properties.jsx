import { Box, Typography } from '@mui/material';
import React from 'react';
import Background from '../../Assets/Background/callToActionBg.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ApartmentHeading from './ApartmentHeading';
import PropertySideBar from './PropertySideBar';

const Properties = () => {
    return (
        <Box sx={{ fontFamily: "'Rubik', sans-serif", }}>
            {/* header part */}
            <Box sx={{
                width: '100%',
                height: '15rem',
                background: `rgba(229, 248, 237,0.9) url(${Background}) no-repeat`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography sx={{
                    fontSize: {
                        xs: '20px',
                        sm: '30px',
                        md: '40px',
                    },
                    marginBottom: '10px',
                    fontWeight: 500,
                }}>Property Details 01</Typography>
                <Typography>Home
                    <ChevronRightIcon sx={{ fontSize: 14, mx: 1 }} />
                    <Typography component='span' sx={{
                        color: '#2dbe6c',
                        fontWeight: 500,
                    }}>Property Details 01</Typography>
                </Typography>
            </Box>
            {/* all other components are showing here */}
            <Box sx={{
                padding: {
                    xs: '30px 20px',
                    sm: '40px 40px',
                    md: '100px 60px',
                    lg: '100px 80px',
                },
                maxWidth: {
                    md: "90%",
                    xl: "80%"
                },
                mx: 'auto',
            }}>
                <ApartmentHeading />
                <Box sx={{
                    display: "flex",
                    marginTop: "30px"
                }}>
                    <Box sx={{
                        width: {
                            md: "67%",
                        },
                    }}>

                    </Box>
                    <Box sx={{
                        width: {
                            md: "33%",
                        },
                    }}>
                        <PropertySideBar />
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};

export default Properties;