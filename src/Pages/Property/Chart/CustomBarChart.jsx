import { Box } from '@mui/material';
// import { ResponsiveContainer } from 'recharts';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const CustomBarChart = () => {
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
            height: '60vh',
            maxWidth: '100%',
            backgroundColor: '#fff',
            paddingTop: '50px',
            borderTop: "2px solid #e5e7ec",
            marginTop: "3px",
        }}>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart 
            width={'100%'} 
            height={40} 
            data={data}
            barSize={30}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="amount" fill="#84d8bd"/>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip  cursor={{fill: 'transparent'}} />
                <Legend />
            </BarChart>
        </ResponsiveContainer>
        </Box>
        </>
    );
};

export default CustomBarChart;