import {
  Box,
  Button,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postRoom } from "../../../Store/room/roomAction";

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
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const picture = data.picture[0];

    dispatch(postRoom({ ...data, picture }));
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Typography
            id="modal-modal-title"
            variant="h5"
            fontWeight="bold"
            component="h2"
            mb={3}
          >
            Add New Room
          </Typography>
          <Button sx={{ color: "darkred" }} onClick={() => setOpen(false)}>
            <CancelIcon sx={{ fontSize: 30 }} />
          </Button>
        </Box>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Room Name"
              variant="outlined"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && (
              <Typography color="error">Room Name is required</Typography>
            )}
            <TextField
              id="outlined-select-currency"
              select
              fullWidth
              label="Category"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              sx={{ mt: 2 }}
              {...register("category")}
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
              sx={{ mt: 2 }}
              {...register("price", {
                required: true,
              })}
            />
            {errors.price && (
              <Typography color="error">Room Price is required</Typography>
            )}
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              type="file"
              sx={{ mt: 2 }}
              {...register("picture", {
                required: true,
              })}
            />
            {errors.picture && (
              <Typography color="error">Room Picture is required</Typography>
            )}
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              sx={{ mt: 2 }}
              {...register("description", {
                required: true,
              })}
            />
            {errors.description && (
              <Typography color="error">
                Room Description is required
              </Typography>
            )}
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
