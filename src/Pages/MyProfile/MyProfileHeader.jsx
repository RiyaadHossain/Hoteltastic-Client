import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SquareTwoToneIcon from "@mui/icons-material/SquareTwoTone";
import BathroomTwoToneIcon from "@mui/icons-material/BathroomTwoTone";
import BedTwoToneIcon from "@mui/icons-material/BedTwoTone";

const MyProfileHeader = () => {
  return (
    <Box
      sx={{
        width: "90%",
        height: "40vh",
        mx: "auto",
        display: "flex",
      }}
    >
      <Box
        sx={{
          p: "20px",
          mt: "-100px",
        }}
      >
        <img
          style={{
            width: "200px",
            height: "200px",
            padding: "5px",
            background: "#fff",
            borderRadius: "50%",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
          }}
          src="https://i.ibb.co/TtcvWfH/profile-Photo.jpg"
          alt=""
        />
      </Box>
      <Box
        sx={{
          width: "90%",
          mx: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
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
            Daniyal Bhatti
          </Typography>
          <Typography variant="body2" color="#93959e" margin="10px 0">
            Traveler || Businessman || Programmer
          </Typography>

          <Box
            display="flex"
            my={3}
            alignItems="center"
            justifyContent="space-between"
            maxWidth="380px"
          >
            <Box>
              <Button
                sx={{ textTransform: "capitalize" }}
                startIcon={<BedTwoToneIcon />}
              >
                3 Beds
              </Button>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box>
              <Button
                sx={{ textTransform: "capitalize" }}
                startIcon={<BathroomTwoToneIcon />}
              >
                1 Bathroom
              </Button>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box>
              <Button
                sx={{ textTransform: "lowercase" }}
                startIcon={<SquareTwoToneIcon />}
              >
                1200 sq
              </Button>
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="end">
          <Button variant="contained">Sign Out</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MyProfileHeader;
