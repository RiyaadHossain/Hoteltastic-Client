import { Box } from '@mui/material';
import React from 'react';
// import Carousel from '../../Home/OurAgents/Carousel/Carousel';
import Carousel from './Carousel.jsx';

const PropertyCarousel = () => {
    return (
        <Box sx={{
            width: '100%',
            height:{
                xs:"300px",
                sm:"500px",
                md:"500px",
                lg:"600px"
            },
            paddingBottom: "30px",
        }}>
            <Carousel></Carousel>
        </Box>
    );
};

export default PropertyCarousel;