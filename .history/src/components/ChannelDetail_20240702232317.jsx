import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';

import { videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const[ channelDetail, setChannelDetail ] = useState(null)
const [videos, setVideos]= useState([])

const {id } = useParams();


useEffect(() => {
  fetchFromAPI(`channels?part=snippet&id=${id}`)
.then((data) => setChannelDetail(data?.items[0]));

  fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
.then((data) => setVideos(data?.items) );
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background : 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,184,1)100%,rgba(0,212,225,1)100%)',
          zIndex :10,
          heigth : '300px',
        }}
        <ChannelCard></ChannelCard>
        />
      </Box>
      
    </Box>
  )
}

export default ChannelDetail
