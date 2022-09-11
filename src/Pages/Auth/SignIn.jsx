import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Background from "../../Assets/Background/callToActionBg.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "15rem",
          background: `rgba(229, 248, 237,0.9) url(${Background}) no-repeat`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              sm: "30px",
              md: "40px",
            },
            marginBottom: "10px",
            fontWeight: 500,
          }}
        >
          Sign In
        </Typography>
        <Typography>
          Home
          <ChevronRightIcon sx={{ fontSize: 14, mx: 1 }} />
          <Typography
            component="span"
            sx={{
              color: "#2dbe6c",
              fontWeight: 500,
            }}
          >
            Sign In
          </Typography>
        </Typography>
      </Box>
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
            width: "50%",
            margin: "auto",
            padding: "60px 40px",
            borderRadius: "10px",
            textAlign: "left",
            marginTop: "30px",
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
          }}
        >
          <form>
            <Typography
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "20px",
                  md: "18px",
                },

                textTransform: "capitalize",
                fontFamily: "'Rubik', sans-serif",
                fontWeight: "500",
              }}
              fontWeight="bold"
              color="#00000"
            >
              Sign In
            </Typography>
            <TextField
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
            <button className="signInBtn">Sign In</button>
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
                <Button>
                  <Typography
                    onClick={() => navigate("/signup")}
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

          {/* social signin */}
          <Box>
            <Button
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
