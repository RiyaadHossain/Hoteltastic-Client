import { Button, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { useSelector } from 'react-redux';


const PropertyCalculate = ({room}) => {
     const auth = useSelector((state) => state.auth);
     return (
          <Box sx={{
               boxShadow: "0 15px 25px 0px rgb(0 0 0 / 8%)",
               borderRadius: "10px",
               mt: "30px",
               p: "25px 30px 30px 30px",
          }}>
               <Typography sx={{
                    fontSize: "20px",
                    fontWeight: "500",
               mb: "20px",

               }}
               >
                    Booking Info
               </Typography>
               <form >

                    <FormControl fullWidth sx={{ my: 1 }}>
                         <InputLabel htmlFor="email">Email</InputLabel>
                         <OutlinedInput
                              id="email"
                              startAdornment={<InputAdornment position="start">{auth?.user?.user?.email}</InputAdornment>}
                              label="Email"
                              disabled
                         />
                    </FormControl>


                    <FormControl fullWidth sx={{ my: 1 }}>
                         <InputLabel htmlFor="phone">Phone</InputLabel>
                         <OutlinedInput
                              id="phone"
                              startAdornment={<InputAdornment position="start">
                                   <PermPhoneMsgIcon sx={{fontSize:13}} />
                              </InputAdornment>}
                              label="Phone"
                              type='number'
                         />
                    </FormControl>

                    <FormControl fullWidth sx={{ my: 1 }}>
                         <InputLabel htmlFor="price">Price</InputLabel>
                         <OutlinedInput
                              id="price"
                              startAdornment={<InputAdornment position="start">$</InputAdornment>}
                              label="Price"
                              type='number'
                         />
                    </FormControl>
                    
                    <FormControl fullWidth sx={{ my: 1 }}>
                         <InputLabel htmlFor="interest">Interest</InputLabel>
                         <OutlinedInput
                              id="interest"
                              startAdornment={<InputAdornment position="start">%</InputAdornment>}
                              label="Interest"
                         />
                    </FormControl>
                    

                    <FormControl fullWidth sx={{ my: 1 }}>
                         <InputLabel id="days">No. Of Days</InputLabel>
                         <OutlinedInput
                              id="days"
                              startAdornment={<InputAdornment position="start"><HomeIcon sx={{fontSize:13}}/></InputAdornment>}
                              label="No. Of Days"
                         />
                    </FormControl>

                    <Button variant='outlined' sx={{
                         background: "#2dbe6c",
                         color: "white",
                         border: "1px solid #2dbe6c",
                         margin: "8px 0px 10px 0px",
                         fontWeight: "600",
                         padding: "10px 0",
                         width: "100%",
                         ":hover": {
                              background: "white",
                              border: "1px solid #2dbe6c",
                              color: "#2dbe6c",
                         }

                    }}>Book Now</Button>
               </form>
          </Box>
     );
};

export default PropertyCalculate;