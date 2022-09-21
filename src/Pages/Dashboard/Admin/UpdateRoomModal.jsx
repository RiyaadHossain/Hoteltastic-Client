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
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { updateRoom } from "../../../Store/room/roomAction";
import axios from "axios";
import Spinner from "../../../Components/Loaders/Spinner/Spinner";

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
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const imgStorage_key = `75bc4682c9291f359647ab98df5f76de`;

  const onSubmit = async (fulldata) => {
    setLoading(true);
    const picture = fulldata.picture[0];

    const formData = new FormData();
    formData.append("image", picture);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;

    const { data } = await axios.post(url, formData);
    if (data.success) {
      const imgUrl = data.data.url;
      const dataToSend = { ...fulldata, picture: imgUrl };

      console.log(dataToSend);
      dispatch(updateRoom({ ...dataToSend, id: openUpdate._id }));

      setLoading(false);
      Swal.fire("Good job!", "You clicked the button!", "success");
      setOpenUpdate(false);
      reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Image upload failed!",
      });
    }
  };

  return (
    <Modal
      open={openUpdate}
      onClose={() => setOpenUpdate(false)}
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
            Update Room Info
          </Typography>
          <Button
            sx={{ color: "darkred" }}
            onClick={() => setOpenUpdate(false)}
          >
            <CancelIcon sx={{ fontSize: 30 }} />
          </Button>
        </Box>
        <Box>
          {loading ? (
            <Spinner />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Room Name"
                variant="outlined"
                defaultValue={openUpdate?.name}
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
                defaultValue={openUpdate?.category}
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
                defaultValue={openUpdate?.price}
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
                {...register("picture", { required: true })}
              />
              {errors.picture && (
                <Typography color="error">Room Picture is required</Typography>
              )}
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Description"
                multiline
                defaultValue={openUpdate?.description}
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
                  Update
                </Button>
              </Box>
            </form>
          )}
        </Box>
      </Box>
    </Modal>
  );
}

export default UpdateRoomModal;
