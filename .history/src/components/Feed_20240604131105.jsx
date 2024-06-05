import { useState, useEffect} from 'react'
import { Box, Stack, Typography  } from '@mui/material'
import SideBar from './SideBar'


const Feed = () => {
  return (
    <Stack
    sx={{ flexDirection: {sx:"column", md:"row" } }} >
      <Box sx={{ height: {sx: 'auto',md:'92vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0, md:2}}}>
        <SideBar/>
        <Typography className='copyrigth'
        variant='body 2' sx={{mt:1.5, color:'#fff'}}>
          copyrigth 2024 Luz Media
        </Typography>
        </Box>
<Box>
  <Typography>
    New <span style={{color : '#F31503' }}>
      Videos
    </span>
  </Typography>
</Box>
      
    </Stack>
  )
}

export default Feed
