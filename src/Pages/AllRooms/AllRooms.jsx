import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CommonBg from "../../Assets/Background/callToActionBg.png";
import Room from "../Room/Room";

const useStyles = makeStyles((theme) => ({
  root: { minHeight: "60vh", mt: "100px", paddingBottom: "80px" },
  header: {
    background: `#c1edd4 url(${CommonBg}) center left`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "65px 0",
  },
}));

function AllRooms() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <Box className={classes.header}>
          <Typography sx={{ fontSize: 40, fontWeight: 500 }}>
            Room List
          </Typography>
        </Box>
        <Container sx={{mt: 8}}>
          <Room />
        </Container>
      </Box>
    </Box>
  );
}

export default AllRooms;
