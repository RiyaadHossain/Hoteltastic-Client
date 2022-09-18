import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CardForDashboard from '../../../Components/MiniCard/CardForDashboard'
import CustomBarChart from '../../Property/Chart/CustomBarChart'
import AreaChartDashboard from './AreaChart/AreaChartDashboard'
import ComposedBarDashboard from './ComposedBar/ComposedBarDashboard'
import PieChartDashboard from './PieChart/PieChartDashboard'

function AdminHome() {
  const data = [
    {
      name: 'January',
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: 'February',
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: 'March',
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: 'April',
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: 'May',
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'June',
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];
  return (
    <Box sx={{
      // background: '#085078'
      // background: -webkit-linear-gradient(to right, #085078, #85d8ce)
      background: `linear-gradient(to right, #085078, #85d8ce)`
    }}>
      <Box sx={{
      fontFamily: "'Rubik', sans-serif",
      fontSize:{
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '20px',
      },
      borderRadius: '10px',
      background : '#1c2541',
      color : '#fff',
      textAlign : 'center',
      width : {
        xs: '100%',
        sm: '100%',
        md: '70%',
        lg: '50%',
      },
      mx : 'auto',
      padding : '10px 0px',
    }}>Welcome <Typography component='span' sx={{color:'#5bc0be',fontSize:20, fontWeight:600}}>Shoriful Islam</Typography> to Dashboard
    </Box>

    {/* ---------------------- grid section------------------------- */}

    <Box sx={{
      padding:{
        xs: '30px 20px',
        // sm: '40px 40px',
        // md: '100px 60px',
        // lg: '100px 80px',
      },
      maxWidth:1400,
      overflow:'hidden',
    }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardForDashboard />
        </Grid>  
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardForDashboard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardForDashboard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <CardForDashboard />
        </Grid>
      </Grid>
    </Box>
    {/* -------------------grid section ends here----------------- */}


    {/* -----------------------Chart section start----------------------- */}
    <Box sx={{
        padding: "30px 20px",
        margin: "30px 0",
        // backgroundColor: "#ffffff",
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
      Statistics
  </Typography>
    <Grid container spacing={4}> 
      <Grid item xs={12} sm={6} md={8} lg={8}>
        <CustomBarChart/>
      </Grid>
      <Grid  item xs={12} sm={6} md={4} lg={4}>
        
        <PieChartDashboard/>
        
      </Grid>
    </Grid>
    </Box>
    {/* ------------------------area chart start here----------------------- */}
    <Box sx={{marginBottom:20}}>
      <Typography sx={{
        fontWeight: '600',
        marginBottom: '20px',
        fontSize: 24
      }}>Yearly Overview</Typography>
       <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <AreaChartDashboard/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
          <ComposedBarDashboard data={data}/>
          </Grid>
          
       </Grid>
    </Box>
    </Box>
  )
}

export default AdminHome

