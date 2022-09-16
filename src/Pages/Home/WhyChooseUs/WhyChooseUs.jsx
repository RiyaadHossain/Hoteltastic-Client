import { Button, Typography } from '@mui/material';
import CabinIcon from '@mui/icons-material/Cabin';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FoundationIcon from '@mui/icons-material/Foundation';
import { Box } from '@mui/system';
import React from 'react';

const WhyChooseUs = () => {
     // const chooseData = [
     //      {
     //           icon: HouseIcon,
     //           title: "Excellent Reputation",
     //           description:"Lorem ipsum dolor sit consectetur sed eiusm tempor."
     //      }
     // ]
     return (
          <Box sx={{
               fontFamily: "'Rubik', sans-serif",
               padding: "64px 70px 63px 70px",
               background: "#1b1d21",
               color: "white",
               width: "90%",
               margin: "0 auto",
               borderRadius: "10px",
               marginTop: "-90px"
          }}>
               <Box sx={{
                    display: "flex",
                    flexDirection:{
                         
                    },
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: "30px",
                    borderBottom: "1px solid #363535"

               }}>
                    <Box>
                         <Typography
                              sx={{
                                   fontSize: {
                                        xs: "38px",
                                        sm: "45px",
                                        md: "18px",
                                   },
                                   textTransform: "uppercase",
                                   fontFamily: "'Rubik', sans-serif",
                                   fontWeight: "500"

                              }}
                              fontWeight="bold"
                              color="#2dbe6c"
                         >
                              Why Choose Us?
                         </Typography>
                         <Typography
                              sx={{
                                   fontWeight: "500",
                                   fontFamily: "'Rubik', sans-serif",
                                   fontSize: {
                                        xs: "38px",
                                        sm: "45px",
                                        md: "40px",
                                   },
                              }}
                              fontWeight="bold"
                         >
                              Reasons To Choose Us
                         </Typography>
                    </Box>
                    <Button sx={{
                         textTransform: "capitalize",
                         background: "#2dbe6c",
                         color: "white",
                         border: "3px solid #2dbe6c",
                         height: "70px",
                         fontSize: "20px",
                         width: "200px",
                         boxShadow: "inset 0 0 0 0 #1b1d21",
                         transition: "ease-out 0.5s",
                         "&:hover": {
                              boxShadow: "inset 200px 0 0 0 #1b1d21",

                         }
                    }} >All Categories</Button>
               </Box>

               <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
                    <Box sx={{ padding: "0 50px", borderRight: "1px solid #363535" }}>
                         <CabinIcon style={{ color: "rgb(242, 178, 65)", fontSize: "60px" }}></CabinIcon>
                         <Typography
                              sx={{
                                   fontWeight: "500",
                                   fontFamily: "'Rubik', sans-serif",
                                   fontSize: {
                                        xs: "38px",
                                        sm: "45px",
                                        md: "25px",
                                   },
                              }}
                              fontWeight="bold"
                         >
                              Reasons To Choose Us
                         </Typography>
                         <Typography variant="body2" color="#93959e" margin="10px 0">
                              Lorem ipsum dolor sit consectetur sed eiusm tempor.
                         </Typography>
                    </Box>

                    <Box sx={{ padding: "0 50px", borderRight: "1px solid #363535" }}>
                         <ApartmentIcon style={{ color: "rgb(45, 190, 108)", fontSize: "60px" }}></ApartmentIcon>
                         <Typography
                              sx={{
                                   fontWeight: "500",
                                   fontFamily: "'Rubik', sans-serif",
                                   fontSize: {
                                        xs: "38px",
                                        sm: "45px",
                                        md: "25px",
                                   },
                              }}
                              fontWeight="bold"
                         >
                              Reasons To Choose Us
                         </Typography>
                         <Typography variant="body2" color="#93959e" margin="10px 0">
                              Lorem ipsum dolor sit consectetur sed eiusm tempor.
                         </Typography>
                    </Box>
                    <Box sx={{ padding: "0 50px", borderRight: "1px solid #363535" }}>
                         <FoundationIcon style={{ color: "rgb(249, 76, 76)", fontSize: "60px" }}></FoundationIcon>
                         <Typography
                              sx={{
                                   fontWeight: "500",
                                   fontFamily: "'Rubik', sans-serif",
                                   fontSize: {
                                        xs: "38px",
                                        sm: "45px",
                                        md: "25px",
                                   },
                              }}
                              fontWeight="bold"
                         >
                              Reasons To Choose Us
                         </Typography>
                         <Typography variant="body2" color="#93959e" margin="10px 0">
                              Lorem ipsum dolor sit consectetur sed eiusm tempor.
                         </Typography>
                    </Box>

               </Box>




          </Box >
     );
};

export default WhyChooseUs;