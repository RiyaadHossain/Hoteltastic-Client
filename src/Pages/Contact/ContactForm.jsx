import { Box, Button, Input, TextField, Typography } from "@mui/material";
import React from "react";
const ariaLabel = { "aria-label": "description" };

const ContactForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
       
        p: "80px",
        backgroundColor: "#E5F8ED",
      }}
    >
      <Box
        sx={{
          width: "50%",
          p: "40px 40px 40px 0px",
        }}
      >
        <form>
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
            Contact US
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              my: "10px",
              fontFamily: "'Rubik', sans-serif",
              fontSize: {
                xs: "38px",
                sm: "45px",
                md: "40px",
              },
            }}
            fontWeight="bold"
          >
            CONTACT US
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Input
              sx={{
                width: "45%",

                m: "10px 10px 10px 0px ",
              }}
              defaultValue="Your Name"
              inputProps={ariaLabel}
            />
            <Input
              sx={{
                width: "45%",
                m: "10px",
              }}
              defaultValue="Email Address"
              inputProps={ariaLabel}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Input
              sx={{
                width: "45%",
                m: "10px 10px 10px 0px ",
              }}
              defaultValue="Phone"
              inputProps={ariaLabel}
            />
            <Input
              sx={{
                width: "45%",
                m: "10px",
              }}
              defaultValue="Subject"
              inputProps={ariaLabel}
            />
          </Box>

          <TextField
            sx={{
              width: "96%",
              m: "10px 10px 10px 0px ",
            }}
            id="standard-multiline-static"
            multiline
            rows={4}
            defaultValue="Message"
            variant="standard"
          />
          <Button
            variant="outlined"
            sx={{
              background: "#2dbe6c",
              color: "white",
              fontSize: "",
              textTransform: "capitalize",
              border: "1px solid #2dbe6c",
              margin: "20px 0px 10px 0px",
              fontWeight: "600",
              padding: "15px 0",
              width: "30%",
              ":hover": {
                background: "white",
                border: "1px solid #2dbe6c",
                color: "#2dbe6c",
              },
            }}
          >
            Send Message
          </Button>
        </form>
      </Box>
      <Box
        sx={{
          width: "50%",
        }}
      >
        {/* google embed map starts here */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223928042!2d90.27919385980498!3d23.78088745600753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1662929185906!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{
              border: 0,
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }}
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
