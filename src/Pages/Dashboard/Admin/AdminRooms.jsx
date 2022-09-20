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
    align: "right",
  },
  {
    id: "size",
    label: "Edit",
    minWidth: 170,
    align: "right",
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
export default function AdminRooms() {
  const [open, setOpen] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);

  const updateRoom = () => {
    console.log("hello");
    setOpenUpdate(true);
  };

  const chip = <Chip size="small" label="available" color="success" />;
  const iconButton = (
    <Box bgcolor="#c4cbcb" borderRadius="50%" display="inline-block">
      <IconButton aria-label="delete" color="info" onClick={updateRoom}>
        <BorderColorIcon />
      </IconButton>
    </Box>
  );

  function createData(name, price, population, size, img) {
    return { name, price, population, size, img };
  }

  const image = (
    <img
      style={imageStyle}
      alt=""
      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
    />
  );

  const rows = [
    createData("India", "IN", chip, iconButton, image),
    createData("China", "CN", chip, iconButton, image),
    createData("Italy", "IT", chip, iconButton, image),
    createData("United States", "US", chip, iconButton, image),
    createData("Canada", "CA", chip, iconButton, image),
    createData("Australia", "AU", chip, iconButton, image),
    createData("Germany", "DE", chip, iconButton, image),
    createData("Ireland", "IE", chip, iconButton, image),
    createData("Mexico", "MX", chip, iconButton, image),
    createData("Japan", "JP", chip, iconButton, image),
    createData("France", "FR", chip, iconButton, image),
    createData("India", "IN", chip, iconButton, image),
    createData("China", "CN", chip, iconButton, image),
    createData("Italy", "IT", chip, iconButton, image),
  ];

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
              {rows.map((row, i) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column, i) => {
                      const value = row[column.id];
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
      <UpdateRoomModal openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} />
    </>
  );
}
