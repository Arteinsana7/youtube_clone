import { useState, useEffect} from 'react'
import { Box, Stack, Typography  } from '@mui/material'


const Feed = () => {
  return (
    <Stack
    sx={{ flexDirection: {sx:"column", md:"row" } }} >
      <Box sx={{ height: {sx: 'auto',md:'92vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0, md:2}}}>
        Sidebar
        <Typography className='copyrigth'
        variant='body 2' sx={{mt:1.5, color:'#fff'}}>
          copyrigth 2024 Luz Media
        </Typography>
        </Box>
      Feed
    </Stack>
  )
}

export default Feed
