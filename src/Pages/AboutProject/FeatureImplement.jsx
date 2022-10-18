import { Box, Chip, Typography } from "@mui/material";
import React from "react";

const FeatureImplement = () => {
  return (
    <Box
      sx={{
        fontFamily: "'Rubik', sans-serif",
        padding: "4px 70px 30px 70px",
        color: "#000",
        width: "100%",
        margin: "40 auto",
      }}
    >
      <Typography
        sx={{
          fontWeight: "500",
          margin: "40px",
          fontFamily: "'Rubik', sans-serif",
          fontSize: {
            xs: "28px",
            sm: "30px",
            md: "34px",
            borderBottom: "",
          },
        }}
        fontWeight="bold"
      >
        Features
        <Box
          sx={{
            width: "25%",
            background:
              "linear-gradient(90deg, hsl(0, 0%, 70%), hsl(0, 0%, 20%), hsl(0, 0%, 70%))",
            height: "2px",
          }}
        ></Box>
      </Typography>
      <Box ml={5}>
        <Typography maxWidth={880} mb={4}>
          Hoteltastic is a hotel management site where user can visit and book
          any exsiting room after successfully log in. Also, admin can track
          their user authorities, add-update-delete any exsiting room. Moreover,
          admin can make any user admin even he can ban any user.
        </Typography>
        <Typography width={880} mb={4} display={"flex"} alignItems="start">
          <span style={{ fontWeight: "bold", fontSize: 22 }}>
            Key Features:
          </span>
          <ul style={{ marginLeft: 35, marginTop: 5 }}>
            <li>Design the file structure following MVC Architechture Pattern</li>
            <li>Authenticate user implementing JWT Based Authentication</li>
            <li>After Authentication, user can pay and book any desired room</li>
            <li>For Authorization, implemented Role Based Authorization</li>
            <li>Have protected routes which can be navigated by admin only</li>
            <li>Moreover, admin can make admin any user and even can ban</li>
            <li>Additionaly, admin can create-update-delete any room</li>
            <li>Have functionality for Admin & User Dashboard</li>
            <li>Admin can post room photo using Multer </li>
          </ul>
        </Typography>
        <Box display='flex' flexWrap='wrap' gap={1} >
          <Chip label="HTML" variant="outlined" color="info" size="small" />
          <Chip label="CSS" variant="outlined" color="info" size="small" />
          <Chip label="JavaScript" variant="outlined" color="info" size="small" />
          <Chip label="React" variant="outlined" color="info" size="small" />
          <Chip label="React Hook" variant="outlined" color="info" size="small" />
          <Chip label="Fucntinal Component" variant="outlined" color="info" size="small" />
          <Chip label="React Hook Form" variant="outlined" color="info" size="small" />
          <Chip label="Redux" variant="outlined" color="info" size="small" />
          <Chip label="Axios" variant="outlined" color="info" size="small" />
          <Chip label="MUI" variant="outlined" color="info" size="small" />
          <Chip label="Node" variant="outlined" color="info" size="small" />
          <Chip label="Express" variant="outlined" color="info" size="small" />
          <Chip label="MongoDB" variant="outlined" color="info" size="small" />
          <Chip label="Mongoose" variant="outlined" color="info" size="small" />
          <Chip label="JWT" variant="outlined" color="info" size="small" />
          <Chip label="Bcrypt" variant="outlined" color="info" size="small" />
          <Chip label="Multer" variant="outlined" color="info" size="small" />
          <Chip label="MVC" variant="outlined" color="info" size="small" />
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureImplement;
