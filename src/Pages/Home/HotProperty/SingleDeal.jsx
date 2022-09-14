import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BeenhereIcon from "@mui/icons-material/Beenhere";

const SingleDeal = ({ deal }) => {
  const { name, price, description, img, bed, bath, area } = deal;
  console.log(deal, "deal");
  return (
    <>
      {/* full component starts here */}
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        {/* first grid item */}
        <Grid item xs={12} sm={12} md={6}>
          <Card
            sx={{
              width: "100%",
              height: {
                sm: "400px",
                md: "400px",
              },
              borderRadius: "10px",
            }}
            fontFamily="'Rubik', sans-serif"
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "15px 30px",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  background: "#f2b241",
                  padding: "5px 10px",
                  fontWeight: "bold",
                  borderRadius: "5px",
                }}
              >
                FEATURED
              </Typography>
              <Typography component="span">
                <BeenhereIcon
                  sx={{
                    color: "#2dbe6c",
                    fontSize: "30px",
                  }}
                />
              </Typography>
            </Box>

            <CardContent
              sx={{
                textAlign: "left",
                padding: "20px 30px 40px 30px",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="#2d2929"
                fontSize={{
                  md: 22,
                }}
                fontWeight="500"
              >
                {name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ width: "50%" }}>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: "#93959e",
                    }}
                  >
                    Start From
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      color: "#2dbe6c",
                      fontSize: {
                        md: 22,
                      },
                    }}
                  >
                    ${price}.00
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
                        color: "#fff",
                        background: "#2dbe6c",
                        boxShadow: "inset 130px 0 0 0 #2dbe6c",
                        border: "2px solid #2dbe6c",
                        cursor: "pointer",
                      },
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
                        color: "#fff",
                        background: "#2dbe6c",
                        boxShadow: "inset 130px 0 0 0 #2dbe6c",
                        border: "2px solid #2dbe6c",
                        cursor: "pointer",
                      },
                    }}
                  />
                </Box>
              </Box>
              <Typography variant="body2" color="#93959e" margin="10px 0">
                {description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px 0",
                  marginBottom: "10px",
                  height: "50px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box component="span" sx={{ marginright: "6px" }}>
                    <HotelIcon />
                  </Box>
                  <Typography>{bed} Beds</Typography>
                </Box>
                <Typography>|</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box component="span" sx={{ marginright: "6px" }}>
                    <BathtubIcon />
                  </Box>
                  <Typography>{bath} Baths</Typography>
                </Box>
                <Typography>|</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box component="span" sx={{ marginright: "6px" }}>
                    <Grid3x3Icon />
                  </Box>
                  <Typography>{area} Sq Ft</Typography>
                </Box>
              </Box>
              <Button
                sx={{
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
                  },
                }}
              >
                See Details
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: {
                sm: "400px",
                md: "400px",
              },
            }}
          >
            <img
              style={{
                borderRadius: 10,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src="http://azim.commonsupport.com/Realshed/assets/images/resource/deals-1.jpg"
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SingleDeal;
