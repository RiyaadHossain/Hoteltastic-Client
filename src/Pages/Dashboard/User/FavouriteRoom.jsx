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
import { Chip, IconButton, Typography } from "@mui/material";
import UpdateRoomModal from "../Admin/UpdateRoomModal";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteFavourites,
  getFavourites,
} from "../../../Store/user/userAction";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

function FavouriteRoom() {
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const favourites = useSelector((state) => state.user?.favourites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavourites());
  }, [dispatch]);

  let openRoom = (id) => {
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
        console.log(id)
        dispatch(deleteFavourites({ id }));
        Swal.fire(
          "Activated!",
          "Room status has been set to Activate.",
          "success"
        );
      }
    });
  };


  const image = (url) => <img style={imageStyle} alt="" src={url} />;

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={3}
        mt={5}
      >
        <Typography variant="h3" color="#2FDD92">
          Total Favourites: {favourites?.length}
        </Typography>
      </Box>
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
              {favourites?.map((row, i) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >{console.log(row.room.status)}
                  <TableCell align="left">{i + 1}.</TableCell>
                  <TableCell align="left">
                    {image(row?.room?.propertyImage)}
                  </TableCell>
                  <TableCell align="left">{row?.room?.propertyName}</TableCell>
                  <TableCell align="left">{row?.room?.startFrom}</TableCell>
                  <TableCell align="center">
                    <Chip
                      size="small"
                      label={row.room?.status === "Open" ? "Open" : "Close"}
                      color={row.room?.status === "Open" ? "success" : "error"}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <>
                      <Box
                        bgcolor="#c4cbcb"
                        borderRadius="50%"
                        display="inline-block"
                        ml={2}
                      >
                        <IconButton
                          aria-label="Active"
                          color="error"
                          onClick={() => openRoom(row._id)}
                        >
                          <FavoriteIcon />
                        </IconButton>
                      </Box>
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

export default FavouriteRoom;
