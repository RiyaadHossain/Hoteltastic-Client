import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Spinner from "../../Components/Loaders/Spinner/Spinner";
import { updateUser } from "../../Store/user/userAction";

const ProfileUpdateForm = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user.user);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, formState: { errors }, } = useForm();

  // imgStorage api for image upload
  const imgStorage_key = `75bc4682c9291f359647ab98df5f76de`;

  console.log(user._id);
  const onSubmit = async (fulldata) => {
    setLoading(true);
    const avatar = fulldata?.avatar[0];

    const formData = new FormData();
    formData.append("image", avatar);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;

    const { data } = await axios.post(url, formData);
    if (data.success) {
      const imgUrl = data.data.url;
      const dataToSend = { ...fulldata, avatar: imgUrl };

      let exactData = {};
      for (const i in dataToSend) {
        if (dataToSend[i]) exactData[i] = dataToSend[i];
      }
      dispatch(updateUser({ ...exactData, id: user._id }));

      setLoading(false);
      Swal.fire("Great!", "New room data has been added!", "success");

      reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Image upload failed!",
      });
    }
  };
  return (
    <Box
      sx={{
        width: {
          xs: "85%",
          md: "55%",
          lg: "40%",
        },
        minHeight: "80vh",
        mx: " auto",
        mb: "100px",
        p: "40px",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                sm: "24px",
                md: "26px",
              },

              textTransform: "capitalize",
              fontFamily: "'Rubik', sans-serif",
            }}
            textAlign="center"
            fontWeight="bold"
            color="#00000"
          >
            Update Your Profile
          </Typography>
          {/* ====== Name ====== */}
          <TextField
            fullWidth
            id="standard-basic"
            label="Name"
            placeholder="Enter Your Name"
            variant="outlined"
            sx={{ mt: 5 }}
            {...register("name")}
          />
          {/* ======Email====== */}
          <TextField
            fullWidth
            disabled
            id="outlined-read-only-input"
            label="Email"
            defaultValue={user.email}
            InputProps={{
              readOnly: true,
            }}
            sx={{ mt: 2 }}
          />
          {/* ======Avatar====== */}
          <TextField
            fullWidth
            type="file"
              {...register("avatar", { required: true})}
            sx={{ mt: 2 }}
            />
             {errors.avatar && (
              <Typography color="error">Valid Email is required</Typography>
            )}
          {/* ======Professional Title ====== */}
          <TextField
            fullWidth
            id="standard-basic"
            label="Professional Title"
            placeholder="Enter Your Professional Title"
            variant="outlined"
            sx={{ mt: 2 }}
            {...register("title")}
          />

          {/* ====== Address ====== */}
          <TextField
            fullWidth
            id="standard-basic"
            label="Address"
            placeholder="Enter Your Address"
            variant="outlined"
            sx={{ mt: 2 }}
            {...register("address")}
          />

          {/* ====== Facebook ====== */}
          <TextField
            fullWidth
            id="standard-basic"
            label="Facebook"
            placeholder="Enter Your Facebook Link"
            variant="outlined"
            sx={{ mt: 2 }}
            {...register("facebook")}
          />

          {/* ====== LinkedIn ====== */}
          <TextField
            fullWidth
            id="standard-basic"
            label="LinkedIn"
            placeholder="Enter Your LinkedIn Link"
            variant="outlined"
            sx={{ mt: 2 }}
            {...register("linkedIn")}
          />

          {/* ====== Twitter ====== */}
          <TextField
            fullWidth
            id="standard-basic"
            label="Twitter"
            placeholder="Enter Your Twitter Link"
            variant="outlined"
            sx={{ mt: 2 }}
            {...register("twitter")}
          />
          <Box>
            <button
              sx={{ textTransform: "capitalize" }}
              type="submit"
              className="profileUpdateBtn"
              style={{ marginTop: 35 }}
            >
              Update Profile
            </button>
          </Box>
        </form>
      )}
    </Box>
  );
};

export default ProfileUpdateForm;
