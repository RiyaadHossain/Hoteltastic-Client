import React from 'react';
import Card from '@mui/material/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useDispatch,  useSelector } from 'react-redux';
import { postFavourites } from '../../../Store/user/userAction';

const FeatureRoom = ({ room }) => {
     const { /*  featured, authorThumb, authorName, status, beds, baths, sqFt, saved, */
          _id, propertyName, propertyImage, propertyDesciption, startFrom, } = room;
     const user = useSelector((state) => state.auth).user.user;
	const dispatch = useDispatch()

     // console.log(user);
     const setFavorite = (roomId) => {
          const favoriteInfo = {
               room: roomId,
               user: user._id
          }
          dispatch(postFavourites(favoriteInfo))
     }
     const navigate = useNavigate();
     return (
          <Card sx={{
               maxWidth: {
                    xs: "80%",
                    sm: 300,
                    md: 370
               },
               margin: "15px 15px",
               borderRadius: "10px"
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
                                        height: "33px",
                                        width: "33px",
                                        color: "#a6a7af",
                                        borderRadius: "4px",
                                        transition: "ease-out 0.2s",
                                        "&:hover": {
                                             color: "#fff",
                                             background: "#2dbe6c",
                                             cursor: "pointer"
                                        }
                                   }}
                              />
                              <FavoriteBorderIcon
                                   onClick={() => setFavorite(room._id)}
                                   sx={{
                                        border: "1px solid #e5e7ec",
                                        padding: "3px",
                                        height: "33px",
                                        width: "33px",
                                        color: "#a6a7af",
                                        borderRadius: "4px",
                                        marginLeft: "5px",
                                        transition: "ease-out 0.2s",
                                        "&:hover": {
                                             color: "#fff",
                                             background: "#2dbe6c",
                                             cursor: "pointer"
                                        }
                                   }}
                              />
                         </Box>
                    </Box>
                    <Typography variant="body2" color="#93959e" margin="10px 0">
                         {propertyDesciption}
                    </Typography>
                    <Button
                         onClick={() => navigate(`/property/${_id}`)}
                         sx={{
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
          </Card>
     );
};

export default FeatureRoom;