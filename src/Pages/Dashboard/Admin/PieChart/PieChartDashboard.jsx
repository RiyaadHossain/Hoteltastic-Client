import { Box } from '@mui/material';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';


const data = [
  { name: 'Social', value: 400 },
  { name: 'Phone', value: 300 },
  // { name: 'Group C', value: 300 },
  // { name: 'Group D', value: 200 },
];

const COLORS = ['#50C878', '#AFE1AF', '#ECFFDC', '#3a506b'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.9;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartDashboard = () => {
    return (
        <Box sx={{
          height:'150px',
          // height: '60vh',
          maxWidth: '100%',
          // backgroundColor: '#fff',
          // paddingTop: '50px',
          // borderTop: "2px solid #e5e7ec",
          // marginTop: "3px",
          // mx: 'auto',
        }}>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={'100%'} height={'50px'}>
          <Pie
            data={data}
            cx="50%"
            cy="40%"
            labelLine={false}
            // label={renderCustomizedLabel}
            outerRadius={40}
            innerRadius={20}
            fill="#AFE1AF"
            dataKey="value"
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip/>
          <Legend/>
        </PieChart>
      </ResponsiveContainer>
        </Box>
    );
};

export default PieChartDashboard;

