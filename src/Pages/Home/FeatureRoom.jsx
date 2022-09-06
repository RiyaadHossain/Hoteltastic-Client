import React from 'react';
import Card from '@mui/material/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const FeatureRoom = ({ feature }) => {
     const { id, featured, authorThumb, authorName, status, propertyName, propertyImage, propertyDesciption, startFrom, beds, baths, sqFt, saved } = feature
     return (
          <Card sx={{
               maxWidth: {
                    md: 370
               },
               margin: "0 15px",
               borderRadius:"10px"
          }}
               fontFamily="'Rubik', sans-serif"
          >
               <CardMedia
                    component="img"
                    alt="green iguana"
                    height={{
                         md: 250
                    }}
                    image={propertyImage}
               />
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
                         {propertyName}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
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
                                   ${startFrom}
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
                                        marginLeft: "5px"
                                   }}
                              />
                         </Box>
                    </Box>
                    <Typography variant="body2" color="#93959e" margin="10px 0">
                         {propertyDesciption}
                    </Typography>
                    <Button sx={{
                         color: "#93959e",
                         border: "1px solid #e5e7ec",
                         padding: "8px 0px",
                         width: "130px",
                         boxShadow: "inset 0 0 0 0 #2dbe6c",
                         transition: "ease-out 0.5s",
                         "&:hover": {
                              color: "white",
                              boxShadow: "inset 130px 0 0 0 #2dbe6c",
                              border: "1px solid #2dbe6c",
                         }

                    }} >See Details</Button>
               </CardContent>
               {/* <CardActions>
               </CardActions> */}
          </Card>
     );
};

export default FeatureRoom;