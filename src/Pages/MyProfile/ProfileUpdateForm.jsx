import { Button, Tab, Tabs, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ProfileUpdateForm = () => {
  return (
    <Box
      sx={{
        width: "60%",
        height: "80vh",
        mx: " auto",
        mb: "100px",
        p: "40px",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <form>
        <Typography
          sx={{
            fontSize: {
              xs: "30px",
              sm: "24px",
              md: "22px",
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
        {/* ======First Name ====== */}
        <TextField
          sx={{
            background: "none",
            width: "100%",
            padding: "",
            margin: "8px 0px 10px 0px",
          }}
          id="standard-textarea"
          label="First Name"
          placeholder="Enter Your First Name"
          multiline
          variant="standard"
        />
        {/* ======Last Name ====== */}
        <TextField
          sx={{
            background: "none",
            width: "100%",
            padding: "",
            margin: "8px 0px 10px 0px",
          }}
          id="standard-textarea"
          label="Last Name"
          placeholder="Enter Your Last Name"
          multiline
          variant="standard"
        />
        {/* ======User Name ====== */}
        <TextField
          sx={{
            background: "none",
            width: "100%",
            padding: "",
            margin: "8px 0px 10px 0px",
          }}
          id="standard-textarea"
          label="User Name"
          placeholder="Enter Your username"
          multiline
          variant="standard"
        />

        {/* ====== Email ====== */}
        <TextField
          sx={{
            background: "none",
            width: "100%",
            padding: "",
            marginBottom: "10px",
          }}
          id="standard-textarea"
          label="Email"
          placeholder="Enter Your Email"
          multiline
          variant="standard"
        />

        {/* ====== Password ====== */}
        <TextField
          sx={{
            background: "none",
            width: "100%",
            padding: "",
            marginBottom: "10px",
          }}
          id="standard-textarea"
          label="Password"
          placeholder="Write Your Password"
          multiline
          variant="standard"
        />

        <button
          sx={{ textTransform: "capitalize" }}
          type="submit"
          className="profileUpdateBtn"
        >
          Update profile
        </button>
      </form>
    </Box>
  );
};

export default ProfileUpdateForm;
