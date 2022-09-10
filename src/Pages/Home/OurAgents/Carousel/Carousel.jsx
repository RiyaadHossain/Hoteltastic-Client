import React from 'react';
// import Swiper from 'react-id-swiper';
import 'swiper/css'

import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import {Navigation,Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Box, Typography } from '@mui/material';
import { NavigationButtonNext, NavigationButtonPrev } from '../../HotProperty/NavigationButton';



const Carousel = () => {
  return (
    <>
    <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}

        coverflowEffect={{
          rotate: 0,
          // rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 2,
          // modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}

        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
        }}
        loop={true}
        modules={[Navigation,Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
    >   
    

      {/* navigation button for swipper js */}
        <Box sx={{
          display:"flex",
          justifyContent:"space-between",
          width:{
            xs:"100%",
            sm:"100%",
            md:"50%",
          },
          mx:'auto',
          paddingTop: '30px'
          }}>    
          <NavigationButtonPrev>
               <ArrowBackIosNewIcon/>
          </NavigationButtonPrev>
          <NavigationButtonNext>
               <ArrowForwardIosIcon/>
          </NavigationButtonNext>
          </Box>

              <SwiperSlide>
                <Box sx={{position:'relative'}}>
                <Box sx={{
                              transition: "ease-out 0.3s",
                              "&:hover": {
                                   transform: "scale(1.1)"
                              }
                         }}>
                  <img src="http://azim.commonsupport.com/Realshed/assets/images/team/team-1.jpg" style={{objectFit: "cover"}} alt=""/>
                </Box>
                <Box sx={{
                              width: "60%",
                              marginLeft: "auto",
                              marginRight: "auto",
                              left: 0,
                              right: 0,
                              textAlign: "center",
                              position: "absolute",
                              bottom: "-10%",
                              backgroundColor: "white",
                              padding: "14px 30px",
                              borderRadius: "5px",

                         }}>
                              <Typography
                                   sx={{
                                        fontSize: 20,
                                        fontWeight: "500",
                                        cursor: "pointer",
                                        transition: "ease-out 0.3s",
                                        "&:hover": {
                                             color: "#2dbe6c",
                                        }
                                   }} >
                                   Los Angeles
                              </Typography>
                              <Typography
                                   color="#93959e"
                              >
                                   10 Properties
                              </Typography>
                         </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <img src="http://azim.commonsupport.com/Realshed/assets/images/team/team-2.jpg" style={{objectFit: "cover"}} alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="http://azim.commonsupport.com/Realshed/assets/images/team/team-3.jpg" style={{objectFit: "cover"}} alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="http://azim.commonsupport.com/Realshed/assets/images/team/team-4.jpg" style={{objectFit: "cover"}} alt=""/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="http://azim.commonsupport.com/Realshed/assets/images/team/team-5.jpg" />
              </SwiperSlide>
            </Swiper>
    </>
  )
  
};

export default Carousel;