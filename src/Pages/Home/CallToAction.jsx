import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CallToActionBg from "../../Assets/Background/callToActionBg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `rgba(0, 0, 0, .9) url(${CallToActionBg}) no-repeat`,
    padding: "105px 30px",
  },
}));

function CallToAction() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        maxWidth={1000}
        m="0 auto"
      >
        <Grid item md={8} sm={12}>
          <Typography
            sx={{ fontSize: { xs: 33, md: 40 }, mb: {xs: 5, md: 0} }}
            fontWeight="bold"
            color="white"
          >
            Looking to Buy a New Property or Sell an Existing One?
          </Typography>
        </Grid>
        <Grid item md={4} sm={12}>
          <Button
            sx={{
              fontWeight: "bold",
              color: "black",
              border: "1px solid #e5e7ec",
              padding: "12px 0px",
              backgroundColor: "white",
              width: "150px",
              boxShadow: "inset 0 0 0 0 #2dbe6c",
              transition: "ease-out 0.5s",
              "&:hover": {
                color: "white",
                boxShadow: "inset 150px 0 0 0 #2dbe6c",
                border: "1px solid #2dbe6c",
              },
            }}
          >
            Rent Properties
          </Button>
          <Button
            sx={{
              ml: 1,
              fontWeight: "bold",
              color: "white",
              border: "1px solid #2dbe6c",
              padding: "12px 0px",
              backgroundColor: "#2dbe6c",
              width: "150px",
              boxShadow: "inset 0 0 0 0 black",
              transition: "ease-out 0.5s",
              "&:hover": {
                color: "#2dbe6c",
                boxShadow: "inset 150px 0 0 0 black",
                border: "1px solid #2dbe6c",
              },
            }}
          >
            Buy Properties
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CallToAction;
