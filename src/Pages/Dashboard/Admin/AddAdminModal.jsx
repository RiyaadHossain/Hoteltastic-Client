import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";

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
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch();

   // imgStorage api for image upload
   const imgStorage_key = `75bc4682c9291f359647ab98df5f76de`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (fulldata) => {
    const picture = fulldata.picture[0];


    const formData = new FormData();
    formData.append("image", picture);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;

    const {data} = await axios.post(url,formData)
    if(data.success){
      const imgUrl = data.data.url
      const dataToSend = {...fulldata,picture:imgUrl,role:"Admin"}
      console.log(dataToSend,'full main data')

      // dispatch(postRoom({ ...dataToSend }));



      setLoading(false)
      Swal.fire(
        'Good job!',
        'New room data has been added!',
        'success'
      )
      setOpen(false);
      reset()
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Image upload failed!',
      })
    }


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
              sx={{ mb: 1 }}
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
              sx={{ mb: 1 }}
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
              sx={{ mb: 1 }}
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
