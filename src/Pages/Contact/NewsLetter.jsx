import { Button, Grid, InputBase, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import NewsLetterImage from "../../Assets/Background/newsLetter.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `#2dbe6c url(${NewsLetterImage}) no-repeat center center `,
    backgroundSize:'cover',
    padding: "105px 30px",
  },
}));

const NewsLetter = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        maxWidth={1000}
        mx="auto"
        spacing={4}
      >
        <Grid item md={8} sm={12}>
          <Button
            sx={{
              p: "3px 10px",
              fontSize: "12px",
              cursor: "pointer",
              color: "#fff",
              backgroundColor: "#F94C4C",
            }}
            variant="contained"
            color="success"
            backgroundColor="#F94C4C"
          >
            Subscribe
          </Button>

          <Typography
            sx={{ fontSize: { xs: 30, md: 38 }, mb: { xs: 5, md: 0 } }}
            fontWeight="bold"
            color="white"
          >
            Sign Up To Our Newsletter To Get The Latest News And Offers.
          </Typography>
        </Grid>
        <Grid item md={4} sm={12}>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: 500,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter Your Email"
              inputProps={{ "aria-label": "Enter Your Email" }}
            />
            <Box
              color="primary"
              sx={{
                p: "20px 30px",
                cursor: "pointer",
                color: "#fff",
                backgroundColor: "#2D2929",
                borderRadius: "0px 5px 5px 0px",
              }}
              aria-label="directions"
            >
              Subscribe Now
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsLetter;
