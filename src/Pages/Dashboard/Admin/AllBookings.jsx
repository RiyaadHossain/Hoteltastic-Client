import React from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Box } from "@mui/system";
import { Button, Chip, IconButton, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../Store/user/userAction";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';



const columns = [
  { id: "img", label: "Image", minWidth: 120 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 100 },
  {
    id: "role",
    label: "Role",
    minWidth: 120,
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 120,
    align: "center",
  },

  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "center",
  },
];

const imageStyle = {
  width: 60,
  height: 60,
  objectFit: "cover",
  borderRadius: "50%",
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));




const AllBookings = () => {

    const userStore = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const banUnbane = (action, id) => {
    if (action === "Ban") {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, Ban it!'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(updateUser({ id, status: "BanUser" }));
          dispatch(updateUser({ id, role: "User" }));
          Swal.fire(
            'Banned!',
            'User has been Banned.',
            'success'
          )
        }
      })
    }

    if (action === "UnBan") {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, UnBan it!'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(updateUser({ id, status: "ValidUser" }));
          Swal.fire(
            'Unbanned!',
            'User has been Unbanned.',
            'success'
          )
        }
      })
    }
  };

  const MakeRemoveAdmin = (action, id) => {
    if (action === "Admin") {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, Make Admin!'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(updateUser({ id, role: "Admin" }));
          Swal.fire(
            'Maked Admin!',
            'User has been Maked Admin.',
            'warning'
          )
        }
      })
    }

    if (action === "User") {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Remove Admin!'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(updateUser({ id, role: "User" }));
          Swal.fire(
            'Removed!',
            'User Removed From Admin.',
            'success'
          )
        }
      })
    }
  };

  const image = (src) => (
    <img
      style={imageStyle}
      alt=""
      src={src ? src : "https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg"}
    />
  );

    return (
        <>
            <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
        mb={3}
      >
        <Typography variant="h4" color="#2FDD92">
          Total User: {userStore.users.length}
        </Typography>
        <Button
          startIcon={<SearchIcon />}
          variant="contained"
        >
          Search User
        </Button>
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell
                >
                  Sl No
                </StyledTableCell>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {userStore.users.map((user, i) => {
                // if (user.status.props.label === "Ban") user.action = UnBanIconButton;
                return (
                  <TableRow
                    key={user._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{i + 1}.</TableCell>
                    <TableCell align="left">{image(user.avatar)}</TableCell>
                    <TableCell align="left">{user.name}</TableCell>
                    <TableCell align="left">{user.email}</TableCell>
                    <TableCell align="center">
                      {user.status !== "BanUser" &&
                        <Chip
                          size="small"
                          label={user.role === "Admin" ? "Admin" : "User"}
                          color={user.role === "Admin" ? "warning" : "info"}
                        />}
                    </TableCell>
                    <TableCell align="center">
                      <Chip
                        size="small"
                        label={user.status === "BanUser" ? "Banned User" : "Valid User"}
                        color={user.status === "BanUser" ? "error" : "success"}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {
                        user.status === "BanUser" ?

                          <Box bgcolor="#c4cbcb" borderRadius="50%" display="inline-block">
                            <IconButton aria-label="delete" color="success"
                              onClick={() => banUnbane("UnBan", user._id)}
                            >
                              <VerifiedUserIcon />
                            </IconButton>
                          </Box>
                          :
                          <Box bgcolor="#c4cbcb" borderRadius="50%" display="inline-block">
                            <IconButton aria-label="delete" color="error" onClick={() => banUnbane("Ban", user._id)}>
                              <RemoveCircleIcon />
                            </IconButton>
                          </Box>

                      }
                      {
                        user.status !== "BanUser" && (
                          user.role === "Admin" ?

                            <Box bgcolor="#c4cbcb" borderRadius="50%" display="inline-block" ml={"7px"}>
                              <IconButton aria-label="delete" color="info"
                                onClick={() => MakeRemoveAdmin("User", user._id)}
                              >
                                <AccountCircleIcon />
                              </IconButton>
                            </Box>
                            :
                            <Box bgcolor="#c4cbcb" borderRadius="50%" display="inline-block" ml={"7px"}>
                              <IconButton aria-label="delete" color="warning" onClick={() => MakeRemoveAdmin("Admin", user._id)}>
                                <AdminPanelSettingsIcon />
                              </IconButton>
                            </Box>
                        )

                      }


                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
        </>
    );
};

export default AllBookings;