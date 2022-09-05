import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import BannerImg from "../../Assets/Image/banner-1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: `calc(80vh)`,
    background: `rgba(4, 59, 100, .40) url(${BannerImg}) no-repeat bottom center`,
    backgroundSize: "cover",
    backgroundBlendMode: "overlay",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const currencies = [
  {
    value: "USD",
    label: "London",
  },
  {
    value: "NewYork",
    label: "NewYork",
  },
  {
    value: "Torrento",
    label: "Torrento",
  },
  {
    value: "Washington DC",
    label: "Washington DC",
  },
];

const roomType = [
  {
    value: "Single Room",
    label: "Single Room",
  },
  {
    value: "Double Bed",
    label: "Double Bed",
  },
  {
    value: "Attached WashRoom",
    label: "Attached WashRoom",
  },
  {
    value: "Wide Room",
    label: "Wide Room",
  },
];

function Home() {
  const classes = useStyles();
  const [currency, setCurrency] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Box className={classes.root}>
      <Box textAlign="center">
        <Typography
          sx={{
            fontSize: {
              xs: "38px",
              sm: "45px",
              md: "55px",
            },
          }}
          fontWeight="bold"
          color="white"
        >
          Create Lasting Wealth Through Realshed
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "19px",
              md: "22px",
            },
          }}
          color="white"
          mt={3}
          fontWeight={300}
        >
          Amet consectetur adipisicing elit sed do eiusmod.
        </Typography>

        <Box mt={5}>
          <Box
            bgcolor="white"
            display="inline-block"
            sx={{
              height: {
                sm: "330px",
              },
              width: {
                sm: "600px",
              },
            }}
            p={5}
            borderRadius={3}
          >
            <TextField
              fullWidth
              id="standard-basic"
              label="Search Room"
              variant="filled"
            />
            <Box my={3}>
              <TextField
                id="filled-select-currency"
                select
                fullWidth
                label="Location"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                variant="filled"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <TextField
              id="filled-select-currency"
              select
              fullWidth
              label="Room Type"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              variant="filled"
            >
              {roomType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Box mt={2}>
              <Button variant="contained">Search</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
