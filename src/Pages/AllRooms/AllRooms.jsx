import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import CustomHeader from "../../Components/CustomHeader";
// import { rooms } from "../../utils/constant";
import Room from "../Room/Room";

const useStyles = makeStyles((theme) => ({
  root: { minHeight: "60vh", mt: "100px", paddingBottom: "80px" },
}));

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 20,
    label: "20k",
  },
  {
    value: 40,
    label: "40k",
  },
  {
    value: 60,
    label: "60k",
  },
  {
    value: 80,
    label: "80k",
  },
  {
    value: 100,
    label: "100k",
  },
];

function valueText(value) {
  return `${value}k`;
}

function AllRooms() {
  const classes = useStyles();
  const [room, setRoom] = React.useState("");
  const [location, setLocation] = React.useState("");
  const rooms = useSelector((state) => state.room).rooms;


  return (
    <Box className={classes.root}>
      <Box>
        <CustomHeader>All Rooms</CustomHeader>
        <Container sx={{ mt: 8 }}>
          <Paper
            sx={{ p: 4, marginBottom: 3 }}
            elevation={3}
            style={{ textAlign: "center" }}
          >
            <Typography variant="h6" fontWeight={600}>
              Search Reasults:{" "}
              <span style={{ fontSize: 18, fontWeight: 400, color: "gray" }}>
                Showing 1-5 of 20 Listings
              </span>
            </Typography>
          </Paper>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4} mt={4}>
              <Paper sx={{ p: 5 }}>
                <Box sx={{ maxWidth: 500, margin: "0 auto" }}>
                  <Typography gutterBottom fontWeight="bold">
                    Price Range
                  </Typography>
                  <Slider
                    aria-label="Always visible"
                    defaultValue={80}
                    getAriaValueText={valueText}
                    step={10}
                    marks={marks}
                    valueLabelDisplay="on"
                    color="primary"
                    orientation="horizontal"
                    size="md"
                  />
                  <Typography gutterBottom fontWeight="bold" mt={4}>
                    Select your Room Type
                  </Typography>
                  <FormControl
                    sx={{ mt: 1, minWidth: "100%", margin: "0 auto" }}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Room
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={room}
                      label="Room"
                      onChange={(e) => setRoom(e.target.value)}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography gutterBottom fontWeight="bold" mt={4}>
                    Select your Location
                  </Typography>
                  <FormControl
                    sx={{ mt: 1, minWidth: "100%", margin: "0 auto" }}
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Location
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={location}
                      label="Location"
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <Box mt={2} textAlign='center'>
                    <Button variant="contained" size="large">
                      Filter
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={8}>
              {rooms.map((room, i) => (
                <Room key={i} room={room} />
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default AllRooms;
