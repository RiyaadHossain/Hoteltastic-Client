import { Box, Typography } from '@mui/material';
import React from 'react';
import Background from '../../Assets/Background/callToActionBg.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ApartmentHeading from './ApartmentHeading';
import PropertyDescription from './PropertyDescription';
import PropertyDetails from './PropertyDetails';
import Carousel from '../Home/OurAgents/Carousel/Carousel';
import PropertyCarousel from './PropertyCarousel/PropertyCarousel';
import Location from './Location/Location';
import PropertyContact from './PropertySideBar/PropertyContact';
import PropertyCalculate from './PropertySideBar/PropertyCalculate';

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
                    md: "95%",
                    xl: "70%"
                },
                mx: 'auto',
            }}>
                <ApartmentHeading />

                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>

                    {/* Property Main */}
                    <Box sx={{
                        width: {
                            md: "65%",

                        },
                    }}>
                        <PropertyCarousel />
                        <PropertyDescription />
                        <PropertyDetails />
                        <Location />
                    </Box>

                    {/* Property Side Bar */}
                    <Box sx={{
                        width: {
                            md: "33%",
                            marginTop: "70px",

                        },
                    }}>
                        <PropertyContact />
                        <PropertyCalculate />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Properties;