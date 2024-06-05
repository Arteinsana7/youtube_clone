import { useState, useEffect} from 'react'
import { Box, Stack, Typography  } from '@mui/material'


const Feed = () => {
  return (
    <Stack
    sx={{ flexDirection: {sx:"column", md:"row" } }}
    >
      <Box sx={{ height: {sx: 'auto',md:'92vh'}}}/>
      Feed
    </Stack>
  )
}

export default Feed
