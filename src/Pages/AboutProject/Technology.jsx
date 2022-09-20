
import React from "react";
import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material";

import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import BusinessIcon from "@mui/icons-material/Business";
import GitHubIcon from '@mui/icons-material/GitHub';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { blue, green, grey, purple, red } from "@mui/material/colors";

const Technology = () => {
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
                sx={{ color: blue[600] }}
              />

              <Typography variant="h6" my={1}>
                Residential
              </Typography>
              <Box>
                <Avatar
                  sx={{ m: "0 auto", bgcolor: grey[300], color: blue[600] }}
                >
                  12
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
              <BusinessIcon fontSize="large" sx={{ color: green[600] }} />

              <Typography variant="h6" my={1}>
                Business
              </Typography>
              <Box>
                <Avatar
                  sx={{ m: "0 auto", bgcolor: grey[300], color: green[600] }}
                >
                  8
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
              <JavascriptIcon fontSize="large" sx={{ color: red[600] }} />

              <Typography variant="h6" my={1}>
                Store
              </Typography>
              <Box>
                <Avatar
                  sx={{ m: "0 auto", bgcolor: grey[300], color: red[600] }}
                >
                  32
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
              <GitHubIcon fontSize="large" sx={{ color: purple[600] }} />

              <Typography variant="h6" my={1}>
                Apartment
              </Typography>
              <Box>
                <Avatar
                  sx={{ m: "0 auto", bgcolor: grey[300], color: purple[600] }}
                >
                  18
                </Avatar>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Technology;
