import { Box, Typography } from '@mui/material';
// import { ResponsiveContainer } from 'recharts';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomBarChart from './CustomBarChart';





const PageStatistics = () => {
    const data = [
        {
          name: 'Sept 01',
          amount: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Sept 02',
          amount: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Sept 03',
          amount: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Sept 04',
          amount: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Sept 05',
          amount: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Sept 06',
          amount: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Sept 07',
          amount: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      
    return (
        <>
           <Box sx={{
            padding: "43px 30px",
            margin: "30px 0",
            backgroundColor: "#ffffff",
            boxShadow: "0 10px 30px 0px rgb(0 0 0 / 10%)",
            borderRadius: "10px",
       }}>
            <Typography
                 sx={{
                      fontWeight: '500',
                      fontFamily: "'Rubik', sans-serif",
                      borderBottom: "2px solid #e5e7ec",
                      paddingBottom: "10px",
                      fontSize: {
                           md: '22px',
                      },
                 }}
            >
                 Page Statistics
            </Typography>
            
            <CustomBarChart></CustomBarChart>
                 </Box>
        </>
    );
};

export default PageStatistics;