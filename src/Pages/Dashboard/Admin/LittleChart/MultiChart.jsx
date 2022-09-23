import { Box } from '@mui/material';
import React from 'react';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';

const MultiChart = () => {
    const data = [
        {
          name: 'January',
          Profit: 4000,
          Expense: 2400,
          amt: 2400,
        },
        {
          name: 'February',
          Profit: -3000,
          Expense: 1398,
          amt: 2210,
        },
        {
          name: 'March',
          Profit: -2000,
          Expense: -9800,
          amt: 2290,
        },
        {
          name: 'April',
          Profit: 2780,
          Expense: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          Profit: -1890,
          Expense: 4800,
          amt: 2181,
        },
        {
          name: 'June',
          Profit: 2390,
          Expense: -3800,
          amt: 2500,
        },
        {
          name: 'July',
          Profit: 3490,
          Expense: 4300,
          amt: 2100,
        },
      ];
    return (
        <Box sx={{width:'100%' ,height:'100%'}}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                width={'100%'}
                height={'100%'}
                data={data}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip  cursor={{fill: 'transparent'}} />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="Expense" fill="#7367f0" />
                <Bar dataKey="Profit" fill="#ff9f43" />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default MultiChart;