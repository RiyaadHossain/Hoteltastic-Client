import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import SingleDeal from './SingleDeal';
import { Swiper, SwiperSlide } from "swiper/react";
import {NavigationButtonNext, NavigationButtonPrev} from './NavigationButton';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



const HotProperty = () => {
    const dealsData = [
        {name:"Contemporary Apartment",
        price: 30000,
        description:"This kind of catergory are the best for personal uses",
        img:'http://azim.commonsupport.com/Realshed/assets/images/resource/deals-1.jpg',
        bed:3,
        bath:2,
        area:600,},
        {name:"Luxury Villa With Pool",
        price: 45000,
        description:"This kind of catergory are the best for personal uses",
        img:'http://azim.commonsupport.com/Realshed/assets/images/resource/deals-1.jpg',
        bed:5,
        bath:3,
        area:800},
        {name:"Contemporary Apartment",
        price: 63000,
        description:"This kind of catergory are the best for personal uses",
        img:'http://azim.commonsupport.com/Realshed/assets/images/resource/deals-1.jpg',
        bed:7,
        bath:5,
        area:1200},
    ]
    return (
        <Box sx={{
          maxWidth:'1200px',
          mx:'auto',
            padding:{
            xs:"40px 10px",
            sm:"60px 20px",
            md:"100px 50px"
        }}}>
            
            <Typography variant='h6' sx={{color:'#2dbe6c'}}>HOT PROPERTY</Typography>
            <Typography variant='h3'>Our Best Deals</Typography>
           

       {/* swipper starts */}
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >


          {/* navifation button for swipper slide */}
          <Box sx={{
               position:'absolute',
               top : -5,
               paddingTop : 2,
               right : 10,
               zIndex:1
          }}>    
          <NavigationButtonPrev>
               <ArrowBackIosNewIcon/>
          </NavigationButtonPrev>
          <NavigationButtonNext>
               <ArrowForwardIosIcon/>
          </NavigationButtonNext>
          </Box>
        <SwiperSlide>
            {/* {
                dealsData.map(deal=>{
                    return  <SwiperSlide> */}
                          {/* full component starts here */}
             <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}> 
                {/* first grid item */}
                <Grid item xs={12} sm={12} md={6} >
                <Card sx={{
                    width: '100%',
                    height:{
                        sm:'400px',
                        md:'400px'
                    },
               borderRadius:"10px"
          }}
               fontFamily="'Rubik', sans-serif"
          >     
                <Box sx={{
                display:"flex",
                justifyContent:"space-between",
                padding: "15px 30px"
            }}>
                <Typography sx={{
                    color:'#fff',
                    background: '#f2b241',
                    padding:'5px 10px',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }}>FEATURED</Typography>
                <Typography component='span'><BeenhereIcon sx={{
                    color:'#2dbe6c',
                    fontSize:'30px',
                }}/></Typography>
            </Box>
              
               <CardContent sx={{
                    textAlign: "left",
                    padding: "20px 30px 40px 30px"
               }}>
                    <Typography
                         gutterBottom
                         variant="h5"
                         component="div"
                         color="#2d2929"
                         fontSize={{
                              md: 22
                         }}
                         fontWeight="500"
                    >
                         shoorif
                    </Typography>
                    <Box sx={{ 
                         display: "flex",
                         flexWrap: "wrap",
                         justifyContent: "center",
                     }}>
                         <Box sx={{ width: "50%" }}>
                              <Typography sx={{
                                   fontWeight: 500,
                                   color: "#93959e"
                              }}
                              > 
                                   Start From
                              </Typography>
                              <Typography sx={{
                                   fontWeight: "500",
                                   color: "#2dbe6c",
                                   fontSize: {
                                        md: 22
                                   }
                              }}>
                                4
                                   {/* ${price}.00 */}
                              </Typography>
                         </Box>
                         <Box sx={{ width: "50%", textAlign: "right" }}>

                              <SyncAltIcon
                                   sx={{
                                        border: "1px solid #e5e7ec",
                                        padding: "3px",
                                        height: "40px",
                                        width: "40px",
                                        color: "#a6a7af",
                                        borderRadius: "4px",
                                        transition: "ease-out 0.2s",
                                        "&:hover": {
                                            color:"#fff",
                                            background: "#2dbe6c",
                                            boxShadow: "inset 130px 0 0 0 #2dbe6c",
                                            border: "2px solid #2dbe6c",
                                            cursor: "pointer"
                                       }
                                   }}
                              />
                              <FavoriteBorderIcon
                                   sx={{
                                        border: "1px solid #e5e7ec",
                                        padding: "3px",
                                        height: "40px",
                                        width: "40px",
                                        color: "#a6a7af",
                                        borderRadius: "4px",
                                        marginLeft: "5px",
                                        transition: "ease-out 0.2s",
                                        "&:hover": {
                                            color:"#fff",
                                            background: "#2dbe6c",
                                            boxShadow: "inset 130px 0 0 0 #2dbe6c",
                                            border: "2px solid #2dbe6c",
                                            cursor: "pointer"
                                       }
                                   }}
                              />
                         </Box>
                    </Box>
                    <Typography variant="body2" color="#93959e" margin="10px 0">
                         {/* {description}/ */}
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum cum sint reiciendis rerum itaque autem! Pariatur amet cum dolore voluptates!
                    </Typography>
                    {/* icon flex section */}
                    <Box sx={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignItems:'center',
                        padding : '15px 0',
                        marginBottom:'10px',
                        height:'50px',
                        width:'50%',
                    }}>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box component='span' sx={{marginRight:'6px'}}>
                                <HotelIcon/>
                            </Box>
                            <Typography>
                            {/* {bed}  Beds */}
                            beds
                            </Typography>
                        </Box>
                        <Typography>|</Typography>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box component='span' sx={{marginRight:'6px'}}>
                                <BathtubIcon/>
                            </Box>
                            <Typography>
                            {/* {bath} Baths */}
                            baths
                            </Typography>
                        </Box>
                        <Typography>|</Typography>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box component='span' sx={{marginRight:'6px'}}>
                                <Grid3x3Icon/>
                            </Box>
                            <Typography>
                            {/* {area} Sq Ft */}
                            sq
                            </Typography>
                        </Box>
                    </Box>
                    <Button sx={{
                         color: "#fff",
                         background: "#2dbe6c",
                         border: "1px solid #e5e7ec",
                         padding: "10px 0px",
                         width: "130px",
                         boxShadow: "inset 0 0 0 0 #000",
                         transition: "ease-out 0.5s",
                         borderRadius: "5px",
                         "&:hover": {
                              color: "#fff",
                              boxShadow: "inset 130px 0 0 0 #000",
                              border: "2px solid #2dbe6c",
                         }

                    }} >See Details</Button>
               </CardContent>
          </Card>
                
            </Grid>
            
          <Grid item xs={12} sm={12} md={6} >
          <Box sx={{
            width:'100%',
            height: {
                sm: '400px',
                md: '400px',

            }
          }}>
            <img style={{borderRadius:10,width:'100%',height:'100%'}}  src="http://azim.commonsupport.com/Realshed/assets/images/resource/deals-1.jpg" alt="" />
          </Box>
          </Grid>
            </Grid>
                    </SwiperSlide>
        <SwiperSlide>
            {/* {
                dealsData.map(deal=>{
                    return  <SwiperSlide> */}
                          {/* full component starts here */}
             <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}> 
                {/* first grid item */}
                <Grid item xs={12} sm={12} md={6} >
                <Card sx={{
                    width: '100%',
                    height:{
                        sm:'400px',
                        md:'400px'
                    },
               borderRadius:"10px"
          }}
               fontFamily="'Rubik', sans-serif"
          >     
                <Box sx={{
                display:"flex",
                justifyContent:"space-between",
                padding: "15px 30px"
            }}>
                <Typography sx={{
                    color:'#fff',
                    background: '#f2b241',
                    padding:'5px 10px',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }}>FEATURED</Typography>
                <Typography component='span'><BeenhereIcon sx={{
                    color:'#2dbe6c',
                    fontSize:'30px',
                }}/></Typography>
            </Box>
              
               <CardContent sx={{
                    textAlign: "left",
                    padding: "20px 30px 40px 30px"
               }}>
                    <Typography
                         gutterBottom
                         variant="h5"
                         component="div"
                         color="#2d2929"
                         fontSize={{
                              md: 22
                         }}
                         fontWeight="500"
                    >
                         shoorif
                    </Typography>
                    <Box sx={{ 
                         display: "flex",
                         flexWrap: "wrap",
                         justifyContent: "center",
                     }}>
                         <Box sx={{ width: "50%" }}>
                              <Typography sx={{
                                   fontWeight: 500,
                                   color: "#93959e"
                              }}
                              > 
                                   Start From
                              </Typography>
                              <Typography sx={{
                                   fontWeight: "500",
                                   color: "#2dbe6c",
                                   fontSize: {
                                        md: 22
                                   }
                              }}>
                                4
                                   {/* ${price}.00 */}
                              </Typography>
                         </Box>
                         <Box sx={{ width: "50%", textAlign: "right" }}>

                              <SyncAltIcon
                                   sx={{
                                        border: "1px solid #e5e7ec",
                                        padding: "3px",
                                        height: "40px",
                                        width: "40px",
                                        color: "#a6a7af",
                                        borderRadius: "4px",
                                        transition: "ease-out 0.2s",
                                        "&:hover": {
                                            color:"#fff",
                                            background: "#2dbe6c",
                                            boxShadow: "inset 130px 0 0 0 #2dbe6c",
                                            border: "2px solid #2dbe6c",
                                            cursor: "pointer"
                                       }
                                   }}
                              />
                              <FavoriteBorderIcon
                                   sx={{
                                        border: "1px solid #e5e7ec",
                                        padding: "3px",
                                        height: "40px",
                                        width: "40px",
                                        color: "#a6a7af",
                                        borderRadius: "4px",
                                        marginLeft: "5px",
                                        transition: "ease-out 0.2s",
                                        "&:hover": {
                                            color:"#fff",
                                            background: "#2dbe6c",
                                            boxShadow: "inset 130px 0 0 0 #2dbe6c",
                                            border: "2px solid #2dbe6c",
                                            cursor: "pointer"
                                       }
                                   }}
                              />
                         </Box>
                    </Box>
                    <Typography variant="body2" color="#93959e" margin="10px 0">
                         {/* {description}/ */}
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum cum sint reiciendis rerum itaque autem! Pariatur amet cum dolore voluptates!
                    </Typography>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignItems:'center',
                        padding : '15px 0',
                        marginBottom:'10px',
                        height:'50px',
                    }}>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box component='span' sx={{marginRight:'6px'}}>
                                <HotelIcon/>
                            </Box>
                            <Typography>
                            {/* {bed}  Beds */}
                            beds
                            </Typography>
                        </Box>
                        <Typography>|</Typography>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box component='span' sx={{marginRight:'6px'}}>
                                <BathtubIcon/>
                            </Box>
                            <Typography>
                            {/* {bath} Baths */}
                            baths
                            </Typography>
                        </Box>
                        <Typography>|</Typography>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box component='span' sx={{marginRight:'6px'}}>
                                <Grid3x3Icon/>
                            </Box>
                            <Typography>
                            {/* {area} Sq Ft */}
                            sq
                            </Typography>
                        </Box>
                    </Box>
                    <Button sx={{
                         color: "#fff",
                         background: "#2dbe6c",
                         border: "1px solid #e5e7ec",
                         padding: "10px 0px",
                         width: "130px",
                         boxShadow: "inset 0 0 0 0 #000",
                         transition: "ease-out 0.5s",
                         borderRadius: "5px",
                         "&:hover": {
                              color: "#fff",
                              boxShadow: "inset 130px 0 0 0 #000",
                              border: "2px solid #2dbe6c",
                         }

                    }} >See Details</Button>
               </CardContent>
          </Card>
                
            </Grid>
            
          <Grid item xs={12} sm={12} md={6} >
          <Box sx={{
            width:'100%',
            height: {
                sm: '400px',
                md: '400px',

            }
          }}>
            <img style={{borderRadius:10,width:'100%',height:'100%'}}  src="http://azim.commonsupport.com/Realshed/assets/images/resource/deals-1.jpg" alt="" />
          </Box>
          </Grid>
            </Grid>
                    </SwiperSlide>
        <SwiperSlide>
            {/* {
                dealsData.map(deal=>{
                    return  <SwiperSlide> */}
                          {/* full component starts here */}
             <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}> 
                {/* first grid item */}
                <Grid item xs={12} sm={12} md={6} >
                <Card sx={{
                    width: '100%',
                    height:{
                        sm:'400px',
                        md:'400px'
                    },
               borderRadius:"10px"
          }}
               fontFamily="'Rubik', sans-serif"
          >     
                <Box sx={{
                display:"flex",
                justifyContent:"space-between",
                padding: "15px 30px"
            }}>
                <Typography sx={{
                    color:'#fff',
                    background: '#f2b241',
                    padding:'5px 10px',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }}>FEATURED</Typography>
                <Typography component='span'><BeenhereIcon sx={{
                    color:'#2dbe6c',
                    fontSize:'30px',
                }}/></Typography>
            </Box>
              
               <CardContent sx={{
                    textAlign: "left",
                    padding: "20px 30px 40px 30px"
               }}>
                    <Typography
                         gutterBottom
                         variant="h5"
                         component="div"
                         color="#2d2929"
                         fontSize={{
                              md: 22
                         }}
                         fontWeight="500"
                    >
                         shoorif
                    </Typography>
                    <Box sx={{ 
                         display: "flex",
                         flexWrap: "wrap",
                         justifyContent: "center",
                     }}>
                         <Box sx={{ width: "50%" }}>
                              <Typography sx={{
                                   fontWeight: 500,
                                   color: "#93959e"
                              }}
                              > 
                                   Start From
                              </Typography>
                              <Typography sx={{
                                   fontWeight: "500",
                                   color: "#2dbe6c",
                                   fontSize: {
                                        md: 22
                                   }
                              }}>
                                4
                                   {/* ${price}.00 */}
                              </Typography>
                         </Box>
                         <Box sx={{ width: "50%", textAlign: "right" }}>

                              <SyncAltIcon
                                   sx={{
                                        border: "1px solid #e5e7ec",
                                        padding: "3px",
                                        height: "40px",
                                        width: "40px",
                                        color: "#a6a7af",
                                        borderRadius: "4px",
                                        transition: "ease-out 0.2s",
                                        "&:hover": {
                                            color:"#fff",
                                            background: "#2dbe6c",
                                            boxShadow: "inset 130px 0 0 0 #2dbe6c",
                                            border: "2px solid #2dbe6c",
                                            cursor: "pointer"
                                       }
                                   }}
                              />
                              <FavoriteBorderIcon
                                   sx={{
                                        border: "1px solid #e5e7ec",
                                        padding: "3px",
                                        height: "40px",
                                        width: "40px",
                                        color: "#a6a7af",
                                        borderRadius: "4px",
                                        marginLeft: "5px",
                                        transition: "ease-out 0.2s",
                                        "&:hover": {
                                            color:"#fff",
                                            background: "#2dbe6c",
                                            boxShadow: "inset 130px 0 0 0 #2dbe6c",
                                            border: "2px solid #2dbe6c",
                                            cursor: "pointer"
                                       }
                                   }}
                              />
                         </Box>
                    </Box>
                    <Typography variant="body2" color="#93959e" margin="10px 0">
                         {/* {description}/ */}
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum cum sint reiciendis rerum itaque autem! Pariatur amet cum dolore voluptates!
                    </Typography>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignItems:'center',
                        padding : '15px 0',
                        marginBottom:'10px',
                        height:'50px',
                    }}>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box component='span' sx={{marginRight:'6px'}}>
                                <HotelIcon/>
                            </Box>
                            <Typography>
                            {/* {bed}  Beds */}
                            beds
                            </Typography>
                        </Box>
                        <Typography>|</Typography>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box component='span' sx={{marginRight:'6px'}}>
                                <BathtubIcon/>
                            </Box>
                            <Typography>
                            {/* {bath} Baths */}
                            baths
                            </Typography>
                        </Box>
                        <Typography>|</Typography>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box component='span' sx={{marginRight:'6px'}}>
                                <Grid3x3Icon/>
                            </Box>
                            <Typography>
                            {/* {area} Sq Ft */}
                            sq
                            </Typography>
                        </Box>
                    </Box>
                    <Button sx={{
                         color: "#fff",
                         background: "#2dbe6c",
                         border: "1px solid #e5e7ec",
                         padding: "10px 0px",
                         width: "130px",
                         boxShadow: "inset 0 0 0 0 #000",
                         transition: "ease-out 0.5s",
                         borderRadius: "5px",
                         "&:hover": {
                              color: "#fff",
                              boxShadow: "inset 130px 0 0 0 #000",
                              border: "2px solid #2dbe6c",
                         }

                    }} >See Details</Button>
               </CardContent>
          </Card>
                
            </Grid>
            
          <Grid item xs={12} sm={12} md={6} >
          <Box sx={{
            width:'100%',
            height: {
                sm: '400px',
                md: '400px',

            }
          }}>
            <img style={{borderRadius:10,width:'100%',height:'100%'}}  src="http://azim.commonsupport.com/Realshed/assets/images/resource/deals-1.jpg" alt="" />
          </Box>
          </Grid>
            </Grid>
                    </SwiperSlide>
        <SwiperSlide>
            {/* {
                dealsData.map(deal=>{
                    return  <SwiperSlide> */}
                          {/* full component starts here */}
             <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}> 
                {/* first grid item */}
                <Grid item xs={12} sm={12} md={6} >
                <Card sx={{
                    width: '100%',
                    height:{
                        sm:'400px',
                        md:'400px'
                    },
               borderRadius:"10px"
          }}
               fontFamily="'Rubik', sans-serif"
          >     
                <Box sx={{
                display:"flex",
                justifyContent:"space-between",
                padding: "15px 30px"
            }}>
                <Typography sx={{
                    color:'#fff',
                    background: '#f2b241',
                    padding:'5px 10px',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }}>FEATURED</Typography>
                <Typography component='span'><BeenhereIcon sx={{
                    color:'#2dbe6c',
                    fontSize:'30px',
                }}/></Typography>
            </Box>
              
               <CardContent sx={{
                    textAlign: "left",
                    padding: "20px 30px 40px 30px"
               }}>
                    <Typography
                         gutterBottom
                         variant="h5"
                         component="div"
                         color="#2d2929"
                         fontSize={{
                              md: 22
                         }}
                         fontWeight="500"
                    >
                         shoorif
                    </Typography>
                    <Box sx={{ 
                         display: "flex",
                         flexWrap: "wrap",
                         justifyContent: "center",
                     }}>
                         <Box sx={{ width: "50%" }}>
                              <Typography sx={{
                                   fontWeight: 500,
                                   color: "#93959e"
                              }}
                              > 
                                   Start From
                              </Typography>
                              <Typography sx={{
                                   fontWeight: "500",
                                   color: "#2dbe6c",
                                   fontSize: {
                                        md: 22
                                   }
                              }}>
                                4
                                   {/* ${price}.00 */}
                              </Typography>
                         </Box>
                         <Box sx={{ width: "50%", textAlign: "right" }}>

                              <SyncAltIcon
                                   sx={{
                                        border: "1px solid #e5e7ec",
                                        padding: "3px",
                                        height: "40px",
                                        width: "40px",
                                        color: "#a6a7af",
                                        borderRadius: "4px",
                                        transition: "ease-out 0.2s",
                                        "&:hover": {
                                            color:"#fff",
                                            background: "#2dbe6c",
                                            boxShadow: "inset 130px 0 0 0 #2dbe6c",
                                            border: "2px solid #2dbe6c",
                                            cursor: "pointer"
                                       }
                                   }}
                              />
                              <FavoriteBorderIcon
                                   sx={{
                                        border: "1px solid #e5e7ec",
                                        padding: "3px",
                                        height: "40px",
                                        width: "40px",
                                        color: "#a6a7af",
                                        borderRadius: "4px",
                                        marginLeft: "5px",
                                        transition: "ease-out 0.2s",
                                        "&:hover": {
                                            color:"#fff",
                                            background: "#2dbe6c",
                                            boxShadow: "inset 130px 0 0 0 #2dbe6c",
                                            border: "2px solid #2dbe6c",
                                            cursor: "pointer"
                                       }
                                   }}
                              />
                         </Box>
                    </Box>
                    <Typography variant="body2" color="#93959e" margin="10px 0">
                         {/* {description}/ */}
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum cum sint reiciendis rerum itaque autem! Pariatur amet cum dolore voluptates!
                    </Typography>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignItems:'center',
                        padding : '15px 0',
                        marginBottom:'10px',
                        height:'50px',
                    }}>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box component='span' sx={{marginRight:'6px'}}>
                                <HotelIcon/>
                            </Box>
                            <Typography>
                            {/* {bed}  Beds */}
                            beds
                            </Typography>
                        </Box>
                        <Typography>|</Typography>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box component='span' sx={{marginRight:'6px'}}>
                                <BathtubIcon/>
                            </Box>
                            <Typography>
                            {/* {bath} Baths */}
                            baths
                            </Typography>
                        </Box>
                        <Typography>|</Typography>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box component='span' sx={{marginRight:'6px'}}>
                                <Grid3x3Icon/>
                            </Box>
                            <Typography>
                            {/* {area} Sq Ft */}
                            sq
                            </Typography>
                        </Box>
                    </Box>
                    <Button sx={{
                         color: "#fff",
                         background: "#2dbe6c",
                         border: "1px solid #e5e7ec",
                         padding: "10px 0px",
                         width: "130px",
                         boxShadow: "inset 0 0 0 0 #000",
                         transition: "ease-out 0.5s",
                         borderRadius: "5px",
                         "&:hover": {
                              color: "#fff",
                              boxShadow: "inset 130px 0 0 0 #000",
                              border: "2px solid #2dbe6c",
                         }

                    }} >See Details</Button>
               </CardContent>
          </Card>
                
            </Grid>
            
          <Grid item xs={12} sm={12} md={6} >
          <Box sx={{
            width:'100%',
            height: {
                sm: '400px',
                md: '400px',

            }
          }}>
            <img style={{borderRadius:10,width:'100%',height:'100%'}}  src="http://azim.commonsupport.com/Realshed/assets/images/resource/deals-1.jpg" alt="" />
          </Box>
          </Grid>
            </Grid>
                    </SwiperSlide>
        <SwiperSlide>
            {/* {
                dealsData.map(deal=>{
                    return  <SwiperSlide> */}
                          {/* full component starts here */}
             <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}> 
                {/* first grid item */}
                <Grid item xs={12} sm={12} md={6} >
                <Card sx={{
                    width: '100%',
                    height:{
                        sm:'400px',
                        md:'400px'
                    },
               borderRadius:"10px"
          }}
               fontFamily="'Rubik', sans-serif"
          >     
                <Box sx={{
                display:"flex",
                justifyContent:"space-between",
                padding: "15px 30px"
            }}>
                <Typography sx={{
                    color:'#fff',
                    background: '#f2b241',
                    padding:'5px 10px',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }}>FEATURED</Typography>
                <Typography component='span'><BeenhereIcon sx={{
                    color:'#2dbe6c',
                    fontSize:'30px',
                }}/></Typography>
            </Box>
              
               <CardContent sx={{
                    textAlign: "left",
                    padding: "20px 30px 40px 30px"
               }}>
                    <Typography
                         gutterBottom
                         variant="h5"
                         component="div"
                         color="#2d2929"
                         fontSize={{
                              md: 22
                         }}
                         fontWeight="500"
                    >
                         shoorif
                    </Typography>
                    <Box sx={{ 
                         display: "flex",
                         flexWrap: "wrap",
                         justifyContent: "center",
                     }}>
                         <Box sx={{ width: "50%" }}>
                              <Typography sx={{
                                   fontWeight: 500,
                                   color: "#93959e"
                              }}
                              > 
                                   Start From
                              </Typography>
                              <Typography sx={{
                                   fontWeight: "500",
                                   color: "#2dbe6c",
                                   fontSize: {
                                        md: 22
                                   }
                              }}>
                                4
                                   {/* ${price}.00 */}
                              </Typography>
                         </Box>
                         <Box sx={{ width: "50%", textAlign: "right" }}>

                              <SyncAltIcon
                                   sx={{
                                        border: "1px solid #e5e7ec",
                                        padding: "3px",
                                        height: "40px",
                                        width: "40px",
                                        color: "#a6a7af",
                                        borderRadius: "4px",
                                        transition: "ease-out 0.2s",
                                        "&:hover": {
                                            color:"#fff",
                                            background: "#2dbe6c",
                                            boxShadow: "inset 130px 0 0 0 #2dbe6c",
                                            border: "2px solid #2dbe6c",
                                            cursor: "pointer"
                                       }
                                   }}
                              />
                              <FavoriteBorderIcon
                                   sx={{
                                        border: "1px solid #e5e7ec",
                                        padding: "3px",
                                        height: "40px",
                                        width: "40px",
                                        color: "#a6a7af",
                                        borderRadius: "4px",
                                        marginLeft: "5px",
                                        transition: "ease-out 0.2s",
                                        "&:hover": {
                                            color:"#fff",
                                            background: "#2dbe6c",
                                            boxShadow: "inset 130px 0 0 0 #2dbe6c",
                                            border: "2px solid #2dbe6c",
                                            cursor: "pointer"
                                       }
                                   }}
                              />
                         </Box>
                    </Box>
                    <Typography variant="body2" color="#93959e" margin="10px 0">
                         {/* {description}/ */}
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum cum sint reiciendis rerum itaque autem! Pariatur amet cum dolore voluptates!
                    </Typography>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignItems:'center',
                        padding : '15px 0',
                        marginBottom:'10px',
                        height:'50px',
                    }} >
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box component='span' sx={{marginRight:'6px'}}>
                                <HotelIcon/>
                            </Box>
                            <Typography>
                            {/* {bed}  Beds */}
                            beds
                            </Typography>
                        </Box>
                        <Typography>|</Typography>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box component='span' sx={{marginRight:'6px'}}>
                                <BathtubIcon/>
                            </Box>
                            <Typography>
                            {/* {bath} Baths */}
                            baths
                            </Typography>
                        </Box>
                        <Typography>|</Typography>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Box component='span' sx={{marginRight:'6px'}}>
                                <Grid3x3Icon/>
                            </Box>
                            <Typography>
                            {/* {area} Sq Ft */}
                            sq
                            </Typography>
                        </Box>
                    </Box>
                    <Button sx={{
                         color: "#fff",
                         background: "#2dbe6c",
                         border: "1px solid #e5e7ec",
                         padding: "10px 0px",
                         width: "130px",
                         boxShadow: "inset 0 0 0 0 #000",
                         transition: "ease-out 0.5s",
                         borderRadius: "5px",
                         "&:hover": {
                              color: "#fff",
                              boxShadow: "inset 130px 0 0 0 #000",
                              border: "2px solid #2dbe6c",
                         }

                    }} >See Details</Button>
               </CardContent>
          </Card>
                
            </Grid>
            
          <Grid item xs={12} sm={12} md={6} >
          <Box sx={{
            width:'100%',
            height: {
                sm: '400px',
                md: '400px',

            }
          }}>
            <img style={{borderRadius:10,width:'100%',height:'100%'}}  src="http://azim.commonsupport.com/Realshed/assets/images/resource/deals-1.jpg" alt="" />
          </Box>
          </Grid>
            </Grid>
                    </SwiperSlide>
{/*                    
                })
            } */}
        {/* </SwiperSlide> */}
        {/* <SwiperSlide>
            <SingleDeal deal={dealsData[0]}></SingleDeal>
        </SwiperSlide> */}
        
      </Swiper>





           {/* {
                dealsData.map(deal=>{
                    <SingleDeal deal={deal}></SingleDeal>
                })
           } */}
        </Box>
    );
};

export default HotProperty;