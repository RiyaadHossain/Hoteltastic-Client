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
import PropertyRating from './PropertyRating/PropertyRating';
import PageStatistics from './Chart/PageStatistics';
import CustomHeader from '../../Components/CustomHeader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getReviews from '../../Store/review/reviewAction';

const Properties = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])
    return (
        <Box sx={{ fontFamily: "'Rubik', sans-serif", }}>
            {/* header part */}
           <CustomHeader nested>Property Detials 01</CustomHeader>
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
                        <PropertyRating />
                        <PageStatistics/>
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
// nothing