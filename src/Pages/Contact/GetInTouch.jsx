import { Box, Typography } from "@mui/material";
import React from "react";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import RingVolumeOutlinedIcon from "@mui/icons-material/RingVolumeOutlined";
import BroadcastOnHomeOutlinedIcon from "@mui/icons-material/BroadcastOnHomeOutlined";

const GetInTouch = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        fontFamily: "'Rubik', sans-serif",
        padding: "80px 0px 60px 0px",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "38px",
            sm: "45px",
            md: "18px",
          },
          textTransform: "uppercase",
          fontFamily: "'Rubik', sans-serif",
          fontWeight: "500",
        }}
        fontWeight="bold"
        color="#2dbe6c"
      >
        Contact US
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
        Get In Touch
      </Typography>

      {/* Get in touch card */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            padding: "65px 55px 65px 55px",
            m: "20px",
            width: "300px",
            boxShadow: "0 10px 30px 0px rgb(0 0 0 / 10%)",
            transition: "all 500ms ease",
            borderRadius: "10px",
          }}
        >
          <MarkEmailUnreadOutlinedIcon
            sx={{
              color: "#f2b241",
              fontSize: "50px",
            }}
          />
          <Typography
            sx={{
              fontSize: {
                xs: "38px",
                sm: "45px",
                md: "18px",
              },
              margin: "15px 0px",
              fontFamily: "'Rubik', sans-serif",
              fontWeight: "500",
            }}
            color="#000000"
          >
            Email Address
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Rubik', sans-serif",
            }}
            color="#a0a1a8"
          >
            info@example.com
          </Typography>
          <Typography
            sx={{
              textTransform: "capitalize",
              fontFamily: "'Rubik', sans-serif",
            }}
            color="#a0a1a8"
          >
            info@example.com
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "65px 55px 65px 55px",
            m: "20px",
            width: "300px",
            boxShadow: "0 10px 30px 0px rgb(0 0 0 / 10%)",
            transition: "all 500ms ease",
            borderRadius: "10px",
          }}
        >
          <RingVolumeOutlinedIcon
            sx={{
              color: "#f2b241",
              fontSize: "50px",
            }}
          />
          <Typography
            sx={{
              fontSize: {
                xs: "38px",
                sm: "45px",
                md: "18px",
              },
              margin: "15px 0px",
              fontFamily: "'Rubik', sans-serif",
              fontWeight: "500",
            }}
            color="#000000"
          >
            Email Address
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Rubik', sans-serif",
            }}
            color="#a0a1a8"
          >
            info@example.com
          </Typography>
          <Typography
            sx={{
              textTransform: "capitalize",
              fontFamily: "'Rubik', sans-serif",
            }}
            color="#a0a1a8"
          >
            info@example.com
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "65px 55px 65px 55px",
            m: "20px",
            width: "300px",
            boxShadow: "0 10px 30px 0px rgb(0 0 0 / 10%)",
            transition: "all 500ms ease",
            borderRadius: "10px",
          }}
        >
          <BroadcastOnHomeOutlinedIcon
            sx={{
              color: "#f2b241",
              fontSize: "50px",
            }}
          />
          <Typography
            sx={{
              fontSize: {
                xs: "38px",
                sm: "45px",
                md: "18px",
              },
              margin: "15px 0px",
              fontFamily: "'Rubik', sans-serif",
              fontWeight: "500",
            }}
            color="#000000"
          >
            Email Address
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Rubik', sans-serif",
            }}
            color="#a0a1a8"
          >
            info@example.com
          </Typography>
          <Typography
            sx={{
              textTransform: "capitalize",
              fontFamily: "'Rubik', sans-serif",
            }}
            color="#a0a1a8"
          >
            info@example.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GetInTouch;
