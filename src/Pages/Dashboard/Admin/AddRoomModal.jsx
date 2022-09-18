import {
  Box,
  Button,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

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

function AddRoomModal({ open, setOpen }) {
  const [currency, setCurrency] = React.useState("Two Room");
    const submitForm = (e) => {
      e.preventDefault()
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          fontWeight="bold"
          component="h2"
          mb={3}
        >
          Add New Room
        </Typography>
        <Box>
          <form onClick={submitForm}>
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
                Add
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Modal>
  );
}

export default AddRoomModal;
