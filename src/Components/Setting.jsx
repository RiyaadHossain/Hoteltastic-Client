import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, Chip, Divider, ListItemIcon, MenuItem } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../Store/auth/authSlice";
// import AppsIcon from "@mui/icons-material/Apps";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { deepOrange, red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

function Setting({ userName, profileImg, auth }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = auth?.user?.user?.role;
  const signOut = () => {
    window.open(`https://hoteltastic-server.vercel.app/auth/logout`, "_self");
    dispatch(authAction.signOut());
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <MenuItem onClick={() => navigate("/profile")}>
        <Avatar src={profileImg} sx={{ bgcolor: deepOrange[500] }}>
          {!profileImg && userName}
        </Avatar>
        My Profile
      </MenuItem>
      <MenuItem onClick={() => navigate(`/${role.toLowerCase()}/dashboard`)}>
        <ListItemIcon>
          <DashboardIcon fontSize="medium" />
        </ListItemIcon>
        {role && role} DashBoard
      </MenuItem>
      <Divider />

      <MenuItem onClick={signOut} sx={{ color: "white" }}>
        <Chip
          sx={{
            p: 3,
            fontSize: "15px",
            bgcolor: red[400],
            color: "white",
            cursor: "pointer",
          }}
          icon={<LogoutIcon />}
          label="Sign Out"
        />
      </MenuItem>
    </>
  );
}

export default Setting;
