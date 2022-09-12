import { Button, createTheme, List, ListItemText, TextareaAutosize, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import RoomIcon from '@mui/icons-material/Room';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import React from 'react';

const PropertyContact = () => {
     return (
          <Box sx={{
               boxShadow: "0 15px 25px 0px rgb(0 0 0 / 8%)",
               borderRadius: "10px",
               marginBottom: "30px",
               padding: "25px 30px 30px 30px",
          }}>
               <Box sx={{
                    display: "flex",
                    borderBottom: "1px solid #e5e7ec",
                    paddingBottom: "10px",
               }}>
                    <Box>
                         <img src="http://azim.commonsupport.com/Realshed/assets/images/resource/author-1.jpg" alt="" />
                    </Box>
                    <Box sx={{
                         width: "calc(100% - 90px)",
                         marginLeft: "20px"
                    }}>
                         <Typography sx={{
                              fontSize: "20px",
                              // lineHeight: "30px",
                              fontWeight: "500",
                              // marginBottom: "8px",

                         }}
                         >
                              Michael Bean
                         </Typography>
                         <List sx={{ width: '100%', }}>
                              <Box sx={{
                                   display: "flex",
                                   alignItems: "start",
                                   marginBottom: "10px"
                              }}>
                                   <RoomIcon sx={{ color: "#2dbe6c", fontSize: "19px", }} />
                                   <Typography sx={{
                                        fontSize: "14px",
                                        // width: "calc(100% - 10px)",
                                        marginLeft: "10px",
                                        color: "rgb(147, 149, 158)"
                                   }}>
                                        84 St. John Wood High Street, St Johns Wood
                                   </Typography>
                              </Box>
                              <Box sx={{
                                   display: "flex",
                                   alignItems: "start",
                                   color: "#2dbe6c",
                              }}>
                                   <PhoneEnabledIcon sx={{ fontSize: "19px", }} />
                                   <Typography sx={{
                                        fontSize: "14px",
                                        marginLeft: "10px",
                                        fontWeight: "600",
                                        marginBottom: "10px",
                                        transition: ".3s",
                                        borderBottom: "1px solid white",
                                        cursor: "pointer",
                                        ":hover": {
                                             borderBottom: "1px solid"
                                        }
                                   }}>
                                        01978870125
                                   </Typography>
                              </Box>
                              <Button variant='outlined' size="medium" sx={{
                                   color: "#2dbe6c",
                                   border: "1px solid #2dbe6c",
                                   ":hover": {
                                        background: "#2dbe6c",
                                        border: "1px solid #2dbe6c",
                                        color: "white"
                                   }

                              }}>View Listing</Button>
                         </List>
                    </Box>
               </Box>
               <Box sx={{
                    borderTop: "1px solid #e5e7ec",
                    paddingTop: "20px",
                    marginTop: "3px",
               }}>
                    <form >
                         <TextField
                              sx={{
                                   background: "none",
                                   width: "100%",
                                   margin: "8px 0px 10px 0px",
                              }}
                              id="outlined-basic" label="Name" variant="outlined"
                              multiline
                         />
                         <TextField
                              sx={{
                                   background: "none",
                                   width: "100%",
                                   margin: "8px 0px 10px 0px",
                              }}
                              id="outlined-basic" label="Email" variant="outlined"
                              multiline
                         />
                         <TextField
                              sx={{
                                   background: "none",
                                   width: "100%",
                                   margin: "8px 0px 10px 0px",
                              }}
                              id="outlined-basic" label="Phone" variant="outlined"
                              multiline
                         />
                         <TextField
                              sx={{
                                   background: "none",
                                   width: "100%",
                                   margin: "8px 0px 10px 0px",
                              }}
                              id="outlined-multiline-static"
                              label="Message"
                              multiline
                              rows={4}
                         />
                         <Button variant='outlined'  sx={{
                              background: "#2dbe6c",
                              color: "white",
                              border: "1px solid #2dbe6c",
                              margin: "8px 0px 10px 0px",
                              fontWeight: "500",
                              padding:"10px 0",
                              width:"100%",
                              ":hover": {
                                   background: "white",
                                   border: "1px solid #2dbe6c",
                                   color: "#2dbe6c",
                              }

                         }}>Send Message</Button>
                    </form>
               </Box>
          </Box>
     );
};

export default PropertyContact;