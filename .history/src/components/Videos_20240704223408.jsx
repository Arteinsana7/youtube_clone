import React from "react";
import { Stack, Box, CircularProgress } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  console.log("Videos prop:", videos);

  if (!videos?.length) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
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
