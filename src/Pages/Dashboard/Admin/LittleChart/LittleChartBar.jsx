import { Box } from '@mui/material';
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LittleChartBar = ({data}) => {
    return (
        <Box sx={{width:'100%',height:'100%'}}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={'100%'} height={'100%'} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default LittleChartBar;