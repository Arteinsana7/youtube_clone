import axios from "axios";

const options = {
  params: {
    maxresults: "50",
  },

  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
    "x-rapidapi-host": "youtube-v38.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
