import axios from "axios";

const BASE_URL = "https://youtube-v38.p.rapidapi.com/search/";

const options = {
  params: {
    maxResults: "50",
  },

  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
    "x-rapidapi-host": 'youtube-search-and-download.p.rapidapi.com';
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
