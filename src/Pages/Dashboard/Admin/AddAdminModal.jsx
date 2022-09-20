import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

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

function AddAdminModal({ open, setOpen }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    const picture = data.picture[0];
    console.log(picture,'picture');
    console.log(data,'data');
    setOpen(false);
    reset();
  Swal.fire(
  'Congratulations!',
  'Admin has been added successfully!',
  'success'
)

    // dispatch(postRoom({ ...data, picture }));
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
            Add New Admin
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
              label="Name"
              variant="outlined"
              sx={{ mb: 2 }}
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && (
              <Typography color="error">Room Name is required</Typography>
            )}
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ mb: 2 }}
              {...register("email",{
                required: true,
              })}
            />
             {errors.name && (
              <Typography color="error">Email is required</Typography>
            )}
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              type="file"
              sx={{ mb: 2 }}
              {...register("picture", {
                required: true,
              })}
            />
            {errors.picture && (
              <Typography color="error">Picture is required</Typography>
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

export default AddAdminModal;
