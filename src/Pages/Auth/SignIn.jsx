import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../Store/auth/authAction";
import CustomHeader from "../../Components/CustomHeader";
import { useEffect } from "react";

function SignIn() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const googleSignIn = () => {
    window.open(
      `https://hoteltastic-server.vercel.app/auth/google/callback`,
      "_self"
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispath(signIn(data));
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <Box sx={{ mx: { xs: 2, md: 0 } }}>
      <CustomHeader>Sign In</CustomHeader>

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
          Sign In
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
          Sign In With Hoteltastic
        </Typography>

        {/* sign In form */}
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
                fontFamily: "'Rubik', sans-serif",
              }}
              textAlign="center"
              fontWeight="bold"
            >
              Please verify your Identity
            </Typography>
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
                margin: "8px 0px 10px 0px",
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
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              sx={{
                background: "none",
                width: "100%",
                padding: "",
                marginBottom: "10px",
              }}
              id="standard-textarea"
              label="Password"
              placeholder="Enter Your Password"
              multiline
              variant="standard"
            />
            {errors.password && (
              <Typography color="error">
                Password must be 6 characters long
              </Typography>
            )}
            <button type="submit" className="signInBtn">
              Sign In
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
                Have not any account?
                <Button onClick={() => navigate("/signup")}>
                  <Typography
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
                    Register Now
                  </Typography>
                </Button>
              </Typography>
            </Box>
          </form>

          {/* social signin with google */}
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
              Sign In With Google<GoogleIcon></GoogleIcon>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SignIn;
