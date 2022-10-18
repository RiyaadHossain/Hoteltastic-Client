import React, { useEffect } from 'react';
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
import { getPayment } from '../../../Store/payment/paymentAction';



const columns = [
  
  { id: "name", label: "Name", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "roomID", label: "Room Id", minWidth: 100 },
  { id: "roomName", label: "Room Name", minWidth: 100 },
  { id: "price", label: "Price", minWidth: 120 },
  {
    id: "day",
    label: "Day",
    minWidth: 60,
    align: "center",
  },
  {
    id: "payment",
    label: "Payment",
    minWidth: 100,
    align: "center",
  },

  {
    id: "tnxID",
    label: "Transaction ID",
    minWidth: 150,
    align: "center",
  }
];


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

//   const userStore = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.allPayments.allBooking)
  console.log(bookings,'bokings');

  useEffect(()=>{
    dispatch(getPayment())
  },[dispatch])



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
          Total Bookings: {bookings?.length}
        </Typography>
        <Button
          startIcon={<SearchIcon />}
          variant="contained"
        >
          Search Bookings
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
              {bookings?.map((booking, i) => {
                return (
                  <TableRow
                    key={booking._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{i + 1}.</TableCell>
                    
                    <TableCell align="left">{booking.name}</TableCell>
                    <TableCell align="left">{booking.email}</TableCell>
                    <TableCell align="left">{booking.roomID}</TableCell>
                    <TableCell align="left">{booking.roomName}</TableCell>
                    <TableCell align="left">${(booking.amount)}</TableCell>
                    <TableCell align="center">
                        {booking.day}
                    </TableCell>

                    <TableCell align="center">
                    <Chip label="success" color="success" size='small'/>
                    </TableCell>
                    <TableCell align="center">
                        {booking.tnxID}
                    </TableCell>
                    {/* <TableCell align="center">
                      <Chip
                        size="small"
                        // label={user.status === "BanUser" ? "Banned User" : "Valid User"}
                        // color={user.status === "BanUser" ? "error" : "success"}
                      />
                    </TableCell> */}
                    {/* <TableCell align="center"> */}
                      {/* {
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

                      } */}


                    {/* </TableCell> */}
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