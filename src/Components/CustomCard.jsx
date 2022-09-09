import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function CustomCard({ media, title, date, avatar, bodyText, subtitle1 }) {
  return (
    <Card
      sx={{
        maxWidth: {
          md: 370,
        },
        margin: "15px 15px",
        borderRadius: "10px",
      }}
      fontFamily="'Rubik', sans-serif"
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height={{
          md: 250,
        }}
        image={media}
      />
      <CardContent
        sx={{
          textAlign: "left",
          padding: "20px 30px 40px 30px",
        }}
      >
        <Typography
          gutterBottom
          component="div"
          color="#2d2929"
          fontSize={{
            md: 20,
          }}
          fontWeight="500"
        >
          {title}
        </Typography>
        <Box display="flex" alignItems="center">
          <Avatar sx={{ mr: 1 }} src={avatar} />
          <Typography
            sx={{
              fontWeight: 500,
              color: "#505050",
            }}
          >
            {subtitle1} <span style={{color: '#93959e', fontSize: '12px'}}> {date} </span>
          </Typography>
        </Box>
        <Typography variant="body2" color="#93959e" margin="10px 0">
          {bodyText}
        </Typography>
        <Button
          sx={{
            color: "#93959e",
            border: "1px solid #e5e7ec",
            padding: "8px 0px",
            width: "130px",
            boxShadow: "inset 0 0 0 0 #2dbe6c",
            transition: "ease-out 0.5s",
            "&:hover": {
              color: "white",
              boxShadow: "inset 130px 0 0 0 #2dbe6c",
              border: "1px solid #2dbe6c",
            },
          }}
        >
          See Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
