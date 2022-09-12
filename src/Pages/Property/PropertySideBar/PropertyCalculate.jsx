import { Button, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from 'react';

const PropertyCalculate = () => {
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
                    Mortgage Calculator
               </Typography>
               <form >

                    <FormControl fullWidth sx={{ my: 1 }}>
                         <InputLabel htmlFor="totalAmount">Total Amount</InputLabel>
                         <OutlinedInput
                              id="totalAmount"
                              startAdornment={<InputAdornment position="start">$</InputAdornment>}
                              label="Total Amount"
                         />
                    </FormControl>
                    <FormControl fullWidth sx={{ my: 1 }}>
                         <InputLabel htmlFor="downPayment">Down Payment</InputLabel>
                         <OutlinedInput
                              id="downPayment"
                              startAdornment={<InputAdornment position="start">$</InputAdornment>}
                              label="Down Payment"
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
                         <InputLabel htmlFor="loan-terms-year">Loan Terms Year</InputLabel>
                         <OutlinedInput
                              id="loan-terms-year"
                              startAdornment={<InputAdornment position="start"><CalendarMonthIcon /></InputAdornment>}
                              label="loan terms year"
                         />
                    </FormControl>

                    <FormControl fullWidth sx={{ my: 1 }}>
                         <InputLabel id="demo-simple-select-label">Type</InputLabel>
                         <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Type"
                         >
                              <MenuItem value={10}>Monthly</MenuItem>
                              <MenuItem value={20}>Yearly</MenuItem>
                         </Select>
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

                    }}>Calculate Now</Button>
               </form>
          </Box>
     );
};

export default PropertyCalculate;