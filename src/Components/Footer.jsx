import { Box, Grid, Paper } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Paper>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box></Box>
          </Grid>
        </Grid>
      </Paper>
    </footer>
  );
};

export default Footer;
