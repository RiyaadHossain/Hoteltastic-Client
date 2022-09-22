import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Assets/Logo/logo.png";
import { useSelector } from "react-redux";
import Setting from "./Setting";
import { deepOrange } from "@mui/material/colors";

const pages = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/allRooms" },
  { name: "About ", path: "/aboutproject" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  if (auth.user.user && !auth.user.user?.name) {
    // return <Spinner></Spinner>
  }
  const profileImg = auth.user.user?.avatar;
  const userName = auth.user.user?.name?.slice(0, 1)?.toUpperCase();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    navigate(path);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "white" }} py={4} px={2}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: "100px" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <img
              src={Logo}
              alt=""
              width={170}
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
          </Box>
          {/* For Mobile View */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <img
                src={Logo}
                alt=""
                width={150}
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handleCloseNavMenu(page.path)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page.path} key={page.name}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontWeight: "bold",
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {!auth.isLoggedIn ? (
              <Button
                sx={{
                  color: "#2dbe6c",
                  border: "1px solid #2dbe6c",
                  "&:hover": { border: "1px solid #2dbe6c" },
                }}
                onClick={() => navigate("/signin")}
                variant="outlined"
              >
                Log In
              </Button>
            ) : (
              <Tooltip title="User Setting">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                      src={profileImg}
                      sx={{ bgcolor: deepOrange[500] }}
                    >
                      {!profileImg && userName}
                  </Avatar>
                </IconButton>
              </Tooltip>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Setting userName={userName} auth={auth} profileImg={profileImg} />
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
