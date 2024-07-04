import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'row', // Adjust as needed
      alignItems: 'center',
      width: '100%', // Adjust as needed
      maxWidth: '358px', // Adjust as needed
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`} style={{ textDecoration: 'none' }}>
      <CardMedia
        component="img"
        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={channelDetail?.snippet?.title}
        sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
      />
      <CardContent sx={{ textAlign: 'center', color: '#fff' }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
