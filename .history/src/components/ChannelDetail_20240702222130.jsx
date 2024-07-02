import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import { VideoCard, ChannelCard } from './'; // Ensure these are correctly imported
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannelDetail(data?.items[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching channel details:', err);
        setError('Failed to fetch channel details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={2}>
      {channelDetail && (
        <Box>
          <Typography variant="h4">{channelDetail.snippet.title}</Typography>
          <ChannelCard channelDetail={channelDetail} />
          {/* Add any other channel details you want to display */}
        </Box>
      )}
    </Box>
  );
};

export default ChannelDetail;