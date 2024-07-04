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

    
    <Stack direction={ direction ||"row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id && item.id.videoId && <VideoCard video={item} />}
          {item.id && item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
