import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const TopPlaces = () => {
     return (
          <Box sx={{
               textAlign: "center",
               fontFamily: "'Rubik', sans-serif",
               padding: "80px 0px 120px 0px"
          }}>
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
                    Top Places
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
                    Most Popular Places
               </Typography>

               <Typography
                    sx={{
                         maxWidth: "50%",
                         margin: "0 auto"
                    }}
                    color="#93959e"
               >
                    Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmod tempor incididunt
                    labore dolore magna aliqua enim.
               </Typography>


               <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: "30px",
               }}>

                    <Box marginRight={5} sx={{
                         position: "relative",
                         overflow: "hidden",
                    }}>
                         <Box sx={{
                              transition: "ease-out 0.3s",
                              "&:hover": {
                                   transform: "scale(1.1)"
                              }
                         }}>
                              <img src="https://i.ibb.co/56m0yCw/place-1.jpg" alt="" />
                         </Box>
                         <Box sx={{
                              width: "80%",
                              marginLeft: "auto",
                              marginRight: "auto",
                              left: 0,
                              right: 0,
                              textAlign: "center",
                              position: "absolute",
                              bottom: "20px",
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
                    <Box sx={{
                         display: "flex",
                         flexDirection: "column",
                         justifyContent: "space-between"
                    }}>
                         <Box sx={{
                              display: "flex",
                              justifyContent: "space-between"
                         }}>
                              <Box sx={{ position: "relative", overflow: "hidden", }}>
                                   <Box sx={{
                                        transition: "ease-out 0.3s",

                                        "&:hover": {
                                             transform: "scale(1.1)"
                                        }
                                   }}>
                                        <img marginRight={5} src="https://i.ibb.co/nmY9HnJ/place-2.jpg" alt="" />
                                   </Box>
                                   <Box sx={{
                                        width: "80%",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        left: 0,
                                        right: 0,
                                        textAlign: "center",
                                        position: "absolute",
                                        bottom: "20px",
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
                                             San Francisco
                                        </Typography>
                                        <Typography
                                             color="#93959e"
                                        >
                                             05 Properties
                                        </Typography>
                                   </Box>
                              </Box>
                              <Box sx={{ position: "relative", overflow: "hidden", }}>
                                   <Box sx={{
                                        transition: "ease-out 0.3s",

                                        "&:hover": {
                                             transform: "scale(1.1)"
                                        }
                                   }}>
                                        <img src="https://i.ibb.co/bR70vCS/place-3.jpg" alt="" />
                                   </Box>
                                   <Box sx={{
                                        width: "80%",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        left: 0,
                                        right: 0,
                                        textAlign: "center",
                                        position: "absolute",
                                        bottom: "20px",
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
                                             Las Vegas
                                        </Typography>
                                        <Typography
                                             color="#93959e"
                                        >
                                             02 Properties
                                        </Typography>
                                   </Box>
                              </Box>
                         </Box>
                         <Box sx={{ position: "relative", overflow: "hidden", }}>
                              <Box sx={{
                                   transition: "ease-out 0.3s",

                                   "&:hover": {
                                        transform: "scale(1.1)"
                                   }
                              }}>
                                   <img src="https://i.ibb.co/wrKVcTZ/place-4.jpg" alt="" />
                              </Box>
                              <Box sx={{
                                   width: "80%",
                                   marginLeft: "auto",
                                   marginRight: "auto",
                                   left: 0,
                                   right: 0,
                                   textAlign: "center",
                                   position: "absolute",
                                   bottom: "20px",
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
                                        New York City
                                   </Typography>
                                   <Typography
                                        color="#93959e"
                                   >
                                        15 Properties
                                   </Typography>
                              </Box>
                         </Box>
                    </Box>
               </Box>

          </Box >
     );
};

export default TopPlaces;