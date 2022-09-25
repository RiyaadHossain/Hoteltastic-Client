import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import React, { useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import SquareTwoToneIcon from "@mui/icons-material/SquareTwoTone";
import BathroomTwoToneIcon from "@mui/icons-material/BathroomTwoTone";
import BedTwoToneIcon from "@mui/icons-material/BedTwoTone";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFavourites, postFavourites } from "../../Store/user/userAction";

function Room({ room }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth.user.user)
  const favourite = useSelector(state => state.user.favourites)
  console.log(favourite);

  useEffect(() => {
    dispatch(getFavourites())
  }, [dispatch])

  const addFav = id => {
    const data = {user: auth._id, room: id}
    dispatch(postFavourites(data))
  }

  const removeFav = id => {

  }

  const heart = (id) => (
    <FavoriteBorderIcon
      onClick={() => addFav(id)}
      sx={{
        border: "1px solid #e5e7ec",
        padding: "3px",
        height: "33px",
        width: "33px",
        color: "#a6a7af",
        borderRadius: "4px",
        marginLeft: "5px",
        "&:hover": {
          color: "#fff",
          background: "#2dbe6c",
          cursor: "pointer",
        },
      }}
    />
  );

  const heartFilled = (id) => (
    <FavoriteIcon
    onClick={() => removeFav(id)}
      sx={{
        border: "1px solid #e5e7ec",
        padding: "3px",
        height: "33px",
        width: "33px",
        color: "#a6a7af",
        borderRadius: "4px",
        marginLeft: "5px",
        "&:hover": {
          color: "#fff",
          background: "#2dbe6c",
          cursor: "pointer",
        },
      }}
    />
  );

  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: 680,
        height: 370,
        margin: "0 auto",
        mt: 4,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          maxWidth: { md: "317px" },
          height: { xs: "350px", md: "inherit" },
        }}
        image={room.propertyImage}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{
            textAlign: "left",
            padding: "20px 30px 40px 30px",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="#2d2929"
            fontSize={{
              md: 22,
            }}
            fontWeight="500"
          >
            {room.propertyName || "Family Home For Sale"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "50%", my: 2 }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: "#93959e",
                }}
              >
                Start From
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  color: "#2dbe6c",
                  fontSize: {
                    md: 22,
                  },
                }}
              >
                ${room.startFrom || "$ 977"}
              </Typography>
            </Box>
            <Tooltip
              open={true}
              placement="left"
              title="John Smith"
              TransitionComponent={Zoom}
              arrow
            >
              <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
            </Tooltip>
          </Box>
          <Typography variant="body2" color="#93959e" margin="10px 0">
            {room.description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,accusamus animi. Deserunt modi nesciunt dolorum!"}
          </Typography>

          {/* ================ Shoriful Vaiya Copy from here ================ */}
          <Box
            display="flex"
            my={3}
            alignItems="center"
            justifyContent="space-between"
            maxWidth="380px"
          >
            <Box>
              <Button
                sx={{ textTransform: "capitalize" }}
                startIcon={<BedTwoToneIcon />}
              >
                {room.beds} Beds
              </Button>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box>
              <Button
                sx={{ textTransform: "capitalize" }}
                startIcon={<BathroomTwoToneIcon />}
              >
                1 Bathroom
              </Button>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box>
              <Button
                sx={{ textTransform: "lowercase" }}
                startIcon={<SquareTwoToneIcon />}
              >
                {room.sqFt} sq
              </Button>
            </Box>
          </Box>
          {/* ============= Shoriful Vaiya Copy from here to here ============= */}

          <Box display="flex" alignItems="center" mt={3}>
            <Button
              onClick={() => navigate(`/property/${room._id}`)}
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
            <Box sx={{ width: "50%", textAlign: "right" }}>
              <SyncAltIcon
                sx={{
                  border: "1px solid #e5e7ec",
                  padding: "3px",
                  height: "33px",
                  width: "33px",
                  color: "#a6a7af",
                  borderRadius: "4px",
                  "&:hover": {
                    color: "#fff",
                    background: "#2dbe6c",
                    cursor: "pointer",
                  },
                }}
              />
              {/* {favourite.map(fav => console.log(fav))} */}
              {heart(room._id)}
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default Room;
