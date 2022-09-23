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
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import Spinner from '../../../Components/Loaders/Spinner/Spinner.jsx'

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
  const [loading,setLoading] = useState(false)
  const [currency, setCurrency] = React.useState("Two Room");
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
    setLoading(true)
    const picture = fulldata.picture[0];

    const formData = new FormData();
    formData.append("image", picture);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;

    const {data} = await axios.post(url,formData)
    if(data.success){
      const imgUrl = data.data.url
      const dataToSend = {...fulldata,picture:imgUrl}

      dispatch(postRoom({ ...dataToSend }));



      setLoading(false)
      Swal.fire(
        'Great!',
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
  };

  return (
    <>
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
          {
             loading ? <Spinner/> : 
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
          }
        </Box>
      </Box>
    </Modal>
    </>
  );
}

export default AddRoomModal;
