import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import New1 from "../../Assets/Image/news-1.jpg"
import New2 from "../../Assets/Image/news-2.jpg"
import New3 from "../../Assets/Image/news-3.jpg"

const useStyles = makeStyles({
  root: {
    padding: "80px 15px",
    textAlign: "center",
  },
  title1: {
    fontSize: {
      xs: "38px",
      sm: "45px",
      md: "18px",
    },
    textTransform: "uppercase",
    fontFamily: "'Rubik', sans-serif",
    fontWeight: "500",
    color: "#2dbe6c",
  },
});

const news = [
  {
    title: "Including Animation In Your Design System",
    author: "Eva Green",
    media: New1,
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    date: "April 20, 2022",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing sed.",
  },
  {
    title: "Taking The Pattern Library To The Next Level",
    author: "George Clooney",
    media: New2,
    avatar: "https://mui.com/static/images/avatar/2.jpg",
    date: "March 10, 2022",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing sed.",
  },
  {
    title: "How New Font Technologies Will Improve The Web",
    author: "Simon Baker",
    media: New3,
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    date: "Jan 25, 2022",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing sed.",
  },
];

function NewsArticle() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.title1} fontWeight="bold">NEWS & ARTICLE</Typography>
        <Typography variant="h4" my={2} fontWeight="bold">
          Stay Update With Realshed
        </Typography>
        <Typography color="#93959e">
          Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmod
          tempor incididunt labore dolore magna aliqua enim.
        </Typography>
      </Box>
      <Grid container mt={4} spacing={5} maxWidth={1150} margin='0 auto'>
        {/* ======================== Card No ======================== */}
        {news.map((news) => (
          <Grid key={news.author} item md={6} xs={12} lg={4}>
            <Card sx={{ maxWidth: 345, m: "0 auto" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="220"
                  image={news.media}
                  alt="green iguana"
                />
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h3"
                    fontWeight="bold"
                  >
                    {news.title}
                  </Typography>
                  <Box display="flex" alignItems="center" mb={1}>
                    <Avatar src={news.avatar} />
                    <Typography ml={1} fontWeight="bold">
                      {news.author}
                    </Typography>
                    <Typography color="GrayText" ml={1}>
                      | {news.date}
                    </Typography>
                  </Box>
                  <Typography fontWeight="bold" color="text.secondary">
                    {news.description}
                  </Typography>
                  <Button
                    size="large"
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: "#2dbe6c",
                      "&:hover": {
                        backgroundColor: "#2dbe6c",
                      },
                    }}
                  >
                    See Details
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default NewsArticle;
