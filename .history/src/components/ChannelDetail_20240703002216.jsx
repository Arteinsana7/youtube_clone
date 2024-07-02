import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { ChannelCard, Videos } from './'; // Assuming you have a Videos component
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh" display="flex" flexDirection="column" alignItems="center">
      <Box mt="50px" width="100%" maxWidth="1200px" p="20px">
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,184,1) 100%, rgba(0,212,225,1) 100%)',
            height: '300px',
            width: '100%',
            marginBottom: '20px',
          }}
        />
        <ChannelCard channelDetail={channelDetail} />
      </Box>
      <Box width="100%" maxWidth="1200px" p="20px">
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
