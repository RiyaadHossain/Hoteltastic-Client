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
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddRoomModal from "./AddRoomModal";
import UpdateRoomModal from "./UpdateRoomModal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const columns = [
  {
    id: "img",
    label: "Image",
    minWidth: 170,
  },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "price", label: "Price\u00a0", minWidth: 100 },
  {
    id: "population",
    label: "Status",
    minWidth: 150,
    align: "center",
  },
  {
    id: "size",
    label: "Actions",
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

export default function AdminRooms() {
  const [open, setOpen] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const room = useSelector((state) => state.room);
  console.log(room);

  let closeRoom = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Deactivate it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deactivated!",
          "Room status has been set to deactivate.",
          "success"
        );
      }
    });
  };

  let openRoom = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Activate it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Activated!",
          "Room status has been set to Activate.",
          "success"
        );
      }
    });
  };

  const updateRoom = () => {
    setOpenUpdate(true);
  };

  const closeButton = (id) => {
    return (
      <Box bgcolor="#c4cbcb" borderRadius="50%" display="inline-block" ml={2}>
        <IconButton
          aria-label="Active"
          color="error"
          onClick={() => closeRoom(id)}
        >
          <CancelIcon />
        </IconButton>
      </Box>
    );
  };

  const openButton = (id) => {
    return (
      <Box bgcolor="#c4cbcb" borderRadius="50%" display="inline-block" ml={2}>
        <IconButton
          aria-label="Active"
          color="success"
          onClick={() => openRoom(id)}
        >
          <CheckCircleIcon />
        </IconButton>
      </Box>
    );
  };

  const image = (
    <img
      style={imageStyle}
      alt=""
      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
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
          Total Rooms: 25
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddCircle />}
          onClick={() => setOpen(true)}
        >
          Add Room
        </Button>
        <AddRoomModal open={open} setOpen={setOpen} />
      </Box>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, i) => (
                  <StyledTableCell
                    key={i}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {room.rooms.map((row, i) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{image}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.price}</TableCell>
                  <TableCell align="center">
                    <Chip
                      size="small"
                      label={row.status === "Open" ? "Open" : "Close"}
                      color={row.status === "Open" ? "success" : "error"}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <>
                      <Box
                        bgcolor="#c4cbcb"
                        borderRadius="50%"
                        display="inline-block"
                      >
                        <IconButton
                          aria-label="delete"
                          color="info"
                          onClick={updateRoom}
                        >
                          <BorderColorIcon />
                        </IconButton>
                      </Box>
                      {row.status === "Open"
                        ? closeButton(row.id)
                        : openButton(row.id)}
                    </>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <UpdateRoomModal openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} />
    </>
  );
}
