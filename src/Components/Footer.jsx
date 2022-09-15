import {
  Box,
  Grid,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import PhoneForwardedTwoToneIcon from "@mui/icons-material/PhoneForwardedTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import React from "react";
import FooterImg1 from "../Assets/Image/feature-1.jpg";
import FooterImg2 from "../Assets/Image/feature-2.jpg";
import FooterLogo from "../Assets/Logo/footer-logo.png";
import styled from "@emotion/styled";

const Img = styled("img")({
  width: 90,
  height: 90,
  borderRadius: 4,
  objectFit: "cover",
});

const Footer = () => {
  return (
    <Box pt={4}>
      <Grid bgcolor="#131314" color="white" px={5} py={7} container spacing={4}>
        {/* =================== Box - 1 =================== */}
        <Grid item xs={12} md={6} lg={3}>
          <Box>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              About
            </Typography>
            <Box>
              <Typography variant="body1" color="GrayText">
                Lorem ipsum dolor amet consetetur adi pisicing elit sed eiusm
                tempor in cididunt ut labore dolore magna aliqua enim ad minim
                venitam
                <br />
                <br />
                Quis nostrud exercita laboris nisi ut aliquip commodo.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* =================== Box - 2 =================== */}
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Services
          </Typography>
          <ListItem>
            <Typography color="GrayText">About Us</Typography>
          </ListItem>
          <ListItem>
            <Typography color="GrayText">Listing</Typography>
          </ListItem>
          <ListItem>
            <Typography color="GrayText">How it Works</Typography>
          </ListItem>
          <ListItem>
            <Typography color="GrayText">Our Services</Typography>
          </ListItem>
        </Grid>

        {/* =================== Box - 3 =================== */}
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Top News
          </Typography>
          <Box>
            <Box display="flex">
              <Img src={FooterImg1} />
              <Box ml={2}>
                <Typography color="GrayText" fontWeight="bold">
                  The Added Value Social Worker
                </Typography>
                <Typography mt={1} variant="subtitle2" color="GrayText">
                  Mar 25, 2020
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box mt={2}>
            <Box display="flex">
              <Img src={FooterImg2} />
              <Box ml={2}>
                <Typography color="GrayText" fontWeight="bold">
                  Ways to Increase Trust
                </Typography>
                <Typography mt={1} variant="subtitle2" color="GrayText">
                  Mar 24, 2020
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* =================== Box - 4 =================== */}
        <Grid item xs={12} md={6} lg={3}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Contacts
          </Typography>
          <ListItem>
            <ListItemIcon>
              <LocationOnTwoToneIcon color="primary" />
            </ListItemIcon>
            <Typography color="GrayText">
              Flat 20, Reynolds Neck, North Helenaville, FV77 8WS
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneForwardedTwoToneIcon color="primary" />
            </ListItemIcon>
            <Typography color="GrayText">+2(305) 587-3407</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailTwoToneIcon color="primary" />
            </ListItemIcon>
            <Typography color="GrayText">info@example.com</Typography>
          </ListItem>
        </Grid>
      </Grid>
      <Grid
        bgcolor="#272a2f"
        textAlign="center"
        color="white"
        px={3}
        py={2}
        container
        spacing={4}
        alignItems='center'
      >
        <Grid item xs={12} md={4}>
          <Typography color="GrayText" variant="subtitle1">
            Realshed © 2021 All Right Reserved
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <img alt="footer-logo" src={FooterLogo} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography color="GrayText" variant="subtitle1">
            Terms of Service | Privacy Policy
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
