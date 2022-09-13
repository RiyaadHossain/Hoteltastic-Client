import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { Avatar, Divider, ListItemIcon, MenuItem } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../Store/authSlice";

function Setting() {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(authAction.signOut());
    window.location.reload();
  };

  return (
    <>
      <MenuItem>
        <Avatar /> Profile
      </MenuItem>
      <MenuItem>
        <Avatar /> My account
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={signOut}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </>
  );
}

export default Setting;
