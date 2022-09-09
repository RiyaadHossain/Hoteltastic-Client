import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const WhyChooseUs = () => {
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
                    justifyContent: "space-between",
                    alignItems:"center"
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
                         textTransform:"capitalize",
                         background:"#2dbe6c",
                         color:"white",
                         border: "3px solid #2dbe6c",
                         height:"70px",
                         fontSize:"20px",
                         width: "200px",
                         boxShadow: "inset 0 0 0 0 #1b1d21",
                         transition: "ease-out 0.5s",
                         "&:hover": {
                              boxShadow: "inset 200px 0 0 0 #1b1d21",
                              
                         }

                    }} >All Categories</Button>
               </Box>




          </Box >
     );
};

export default WhyChooseUs;