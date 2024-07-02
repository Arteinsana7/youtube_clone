import React from "react";
import { Box } from "@mui/material";
import VideoCard from "./VideoCard"; // Ensure the import path is correct
import ChannelCard from "./ChannelCard"; // Ensure the import path is correct

const Videos = ({ videos = [] }) => {
  // Log the videos prop to debug its value
  console.log("Videos prop:", videos);

  // Ensure videos is an array before calling map
  if (!Array.isArray(videos)) {
    return <div>No videos available</div>;
  }

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {videos.map((item, idx) => (
        <Box key={idx} width={{ xs: "100%", sm: "50%", md: "33.33%", lg: "25%" }} p={2}>
          {item.id && item.id.videoId && <VideoCard video={item} />}
          {item.id && item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Box>
  );
};

export default Videos;