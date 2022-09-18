import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SquareTwoToneIcon from "@mui/icons-material/SquareTwoTone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

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
          justifyContent:"space-between"
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
            my={1}
            alignItems="center"
            justifyContent="space-between"
            maxWidth="700px"
          >
            <Box>
              <Button
                sx={{ textTransform: "capitalize", color: "#888" }}
                startIcon={<LocationOnOutlinedIcon />}
              >
                Multan, Punjab, Pakistan
              </Button>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
              sx={{
                mx: "5px",
              }}
            >
              <Button
                sx={{ textTransform: "lowercase", color: "#888" }}
                startIcon={<FacebookOutlinedIcon />}
              >
                daniyalbhatti.28
              </Button>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
              sx={{
                mx: "5px",
              }}
            >
              <Button
                sx={{ textTransform: "lowercase", color: "#888" }}
                startIcon={<LinkedInIcon />}
              >
                daniyal_bhatti
              </Button>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
              sx={{
                mx: "5px",
              }}
            >
              <Button
                sx={{ textTransform: "lowercase", color: "#888" }}
                startIcon={<TwitterIcon />}
              >
                daniyal_bhatti
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>
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
            Sign Out
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MyProfileHeader;
