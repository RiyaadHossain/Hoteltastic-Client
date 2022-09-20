import { Box } from '@mui/material';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';


const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#564d65', '#3a506b'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
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
          height: '60vh',
          maxWidth: '100%',
          // backgroundColor: '#fff',
          paddingTop: '50px',
          borderTop: "2px solid #e5e7ec",
          marginTop: "3px",
          mx: 'auto',
        }}>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={'100%'} height={400}>
          <Pie
            data={data}
            cx="30%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={90}
            innerRadius={40}
            fill="#8884d8"
            dataKey="value"
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
             <Tooltip />
                <Legend />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
        </Box>
    );
};

export default PieChartDashboard;

