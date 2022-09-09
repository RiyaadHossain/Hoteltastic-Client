import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import BusinessIcon from "@mui/icons-material/Business";
import StoreIcon from "@mui/icons-material/Store";
import ApartmentIcon from "@mui/icons-material/Apartment";
import {  grey } from "@mui/material/colors";

function Category() {
  return (
    <Box p="100px 15px">
      <Container maxWidth="xl">
        <Grid container textAlign="center" spacing={4}>
          {/* ================ Card 1 ================ */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper
              sx={{
                py: 4,
                transition: ".5s",
                "&:hover": {
                  background: "rgb(7, 177, 77, 0.5)",
                },
              }}
              elevation={5}
            >
              <EmojiTransportationIcon
                fontSize="large"
                sx={{ color: "#2d2e34" }}
              />

              <Typography variant="h6" my={1}>
                Residential
              </Typography>
              <Box>
                <Avatar
                  sx={{ m: "0 auto", bgcolor: grey[300], color: "black" }}
                >
                  52
                </Avatar>
              </Box>
            </Paper>
          </Grid>

          {/* ================ Card 2 ================ */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper
              sx={{
                py: 4,
                transition: ".5s",
                "&:hover": {
                  background: "rgb(7, 177, 77, 0.5)",
                },
              }}
              elevation={5}
            >
              <BusinessIcon fontSize="large" sx={{ color: "#2d2e34" }} />

              <Typography variant="h6" my={1}>
                Business
              </Typography>
              <Box>
                <Avatar
                  sx={{ m: "0 auto", bgcolor: grey[300], color: "black" }}
                >
                  52
                </Avatar>
              </Box>
            </Paper>
          </Grid>

          {/* ================ Card 3 ================ */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper
              sx={{
                py: 4,
                transition: ".5s",
                "&:hover": {
                  background: "rgb(7, 177, 77, 0.5)",
                },
              }}
              elevation={5}
            >
              <StoreIcon fontSize="large" sx={{ color: "#2d2e34" }} />

              <Typography variant="h6" my={1}>
                Store
              </Typography>
              <Box>
                <Avatar
                  sx={{ m: "0 auto", bgcolor: grey[300], color: "black" }}
                >
                  52
                </Avatar>
              </Box>
            </Paper>
          </Grid>

          {/* ================ Card 4 ================ */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper
              sx={{
                py: 4,
                transition: ".5s",
                "&:hover": {
                  background: "rgb(7, 177, 77, 0.5)",
                },
              }}
              elevation={5}
            >
              <ApartmentIcon fontSize="large" sx={{ color: "#2d2e34" }} />

              <Typography variant="h6" my={1}>
                Apartment
              </Typography>
              <Box>
                <Avatar
                  sx={{ m: "0 auto", bgcolor: grey[300], color: "black" }}
                >
                  52
                </Avatar>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Category;
