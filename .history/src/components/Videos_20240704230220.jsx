import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Box direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="center" gap={2}>
      {videos.map((item, idx) => (
        <Stack key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Stack>
      ))}
    </Box>
  );
}

export default Videos;