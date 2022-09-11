import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

function Room() {
  return (
    <Card sx={{ display: "flex", maxWidth: 650, maxHeight: 300, margin: "0 auto" }}>
      <CardMedia
        component="img"
        sx={{ width: "50%" }}
        image="https://mui.com/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
          Full Name  {/* {propertyName} */}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "50%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: "#93959e",
                }}
              >
                Family Home For Sale
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
                $ 977{/* {startFrom} */}
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
                }}
              />
              <FavoriteBorderIcon
                sx={{
                  border: "1px solid #e5e7ec",
                  padding: "3px",
                  height: "33px",
                  width: "33px",
                  color: "#a6a7af",
                  borderRadius: "4px",
                  marginLeft: "5px",
                }}
              />
            </Box>
          </Box>
          <Typography variant="body2" color="#93959e" margin="10px 0">
            {/* {propertyDesciption} */} Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, accusamus animi. Deserunt modi nesciunt dolorum!
          </Typography>
          <Button
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
              },
            }}
          >
            See Details
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
}

export default Room;
