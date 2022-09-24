import { Box } from '@mui/material';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LittleChart = ({data}) => {

    // const data = [
    //     {
    //       name: 'Page A',
    //       uv: 4000,
    //       pv: 2000,
    //       amt: 2400,
    //     },
    //     {
    //       name: 'Page B',
    //       uv: 3000,
    //       pv: 1398,
    //       amt: 2210,
    //     },
    //     {
    //       name: 'Page C',
    //       uv: 2000,
    //       pv: 7000,
    //       amt: 2290,
    //     },
    //     {
    //       name: 'Page D',
    //       uv: 2780,
    //       pv: 3008,
    //       amt: 2000,
    //     },
    //     {
    //         name: 'Page D',
    //         uv: 2780,
    //         pv:9008,
    //         amt: 2000,
    //       },
    //       {
    //         name: 'Page D',
    //         uv: 2780,
    //         pv:5008,
    //         amt: 2000,
    //       },
    //   ];

    return (
        <Box sx={{ width:"100%", height:"100%"}}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={'100%'} height={'100%'} data={data}>
                    <Line type="monotone" dataKey="pv" stroke="#75caeb" strokeWidth={3} />
                    <Tooltip/>
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default LittleChart;