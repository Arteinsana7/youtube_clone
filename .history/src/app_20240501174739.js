import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { Feed } from "@mui/icons-material";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/ : id" element={<VideoDetail />} />
        <Route path="/channel/ : id" element={<channelDetail />} />
        <Route path="/search/ : searchTerm" element={<searchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
