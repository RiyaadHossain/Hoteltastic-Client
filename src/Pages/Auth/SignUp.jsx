import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import CustomHeader from "../../Components/CustomHeader";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../Store/auth/authAction";
import { useEffect } from "react";

function SignUp() {
  const navigate = useNavigate();
  const dispath = useDispatch()
  const auth = useSelector(state => state.auth)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispath(signUp(data))
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate("/signin")
    }
  }, [auth, navigate])
  const googleSignIn = () => {
    window.open(`http://localhost:5001/auth/google/callback`, "_self");
  }
  return (
    <Box sx={{ mx: { xs: 2, md: 0 } }}>
      <CustomHeader>Sign Up</CustomHeader>
      <Box
        sx={{
          textAlign: "center",
          fontFamily: "'Rubik', sans-serif",
          padding: "80px 0px 120px 0px",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "38px",
              sm: "45px",
              md: "18px",
            },
            textTransform: "uppercase",
            fontFamily: "'Rubik', sans-serif",
            fontWeight: "500",
          }}
          fontWeight="bold"
          color="#2dbe6c"
        >
          Sign Up
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontFamily: "'Rubik', sans-serif",
            fontSize: {
              xs: "38px",
              sm: "45px",
              md: "40px",
            },
          }}
          fontWeight="bold"
        >
          Sign Up With Hoteltastic
        </Typography>

        {/* sign up form */}
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "80%",
              md: "50%",
              lg: "40%",
            },
            margin: "auto",
            padding: "60px 40px",
            borderRadius: "10px",
            textAlign: "left",
            marginTop: "30px",
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "20px",
                  md: "18px",
                },

                textTransform: "capitalize",
                fontFamily: "'Rubik', sans-serif",
              }}
              textAlign= 'center'
              fontWeight="bold"
              color="#00000"
            >
              Sign Up
            </Typography>
            {/* ====== Name ====== */}
            <TextField
              {...register("name", {
                required: true,
                minLength: 3,
                maxLminLength: 20,
              })}
              sx={{
                background: "none",
                width: "100%",
                padding: "",
                margin: "8px 0px 10px 0px",
              }}
              id="standard-textarea"
              label="Name"
              placeholder="Enter Your Name"
              multiline
              variant="standard"
            />
            {errors.name && (
              <Typography color="error">
                Name should be 3 to 20 letters
              </Typography>
            )}
            {/* ====== Email ====== */}
            <TextField
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/i,
              })}
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
            {errors.email && (
              <Typography color="error">Valid Email is required</Typography>
            )}
            {/* ====== Password ====== */}
            <TextField
              {...register("password", { required: true, minLength: 6 })}
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
            {errors.password && (
              <Typography color="error">
                Must be at least 6 characters
              </Typography>
            )}
            <button type="submit" className="signInBtn">
              Sign Up
            </button>
            <Box
              sx={{
                textAlign: "center",
                fontFamily: "'Rubik', sans-serif",
                margin: "20px 0px",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "22px",
                    sm: "20px",
                    md: "16px",
                  },

                  textTransform: "capitalize",
                  fontFamily: "'Rubik', sans-serif",
                  fontWeight: "500",
                }}
                fontWeight="bold"
                color="#999999"
              >
                Already have a account?
                <Button>
                  <Typography
                    onClick={() => navigate("/signin")}
                    sx={{
                      cursor: "pointer",
                      fontSize: {
                        xs: "22px",
                        sm: "20px",
                        md: "16px",
                      },
                      textTransform: "capitalize",
                      fontFamily: "'Rubik', sans-serif",
                      fontWeight: "500",
                    }}
                    fontWeight="bold"
                    color="#2dbe6c"
                  >
                    Log In
                  </Typography>
                </Button>
              </Typography>
            </Box>
          </form>

          {/* social signup */}
          <Box>
            <Button 
            onClick={googleSignIn}
              sx={{
                width: "100%",
                color: "#2dbe6c",
                fontSize: "18px",
                padding: "10px 0px",
                borderRadius: "10px",
                textTransform: "capitalize",
                borderColor: "#2dbe6c",
                "&:hover": {
                  borderColor: "#2dbe6c",
                  background: "#2dbe6c",
                  color: "#ffffff",
                },
              }}
              variant="outlined"
            >
              Sign Up With Google<GoogleIcon></GoogleIcon>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
