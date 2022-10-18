import {
  Avatar,
  Box,
  Button,
  Modal,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import getReviews, { deleteReview, postReview } from "../../../Store/review/reviewAction";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Swal from "sweetalert2";

const PropertyRating = ({ roomId }) => {
  const [value, setValue] = useState(1);
  const review = useSelector((state) => state.review.reviews);
  const auth = useSelector((state) => state.auth.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews())
  }, [dispatch]);

  console.log(review);

  const userName = (name) => {
    return name?.slice(0, 1)?.toUpperCase();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitRattings = (data) => {
    data.rattings = value;
    data.user = auth._id;
    data.room = roomId;
    dispatch(postReview(data));
    reset();
    setOpen(false);
  };

  const handleDeleteReview = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteReview(id));
        Swal.fire(
          "Deleted!",
          "Your Review has been deleted.",
          "success"
        );
      }
    });
  }

  let specificReviews = [];
  review.forEach((r) => r.room?._id === roomId && specificReviews.push(r));
  console.log(review)
  // console.log(specificReviews)
  return (
    <Box
      sx={{
        padding: "22px 30px",
        backgroundColor: "#ffffff",
        boxShadow: "0 10px 30px 0px rgb(0 0 0 / 10%)",
        borderRadius: "10px",
      }}
    >
      <div>
        <Box textAlign="right" my={2}>
          <Button variant="contained" onClick={handleOpen}>
            Add Review
          </Button>
        </Box>
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
            <form onSubmit={handleSubmit(submitRattings)}>
              <Rating
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                sx={{ my: "10px" }}
                name="rating"
              />
              {errors.ratting && (
                <Typography color="error">Rattings is required</Typography>
              )}
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
                {...register("review", {
                  required: true,
                })}
              />
              {errors.review && (
                <Typography color="error">Review Text is required</Typography>
              )}

              <Button
                type="submit"
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

      {specificReviews.length ? (
        specificReviews.map((singleReview, i) => {
          return (
            <Box display='flex' justifyContent='space-between' alignItems='center' mt={3}>

              <Box
                key={i}
                sx={{
                  display: "flex",
                  color: "#93959e",
                  py: "15px",
                }}
              >
                <Avatar
                  sx={{ height: "40px", width: "40px", bgcolor: "skyblue" }}
                  src={singleReview.user?.avatar}
                >
                  {!singleReview.user?.avatar &&
                    userName(singleReview.user?.name)}
                </Avatar>
                <Box ml={3}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          md: "18px",
                        },
                        fontFamily: "'Rubik', sans-serif",
                        mr: "10px",
                        fontWeight: 600,
                        color: "#626263",
                      }}
                    >
                      {singleReview.user?.name}
                    </Typography>
                    {/* rating */}
                    <Rating
                      name="half-rating-read"
                      defaultValue={singleReview.rattings}
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
                    {singleReview.review}
                  </Typography>
                </Box>
              </Box>
             {auth?._id === singleReview?.user?._id && <Box>
                <Avatar sx={{bgcolor: 'red', width: 30, height: 30}} onClick={() => handleDeleteReview(singleReview._id)}>
                <DeleteForeverIcon/>
                </Avatar>
              </Box>}
            </Box>
          );
        })
      ) : (
        <Typography
          sx={{
            fontFamily: "'Rubik', sans-serif",
          }}
          variant="h4"
          color="GrayText"
        >
          No Review Yet! <SentimentDissatisfiedIcon />
        </Typography>
      )}
    </Box>
  );
};

export default PropertyRating;
