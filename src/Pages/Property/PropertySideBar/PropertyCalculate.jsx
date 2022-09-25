import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CalculateIcon from "@mui/icons-material/Calculate";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const PropertyCalculate = ({ room }) => {
  const auth = useSelector((state) => state.auth.user.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

     const onSubmit = (data) => {
          /* ------------------- Shorif Vaiya ------------------- */
          // Here is the data, do whatever you
       console.log(data);
  };


  return (
    <Box
      sx={{
        boxShadow: "0 15px 25px 0px rgb(0 0 0 / 8%)",
        borderRadius: "10px",
        mt: "30px",
        p: "25px 30px 30px 30px",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "500",
          mb: "20px",
        }}
      >
        Book <span style={{ color: "#2dbe6c" }}>{room.propertyName} !</span>
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ my: 1 }}>
          <InputLabel htmlFor="totalAmount">Name</InputLabel>
          <OutlinedInput
            {...register("name", {
              required: true,
            })}
            startAdornment={
              <InputAdornment position="start">
                <AccountBoxIcon />
              </InputAdornment>
            }
            id="totalAmount"
            label="Name"
            defaultValue={auth?.name}
          />
          {errors.name && (
            <Typography color="error">Name is required</Typography>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ my: 1 }}>
          <InputLabel htmlFor="downPayment">Email</InputLabel>
          <OutlinedInput
            {...register("email", {
              required: true,
            })}
            startAdornment={
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            }
            defaultValue={auth.email}
            readOnly
            id="downPayment"
            label="Email"
          />
          {errors.email && (
            <Typography color="error">Valid Email is required</Typography>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ my: 1 }}>
          <InputLabel htmlFor="interest">Phone</InputLabel>
          <OutlinedInput
            {...register("phone", {
              required: true,
            })}
            startAdornment={
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            }
            id="interest"
            label="Phone"
          />
          {errors.phone && (
            <Typography color="error">Valid Email is required</Typography>
          )}
        </FormControl>
        <FormControl fullWidth sx={{ my: 1 }}>
          <InputLabel htmlFor="loan-terms-year">Day</InputLabel>
          <OutlinedInput
            {...register("day", {
              required: true,
            })}
            id="loan-terms-year"
            startAdornment={
              <InputAdornment position="start">
                <CalendarMonthIcon />
              </InputAdornment>
            }
            label="Day"
          />
          {errors.day && <Typography color="error">Day is required</Typography>}
        </FormControl>

                 {/* ---------- Shorif vaiya total amount ki ekhane diben naki payment page a calculate korben ---------- */}
        <FormControl fullWidth sx={{ my: 1 }}>
          <InputLabel htmlFor="loan-terms-year">Total</InputLabel>
          <OutlinedInput
            id="loan-terms-year"
            startAdornment={
              <InputAdornment position="start">
                <CalculateIcon />
              </InputAdornment>
            }
            readOnly
            label="Total"
          />
        </FormControl>

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
          Book Now
        </Button>
      </form>
    </Box>
  );
};

export default PropertyCalculate;
