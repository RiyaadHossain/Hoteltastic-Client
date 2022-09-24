import { Box } from '@mui/material';
import React from 'react';
import ApartmentHeading from './ApartmentHeading';
import PropertyDescription from './PropertyDescription';
import PropertyDetails from './PropertyDetails';
import PropertyCarousel from './PropertyCarousel/PropertyCarousel';
import Location from './Location/Location';
import PropertyContact from './PropertySideBar/PropertyContact';
import PropertyCalculate from './PropertySideBar/PropertyCalculate';
import PropertyRating from './PropertyRating/PropertyRating';
import PageStatistics from './Chart/PageStatistics';
import CustomHeader from '../../Components/CustomHeader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getReviews from '../../Store/review/reviewAction';
import { useParams } from 'react-router-dom';
import { getSingleRoom } from '../../Store/room/roomAction';
import FullScreenSpinner from '../../Components/Loaders/Spinner/FullScreenSpinner';

const Properties = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getReviews())
        dispatch(getSingleRoom(id))
    }, [dispatch,id])
    const roomStore = useSelector((state) => state.room);
    if (roomStore.loading) return <FullScreenSpinner />
    // const { featured, authorThumb, authorName, status, beds, baths, sqFt, saved, _id, propertyName, propertyImage, propertyDesciption, startFrom } = roomStore?.singleRoom;
    // console.log(roomStore.singleRoom);

    return (
        <Box sx={{ fontFamily: "'Rubik', sans-serif", }}>
            {/* header part */}
            <CustomHeader nested>{roomStore?.singleRoom?.propertyName}</CustomHeader>
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
                <ApartmentHeading room={roomStore?.singleRoom} />

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
                        <PageStatistics />
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