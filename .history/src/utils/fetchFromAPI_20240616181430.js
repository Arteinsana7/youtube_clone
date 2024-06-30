import axios from "axios";

const BASE_URL = "https://youtube-search-and-download.p.rapidapi.com/search";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },

  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID__API_KEY,
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
