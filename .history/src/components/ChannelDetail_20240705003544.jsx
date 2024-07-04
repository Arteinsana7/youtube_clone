import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        // Fetch channel details
        const channelResponse = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        const channelData = channelResponse?.items[0];
        setChannelDetail(channelData);

        // Fetch videos for the channel
        const videosResponse = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
        const videosData = videosResponse?.items;
        setVideos(videosData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error state or retry logic if needed
      }
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: '300px',
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }}
        />
        {channelDetail && <ChannelCard channelDetail={channelDetail} marginTop="-93px" />}
      </Box>
      <Box p={2} display="flex" justifyContent="center">
        {videos && <Videos videos={videos} direction="row" />} {/* Ensure direction is 'row' for horizontal alignment */}
      </Box>
    </Box>
  );
};

export default ChannelDetail;
