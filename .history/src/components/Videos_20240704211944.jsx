import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard"; // Ensure the import path is correct
import ChannelCard from "./ChannelCard"; // Ensure the import path is correct

const Videos = ({direction, videos = [] }) => {
  // Log the videos prop to debug its value
  console.log("Videos prop:", videos);

  // Ensure videos is an array before calling map
  if (!Array.isArray(videos)) {
    return <div>No videos available</div>;
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
