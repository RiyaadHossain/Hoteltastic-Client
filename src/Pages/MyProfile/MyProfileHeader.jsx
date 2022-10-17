import { Avatar, Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../Store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { deepOrange } from "@mui/material/colors";

const MyProfileHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.user.user);

  const signOut = () => {
    window.open(`http://localhost:5001/auth/logout`, "_self");
    dispatch(authAction.signOut());
    navigate("/");
    window.location.reload();
  };

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
        <Avatar
          sx={{
            width: "200px",
            height: "200px",
            bgcolor: deepOrange[500],
          }}
          src={auth.avatar}
        >
          <Typography variant="h1" fontWeight="bold">
            R
          </Typography>
        </Avatar>
      </Box>
      <Box
        sx={{
          width: "90%",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
            {auth.name}
          </Typography>
          <Typography variant="body2" color="#93959e" margin="10px 0">
            {auth.title ? auth.title : "Not Provided"}
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
                {auth.address ? auth.address : "Not Provided"}
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
                href={auth.facebook}
                target="_blank"
              >
                {auth.facebook ? "Facebook" : "N/A"}
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
                href={auth.linkedIn}
                target="_blank"
              >
                {auth.linkedIn ? "LinkedIn" : "N/A"}
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
                href={auth.twitter}
                target="_blank"
              >
                {auth.twitter ? "Twitter" : "N/A"}
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>
          <Button
            onClick={signOut}
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
