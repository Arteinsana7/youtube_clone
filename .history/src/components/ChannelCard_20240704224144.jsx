import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => (
  <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px" }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardMedia
        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={channelDetail?.snippet?.title}
        sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {channelDetail?.snippet?.title}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default ChannelCard;