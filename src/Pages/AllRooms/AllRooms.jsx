import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CustomHeader from "../../Components/CustomHeader";
import Room from "../Room/Room";

const useStyles = makeStyles((theme) => ({
  root: { minHeight: "60vh", mt: "100px", paddingBottom: "80px" },
}));

function AllRooms() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <CustomHeader>All Rooms</CustomHeader>
        <Container sx={{mt: 8}}>
          <Room />
        </Container>
      </Box>
    </Box>
  );
}

export default AllRooms;
