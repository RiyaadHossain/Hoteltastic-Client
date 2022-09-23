import { Box, Button, Grid, Typography } from '@mui/material'
import { padding } from '@mui/system'
import React from 'react'
import CardForDashboard from '../../../Components/MiniCard/CardForDashboard'
import CustomBarChart from '../../Property/Chart/CustomBarChart'
import AreaChartDashboard from './AreaChart/AreaChartDashboard'
import ComposedBarDashboard from './ComposedBar/ComposedBarDashboard'
import PieChartDashboard from './PieChart/PieChartDashboard'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import PaidIcon from '@mui/icons-material/Paid';
import InventoryIcon from '@mui/icons-material/Inventory';
import LittleChart from './LittleChart/LittleChart'
import LittleChartBar from './LittleChart/LittleChartBar'
import PieChartLittle from './LittleChart/PieChartLittle'
import MultiChart from './LittleChart/MultiChart'
import DemoTable from './DemoTable/DemoTable'



function AdminHome() {
  const data = [
    {
      name: 'January',
      uv: 790,
      pv: 2000,
      amt: 1400,
      cnt: 490,
    },
    {
      name: 'February',
      uv: 468,
      pv: 1400,
      amt: 1506,
      cnt: 590,
    },
    {
      name: 'March',
      uv: 1397,
      pv: 7000,
      amt: 989,
      cnt: 350,
    },
    {
      name: 'April',
      uv: 880,
      pv: 3000,
      amt: 1228,
      cnt: 480,
    },
    {
      name: 'May',
      uv: 1520,
      pv: 9000,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'June',
      uv: 1800,
      pv: 5000,
      amt: 1700,
      cnt: 380,
    },
  ];
  return (
    // --------------------------------1st grid section---------------------------
    <Box sx={{
      background:'#fff',
      padding : '2rem'
    }}>
      <Grid container spacing={4}>

        <Grid item xs={12} sm={12} md={6} lg={4}>

          <Box sx={{
            minHeight: '30vh',
            border:'1px solid #ccc',
            borderRadius:'5px',
            padding:'1rem',
            position:'relative',
            boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)'
          }}>
            <Typography>Congratulations John</Typography>
            <Typography>You have won gold medal</Typography>
            <Typography sx={{color:'#7367f0',paddingTop:'10px',fontSize:'1.2rem'}}>$48.9 k</Typography>
            <Button variant='contained'>View Sales</Button>
            <Box sx={{
              position:'absolute',
              top:0,
              right:'1rem',
            }}>
              <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-2/img/badge.0fa134b5.svg" alt="" />
            </Box>
          </Box>

        </Grid> 


            {/* ---------------first right section--------------- */}

        <Grid item xs={12} sm={12} md={6} lg={8}>
          <Box sx={{
            padding:'2rem',
            minHeight: '30vh',
            border:'1px solid #ccc',
            borderRadius:'5px',
            boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)'
          }}>
              <Box sx={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
              }}>
                <Typography>Statistics</Typography>
                <Typography>Updated 1 month ago</Typography>
              </Box>
              <Grid container spacing={4}>
                  <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Box sx={{
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center',
                      paddingTop:'1rem',
                    }}>
                      <TrendingUpIcon sx={{
                        color:'#7367f0',
                        background:'rgba(115, 103, 240, .2)',
                        borderRadius:'50%',
                        fontSize:'48px',
                        padding:'10px',
                      }}/>
                      <Box sx={{marginLeft:'2rem'}}>
                        <Typography>230k</Typography>
                        <Typography sx={{fontSize:'.8rem'}}>Sales</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Box sx={{
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center',
                      paddingTop:'1rem',
                    }}>
                      <PersonIcon sx={{
                        color:'#00cfe8',
                        background:'rgba(0, 207, 232, 0.2)',
                        borderRadius:'50%',
                        fontSize:'3rem',
                        padding:'.5rem',
                      }}/>
                      <Box sx={{marginLeft:'2rem'}}>
                        <Typography>8.549k</Typography>
                        <Typography sx={{fontSize:'.8rem'}}>Customers</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Box sx={{
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center',
                      paddingTop:{
                        md:'1rem'
                      },
                    }}>
                      <InventoryIcon sx={{
                        color:'#ea5455',
                        background:'rgba(234, 84, 85, 0.2)',
                        borderRadius:'50%',
                        fontSize:'3rem',
                        padding:'.5rem',
                      }}/>
                      <Box sx={{marginLeft:'2rem'}}>
                        <Typography>230k</Typography>
                        <Typography sx={{fontSize:'.8rem'}}>Sales</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Box sx={{
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center',
                      paddingTop:{
                        md:'1rem'
                      },
                    }}>
                      <PaidIcon sx={{
                        color:'#28c76f',
                        background:'rgba(40, 199, 111, 0.2)',
                        borderRadius:'50%',
                        fontSize:'3rem',
                        padding:'.5rem',
                      }}/>
                      <Box sx={{marginLeft:'2rem'}}>
                        <Typography>230k</Typography>
                        <Typography sx={{fontSize:'.8rem'}}>Sales</Typography>
                      </Box>
                    </Box>
                  </Grid>
              </Grid>
          </Box>
          
        </Grid> 

      </Grid>


      {/* ----------------------1st grid section ends---------------------------------- */}



      {/* -------------------2nd grid section starts here----------------------------- */}

      <Box sx={{padding : '2.5rem',marginTop:'2rem'}}>



        

          <Grid container spacing={5} >
            {/* ----------------Left section----------------- */}
            <Grid item xs={12} sm={12} md={6} lg={4} sx={{
              padding:'0 !important',
            }}>
                <Grid container spacing={4}>
                  <Grid item xs={6} sm={6}>
                    <Box sx={{
                       border:'1px solid #ccc',
                       borderRadius:'5px',
                       boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)',
                      padding:2
                    }}>
                    <Typography>Orders</Typography>
                    <Typography>2,76k</Typography>
                    <Box sx={{width:'100%',height:'100px',background:'#fff',color:'red',padding:2}}>
                      <LittleChartBar data={data}/>
                    </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <Box sx={{
                       border:'1px solid #ccc',
                       borderRadius:'5px',
                       boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)',
                      padding:2
                    }}>
                    <Typography>Profit</Typography>
                    <Typography>6,24k</Typography>
                    <Box sx={{width:'100%',height:'100px',background:'#fff',color:'red',padding:2}}>
                      <LittleChart data={data}/>
                    </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Box sx={{
                      display:'flex',
                      justifyContent:'space-between',
                      alignItems:'center',
                      border:'1px solid #ccc',
                      borderRadius:'5px',
                      boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)',
                      padding:2
                    }}>
                      <Box>
                        <Typography>Earnings</Typography>
                        <Typography>This Month</Typography>
                        <Typography>$4056.56</Typography>
                        <Typography>68.2% more earnings than last month.</Typography>
                      </Box>
                      <Box sx={{height:'100%',width:'50%'}}>
                        <PieChartDashboard/>
                      </Box>
                    </Box>

                  </Grid>
                </Grid>
            </Grid>
            
            {/* ---------------------right section------------------------- */}
            <Grid item xs={12} sm={12} md={6} lg={8} sx={{padding:'0 !important'}}>
                  <Box sx={{width:'100%',height:'100%',
                  border:'1px solid #ccc',
                  borderRadius:'5px',
                  boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)',
                  padding:2,
                  marginLeft:4
                }}>
                    <MultiChart data={{data}}/>
                  </Box>
            </Grid>
          </Grid>

      </Box>
    {/* -------------------2nd grid section ends here----------------- */}



    {/* -------------------3rd grid section starts-------------- */}
    <Box sx={{padding : '2rem'}}>
        <Grid container spacing={4} sx={{paddig: '0 !important'}}>
            <Grid item xs={12} sm={12} md={6} lg={8} sx={{
            padding: '0 !important'}}>
              <Box sx={{
                border:'1px solid #ccc',
                borderRadius:'5px',
                boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)',
               padding:2
              }}>
                <DemoTable/>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} sx={{padding: '0 !important'}}>
            <Box sx={{
                border:'1px solid #ccc',
                borderRadius:'5px',
                boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)',
               padding:2,
                marginLeft:4
              }}>
                <CardForDashboard></CardForDashboard>
              </Box>
            </Grid>
        </Grid>
    </Box>




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

