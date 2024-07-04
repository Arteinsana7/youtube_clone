import React from "react";
import { Stack, Box, CircularProgress } from "@mui/material";
import VideoCard from "./VideoCard"; // Ensure the import path is correct
import ChannelCard from "./ChannelCard"; // Ensure the import path is correct

const Videos = ({ videos, direction }) => {
  // Log the videos prop to debug its value
  console.log("Videos prop:", videos);

  // Ensure videos is an array before calling map
  if (!videos?.length) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx} sx={{ width: { xs: '100%', sm: '358px', md: '320px' } }}>
          {item.id && item.id.videoId && <VideoCard video={item} />}
          {item.id && item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
