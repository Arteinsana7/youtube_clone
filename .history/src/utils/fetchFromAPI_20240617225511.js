import axios from "axios";

const BASE_URL = "https://youtube-search-and-download.p.rapidapi.com";

const options = {
  credentials: "include",
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID__API_KEY,
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, { ...options });
    return response.data; // It's good practice to return the data property of the response
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
    throw error; // Rethrow the error so it can be handled by the caller
  }
};

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
