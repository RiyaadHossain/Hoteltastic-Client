import {
  Box,
  Button,
  Modal,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const PropertyRating = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get(`userReviews.json`).then((data) => setReviews(data.data));
  }, []);
  // console.log(reviews);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        padding: "22px 30px",
        // marginBottom: "30px",
        backgroundColor: "#ffffff",
        boxShadow: "0 10px 30px 0px rgb(0 0 0 / 10%)",
        borderRadius: "10px",
      }}
    >
      <div>
        <Button onClick={handleOpen}>Add Review</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "40%",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: "40px 70px",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "600",
                marginBottom: "10px",
                borderBottom: "1px solid white",
              }}
            >
              Review
            </Typography>
            <form>
              <TextField
                sx={{
                  background: "none",
                  width: "100%",
                  margin: "8px 0px 10px 0px",
                }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                multiline
              />
              <TextField
                sx={{
                  background: "none",
                  width: "100%",
                  margin: "8px 0px 10px 0px",
                }}
                id="outlined-multiline-static"
                label="Comment"
                multiline
                rows={4}
              />

              <Rating
                sx={{ my: "10px" }}
                name="half-rating"
                defaultValue={0}
                precision={0.5}
              />

              <Button
                variant="outlined"
                sx={{
                  background: "#2dbe6c",
                  color: "white",
                  border: "1px solid #2dbe6c",
                  margin: "8px 0px 10px 0px",
                  fontWeight: "600",
                  padding: "10px 0",
                  width: "100%",
                  ":hover": {
                    background: "white",
                    border: "1px solid #2dbe6c",
                    color: "#2dbe6c",
                  },
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Modal>
      </div>

      {reviews.map((review) => {
        return (
          <Box
            sx={{
              display: "flex",
              color: "#93959e",
              py: "15px",
              borderBottom: "1px solid #e5e7ec",
              ":last-child": {
                borderBottom: "none",
              },
            }}
          >
            <img
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                marginright: "12px",
              }}
              src={review.userImg}
              alt=""
            />
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      md: "17px",
                    },
                    fontFamily: "'Rubik', sans-serif",
                    // fontWeight: "500",
                    mr: "10px",
                    color: "#626263",
                  }}
                >
                  {review.userName}
                </Typography>
                {/* rating */}
                <Rating
                  name="half-rating-read"
                  defaultValue={review.rate}
                  precision={0.5}
                  size="small"
                  readOnly
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: "'Rubik', sans-serif",
                }}
              >
                {review.comment}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default PropertyRating;
