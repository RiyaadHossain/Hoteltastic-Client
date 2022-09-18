import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CardForDashboard from '../../../Components/MiniCard/CardForDashboard'

function AdminHome() {
  return (
    <>
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
      padding : '20px 0px',
    }}>Welcome <Typography component='span' sx={{color:'#5bc0be',fontSize:20, fontWeight:600}}>Shoriful Islam</Typography> to Dashboard
    </Box>

    <Box sx={{
      padding:{
        xs: '30px 20px',
      }
    }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <CardForDashboard />
        </Grid>  
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <CardForDashboard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <CardForDashboard />
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default AdminHome