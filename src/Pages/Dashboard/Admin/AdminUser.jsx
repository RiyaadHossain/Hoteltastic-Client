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
import SearchIcon from '@mui/icons-material/Search';
import AddAdminModal from "./AddAdminModal";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Swal from "sweetalert2";



const columns = [
  { id: "img", label: "Image", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 100 },
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


function AdminUser() {
  const [open, setOpen] = React.useState(false);

  const banUnbane = (action) => {
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
          Swal.fire(
            'Unbanned!',
            'User has been Unbanned.',
            'success'
          )
        }
      })
    }
  };


  const BanIconButton = (
    <Box bgcolor="#c4cbcb" borderRadius="50%" display="inline-block">
      <IconButton aria-label="delete" color="error" onClick={() => banUnbane("Ban")}>
        <RemoveCircleIcon />
      </IconButton>
    </Box>
  );
  const UnBanIconButton = (
    <Box bgcolor="#c4cbcb" borderRadius="50%" display="inline-block">
      <IconButton aria-label="delete" color="success" onClick={() => banUnbane("UnBan")}>
        <VerifiedUserIcon />
      </IconButton>
    </Box>
  );

  const UnBanChip = <Chip size="small" label="Valid User" color="success" />
  const banChip = <Chip size="small" label="Ban" color="error" />

  function createData(name, email, status, action, img) {
    return { name, email, status, action, img };
  }

  const image = (
    <img
      style={imageStyle}
      alt=""
      src="http://themes.iamabdus.com/dealsy/1.0/img/user/user-thumb.jpg"
    />
  );

  const users = [
    createData("Riyad", "riyad@gmail.com", UnBanChip, BanIconButton, image),
    createData("Tajul islam", "tajulislam601@gmail.com", UnBanChip, BanIconButton, image),
    createData("Sultan", "sultan@gmail.com", UnBanChip, BanIconButton, image),
    createData("Rahatul", "rahatul@gmail.com", banChip, BanIconButton, image),
    createData("Shariful", "shariful@gmail.com", UnBanChip, BanIconButton, image),
    createData("Sadikul", "sadikul@gmail.com", UnBanChip, BanIconButton, image),
    createData("Taosif", "taosif@gmail.com", banChip, BanIconButton, image),
    createData("Alamin", "alamin@gmail.com", UnBanChip, BanIconButton, image),
    createData("Anisa", "anisa@gmail.com", banChip, BanIconButton, image),
    createData("Japan", "jobayed@gmail.com", UnBanChip, BanIconButton, image),
    createData("France", "dadfdsf@gmail.com", UnBanChip, BanIconButton, image)
  ];

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
          Total User: {users.length}
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
              {users.map((user, i) => {
                if (user.status.props.label === "Ban") user.action = UnBanIconButton;
                return (
                  <StyledTableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={i}
                  >
                    {columns.map((column, i) => {
                      const value = user[column.id];
                      return (
                        <TableCell key={i} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default AdminUser