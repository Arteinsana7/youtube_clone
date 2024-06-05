import axios from "axios";

const BASE_URL =
  "https://youtube-v38.p.rapidapi.com/search/?q=despacito&hl=en&gl=US";

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
  await axios.GET(`${BASE_URL}`);
};
