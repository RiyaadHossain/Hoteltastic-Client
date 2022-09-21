import { Box } from '@mui/material'
import React from 'react'
import AdminHome from '../Admin/AdminHome'

function UserHome() {
  return (
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
      width: '80%',
      marginLeft:'auto',
      // width : {
      //   xs: '100%',
      //   sm: '100%',
      //   md: '70%',
      //   lg: '50%',
      // },
      // mx : 'auto',
      padding : '10px 0px',
        }}>
          <AdminHome/>
        </Box>
  )
}

export default UserHome