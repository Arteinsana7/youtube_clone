import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard"; // Ensure the path and imports are correct
import ChannelCard from "./ChannelCard"; // Ensure the path and imports are correct

const Videos = ({ videos = [] }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
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
