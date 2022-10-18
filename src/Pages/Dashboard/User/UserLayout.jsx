import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../../../Assets/Logo/logo.png";
import { Outlet, useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';

import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';

const drawerWidth = 230;

function UserLayout(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sideMenu = [
    { name: "Home", icon: <HomeIcon />, path: "/user/dashboard" },
    {
      name: "Booked Rooms",
      icon: <BedroomChildIcon />,
      path: "myBookings",
    },
    {
      name: "Favourite",
      icon: <FolderSpecialIcon />,
      path: "favourite",
    }
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {sideMenu.map((menu, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => navigate(`${menu.path}`)}
          >
            <ListItemButton>
              <ListItemIcon> {menu.icon} </ListItemIcon>
              <ListItemText primary={menu.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} bgcolor="#e8ebed" minHeight='100vh'>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: blue[300] }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={Logo}
            alt=""
            width={150}
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            position: "sticky",
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block", height: "100vh" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            position: "sticky",
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          background: `linear-gradient(to right, #085078, #85d8ce)`,
        }}
      >
        {/* ---------------------just added the background here------------------------- */}
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default UserLayout;
