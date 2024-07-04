import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard"; // Ensure the import path is correct
import ChannelCard from "./ChannelCard"; // Ensure the import path is correct

const Videos = ({videos, direction}) => {
  // Log the videos prop to debug its value
  console.log("Videos prop:", videos);

  // Ensure videos is work calling map
  if (!videos?.length) {
    return 'Loading...';
  }

  return (

    
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center" // Center horizontally
      alignItems="stretch" // Stretch vertically to align properly
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx} sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, mb: 2 }}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
