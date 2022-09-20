import { Box } from '@mui/material';
import React from 'react';
// import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';


const ComposedBarDashboard = ({data}) => {
    
    return (
        <Box sx={{
            height: '60vh',
            maxWidth: '100%',
            // backgroundColor: '#fff',
            paddingTop: '50px',
            borderTop: "2px solid #e5e7ec",
            marginTop: "3px",
            mx: 'auto',
        }}>
             <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={'100%'}
          height={'100%'}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
        </Box>
    );
};

export default ComposedBarDashboard;