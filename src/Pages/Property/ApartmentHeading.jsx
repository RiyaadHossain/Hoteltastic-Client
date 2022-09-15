import { Avatar, Box, Button, Rating, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ApartmentHeading = () => {
  const value = 4.5;
  return (
    // main container
    <Box
      sx={{
        alignItems: "center",
        width: "100%",
        height: "10rem",
        padding: {
          xs: "10px 20px",
          sm: "20px 40px",
          md: "30px 40px",
        },
        borderRadius: "10px",
        // boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        // boxShadow:'35px 35px 70px #bebebe, -35px -35px 30px #ffffff',
        // boxShadow:  ['-35px -35px 70px #ffffff']
      }}
    >
      {/* top container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "15px",
                sm: "25px",
                md: "30px",
              },
            }}
          >
            The Citizen Apartment
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Button
              sx={{
                color: "#fff",
                background: " #f2b241",
                padding: "5px 10px",
                fontWeight: "bold",
                borderRadius: "5px",
                fontSize: "12px",
                marginRight: "10px",
                "&:hover": {
                  background: "#f2b241",
                  color: "#fff",
                },
              }}
            >
              BUILDING
            </Button>
            <Button
              sx={{
                color: "#fff",
                background: " #7360ff",
                padding: "5px 10px",
                fontWeight: "bold",
                borderRadius: "5px",
                fontSize: "12px",
                "&:hover": {
                  background: "#7360ff",
                  color: "#fff",
                },
              }}
            >
              FOR BUY
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography
            component="span"
            sx={{
              color: "#2dbe6c",
              marginLeft: "10px",
              fontSize: {
                xs: "15px",
                sm: "25px",
                md: "30px",
              },
              fontWeight: "bold",
            }}
          >
            $30,000.00
          </Typography>
        </Box>
      </Box>
      {/* down ocntainer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <Box> */}
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          {/* </Box> */}
          <Typography
            sx={{
              margin: "0px 10px",
            }}
          >
            Jubin Nautiyal
          </Typography>
          {/* <Box> */}
          <Rating
            size="small"
            name="text-feedback"
            value={value}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {/* <Box sx={{ ml: 2 }}>{labels[value]}</Box> */}
          {/* </Box> */}
        </Box>
        <Box>
          <ShareIcon
            sx={{
              border: "1px solid #e5e7ec",
              padding: "3px",
              height: "33px",
              width: "33px",
              color: "#a6a7af",
              borderRadius: "4px",
              marginRight: "10px",
              "&:hover": {
                color: "#fff",
                background: "#2dbe6c",
                boxShadow: "inset 130px 0 0 0 #2dbe6c",
                border: "2px solid #2dbe6c",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
              },
            }}
          />
          <PrintIcon
            sx={{
              border: "1px solid #e5e7ec",
              padding: "3px",
              height: "33px",
              width: "33px",
              color: "#a6a7af",
              borderRadius: "4px",
              marginRight: "10px",
              "&:hover": {
                color: "#fff",
                background: "#2dbe6c",
                boxShadow: "inset 130px 0 0 0 #2dbe6c",
                border: "2px solid #2dbe6c",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
              },
            }}
          />
          <SyncAltIcon
            sx={{
              border: "1px solid #e5e7ec",
              padding: "3px",
              height: "33px",
              width: "33px",
              color: "#a6a7af",
              borderRadius: "4px",
              marginRight: "10px",
              "&:hover": {
                color: "#fff",
                background: "#2dbe6c",
                boxShadow: "inset 130px 0 0 0 #2dbe6c",
                border: "2px solid #2dbe6c",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
              },
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
              marginRight: "10px",
              "&:hover": {
                color: "#fff",
                background: "#2dbe6c",
                boxShadow: "inset 130px 0 0 0 #2dbe6c",
                border: "2px solid #2dbe6c",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ApartmentHeading;
