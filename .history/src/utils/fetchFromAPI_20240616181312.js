import axios from "axios";

const BASE_URL = "https://youtube-search-and-download.p.rapidapi.com/search";
const options = {
  url: BASE_URL,
  headers: {
    "x-rapidapi-key": "c4a4127cd4msh79a471cd1fa1172p16846djsnc396a221a99f",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

/*
const options = {
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
}; */
