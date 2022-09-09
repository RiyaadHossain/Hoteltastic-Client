import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import New1 from "../../Assets/Image/news-1.jpg";
import New2 from "../../Assets/Image/news-2.jpg";
import New3 from "../../Assets/Image/news-3.jpg";
import CustomCard from "../../Components/CustomCard";

const useStyles = makeStyles({
  root: {
    padding: "80px 5px",
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
      <Box mb={5}>
        <Typography className={classes.title1} fontWeight="bold">
          NEWS & ARTICLE
        </Typography>
        <Typography variant="h4" my={2} fontWeight="bold">
          Stay Update With Realshed
        </Typography>
        <Typography color="#93959e">
          Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmod
          tempor incididunt labore dolore magna aliqua enim.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {/* ======================== Card Here ======================== */}
        {news.map((news) => (
          <CustomCard
            media={news.media}
            title={news.title}
            bodyText={news.description}
            subtitle1={news.author}
            avatar={news.avatar}
            date={news.date}
          />
        ))}
      </Box>
    </Box>
  );
}

export default NewsArticle;
