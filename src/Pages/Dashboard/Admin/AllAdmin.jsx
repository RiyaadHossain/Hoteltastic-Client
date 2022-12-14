import * as React from "react";
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
import { AddCircle } from "@mui/icons-material";
import AddAdminModal from "./AddAdminModal";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useEffect } from "react";
// import { getAdmins } from "../../Store/user/getAdmins";
import {getAdmins, updateUser}  from "../../../Store/user/userAction"
 

const columns = [
  { id: "img", label: "Image", minWidth: 70 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "price", label: "Email\u00a0", minWidth: 100 },
  {
    id: "population",
    label: "Status",
    minWidth: 150,
    align: "center",
  },
  {
    id: "size",
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

export default function AllAdmin() {
  const dispatch = useDispatch();
  const { admins } = useSelector((state) => state.user);
  // console.log(admins,'admins');

 
  useEffect(()=>{
    dispatch(getAdmins())
  },[dispatch,admins])


  const [open, setOpen] = React.useState(false);
  // const userStore = useSelector((state) => state.user)
  // const dispatch = useDispatch()

  const banUnbane = (action,id) => {
    console.log("ban admin");

    if (action === "Ban") {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, Ban it!',
        buttonsStyling: true
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(updateUser({ id, status: "BanUser" }));
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
        confirmButtonText: 'Yes, UnBan it!',
        buttonsStyling: true
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

  const image = url => (
    <img
      style={imageStyle}
      alt=""
      src={url ? url : "https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg"}
    />
  );


  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={6}
        mb={3}
      >
        <Typography variant="h3" color="#2FDD92">
          Total Admin: {admins.length}
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddCircle />}
          onClick={() => setOpen(true)}
        >
          Add Admin
        </Button>
        <AddAdminModal open={open} setOpen={setOpen} />
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
              {admins.map((admin, i) => {
                // if (user.status.props.label === "Ban") user.action = UnBanIconButton;
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={i}
                  >

                    <TableCell align="left">{i+1}.</TableCell>
                    <TableCell align="left">{image(admin.avatar)}</TableCell>
                    <TableCell align="left">{admin.name}</TableCell>
                    <TableCell align="left">{admin.email}</TableCell>
                    <TableCell align="center">
                      <Chip
                        size="small"
                        label={admin.status === "BanUser" ? "Banned User" : "Admin"}
                        color={admin.status === "BanUser" ? "error" : "success"}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {
                          admin.status === "BanUser" ?

                          <Box bgcolor="#c4cbcb" borderRadius="50%" display="inline-block">
                            <IconButton aria-label="delete" color="success"
                              onClick={() => banUnbane("UnBan", admin._id)}
                            >
                              <VerifiedUserIcon />
                            </IconButton>
                          </Box>
                          :
                          <Box bgcolor="#c4cbcb" borderRadius="50%" display="inline-block">
                            <IconButton aria-label="delete" color="error" onClick={() => banUnbane("Ban",admin._id)}>
                              <RemoveCircleIcon />
                            </IconButton>
                          </Box>

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
}
