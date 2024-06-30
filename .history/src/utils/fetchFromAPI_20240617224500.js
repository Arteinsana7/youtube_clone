import axios from "axios";

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://youtube-search-and-download.p.rapidapi.com/search",
  params: {
    query: "rick roll",
    next: "EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D",
    hl: "en",
    gl: "US",
    upload_date: "t",
    type: "v",
    duration: "s",
    features: "li;hd",
    sort: "v",
  },
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

// const BASE_URL = "https://youtube-search-and-download.p.rapidapi.com";

// const options = {
//   params: {
//     maxResults: "50",
//   },
//   headers: {
//     "x-rapidapi-key": process.env.REACT_APP_RAPID__API_KEY,
//     "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
//   },
// };

// export const fetchFromAPI = async (url) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/${url}`, { ...options });
//     return response.data; // It's good practice to return the data property of the response
//   } catch (error) {
//     console.error("Failed to fetch data:", error.message);
//     throw error; // Rethrow the error so it can be handled by the caller
//   }
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
