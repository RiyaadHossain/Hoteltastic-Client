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
import {
  Button,
  Chip,
  IconButton,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
// import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddRoomModal from "../Admin/AddRoomModal";
import UpdateRoomModal from "../Admin/UpdateRoomModal";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CancelIcon from "@mui/icons-material/Cancel";
// import Swal from "sweetalert2";
import { useSelector } from "react-redux";
// import { updateRoom } from "../../../Store/room/roomAction";
import EmojiEmotionsSharpIcon from "@mui/icons-material/EmojiEmotionsSharp";
import { useNavigate } from "react-router-dom";

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

function MyOrders() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const room = useSelector((state) => state.room);
  const auth = useSelector((state) => state.auth.user.user);
  console.log(auth);

  const userRoom = room.rooms.filter((ro) => ro._id === auth._id);
  console.log(userRoom);

  const image = (url) => (
    <img
      style={imageStyle}
      alt=""
      src={
        url ? url : "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      }
    />
  );

  return (
    <>
      {userRoom.length ? (
        <>
          <Typography variant="h3" color="#2FDD92" my={3} mt={5}>
            Total Bookings: {userRoom.length}
          </Typography>
          <AddRoomModal open={open} setOpen={setOpen} />
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Sl No</StyledTableCell>
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
                  {userRoom.map((room, i, row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{i + 1}.</TableCell>
                      <TableCell align="left">
                        {image(room.propertyImage)}
                      </TableCell>
                      <TableCell align="left">{room?.propertyName}</TableCell>
                      <TableCell align="left">{room.startFrom}</TableCell>
                      <TableCell align="center">
                        <Chip
                          size="small"
                          label={row.status === "Open" ? "Enjoyed" : "Enjoyed"}
                          color={row.status === "Open" ? "success" : "success"}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <>
                          <Box
                            bgcolor="#c4cbcb"
                            borderRadius="50%"
                            display="inline-block"
                          >
                            <Tooltip
                              TransitionComponent={Zoom}
                              title="Be Happy with what you've"
                              arrow
                            >
                              <IconButton aria-label="delete" color="info">
                                <EmojiEmotionsSharpIcon />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </>
      ) : (
        <>
          <Typography variant="h3" color="#2FDD92" my={3} mt={5}>
            No Room Booked yet.
          </Typography>
          <Button variant="contained" onClick={() => navigate("/allRooms")}>Book Now</Button>
        </>
      )}
      <UpdateRoomModal openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} />
    </>
  );
}

export default MyOrders;
