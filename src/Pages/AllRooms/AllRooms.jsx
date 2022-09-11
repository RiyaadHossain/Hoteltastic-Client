import { Box, Container, Grid, Paper, Slider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CustomHeader from "../../Components/CustomHeader";
import { rooms } from "../../utils/constant";
import Room from "../Room/Room";

const useStyles = makeStyles((theme) => ({
  root: { minHeight: "60vh", mt: "100px", paddingBottom: "80px" },
}));

const marks = [
  {
    value: 0,
    label: "0k",
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

console.log(valueText());

function AllRooms() {
  const classes = useStyles();

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
                <Box sx={{ maxWidth: 500, margin: '0 auto' }}>
                <Typography gutterBottom>
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
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={8}>
              {rooms.map((room) => (
                <Room room={room} />
              ))}
            </Grid>
          </Grid>
          {/* <Room /> */}
        </Container>
      </Box>
    </Box>
  );
}

export default AllRooms;
