import React from "react";
import {
  Box,
  Button,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 600,
  bgcolor: "background.paper",
  border: "2px solid gray",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

const currencies = [
  {
    value: "Two Room",
    label: "Two Room",
  },
  {
    value: "Separate Bathroom",
    label: "Separate Bathroom",
  },
  {
    value: "Single Room",
    label: "Single Room",
  },
];

function UpdateRoomModal({ openUpdate, setOpenUpdate }) {
  const [currency, setCurrency] = React.useState("Two Room");
  const submitForm = (e) => {
    e.preventDefault();
    setOpenUpdate(false);
  };

  return (
    <Modal
      open={openUpdate}
      onClose={() => setOpenUpdate(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Typography
            id="modal-modal-title"
            variant="h5"
            fontWeight="bold"
            component="h2"
            mb={3}
          >
            Update Room Info
          </Typography>
          <Button sx={{color: 'darkred'}} onClick={() => setOpenUpdate(false)}>
            <CancelIcon sx={{ fontSize: 30 }} />
          </Button>
        </Box>
        <Box>
          <form onSubmit={submitForm}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Room Name"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              id="outlined-select-currency"
              select
              fullWidth
              label="Category"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              sx={{ mb: 2 }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Price"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              type="file"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
            />
            <Box textAlign="center" mt={2}>
              <Button type="submit" variant="contained">
                Update
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Modal>
  );
}

export default UpdateRoomModal;
