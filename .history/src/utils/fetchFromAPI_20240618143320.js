import axios from "axios";

const options = {
  method: "GET",
  url: "https://youtube-v2.p.rapidapi.com/audio/videos/continuation",
  params: {
    audio_id:
      "8gVbCk4SPwoLeXo4TlN2bUFhRHcSC3l6OE5Tdm1BYUR3Ggt4bl9ob1RQS0pzUSIKEggIOxDA_4zNAyoKEggIOxDA_4zNAxoLeG5faG9UUEtKc1EogZKBocKFmYSVAQ==",
    continuation_token:
      "4qmFsgL5AhIRRkVzZnZfYXVkaW9fcGl2b3QaxAJDQkI2a0FGRFFtTlJRa0p3UlhWbldrSkRhamhMUXpOc05rOUZOVlJrYlRGQ1dWVlNNMFZuZERWbGFtaFBWVE5hZEZGWFJrVmtlRzlNWlVjMVptRkhPVlZWUlhSTFl6RkZhVU5vU1VsRFJITlJkMUF0VFhwUlRYRkRhRWxKUTBSelVYZFFMVTE2VVUxcFJWRnZVRTVFYjNoT2VrVjVUbFJOTTAxRVdYcE9SRkY0UzJjd1MwTjZWbXRaTTFwTFZWVldkazF0UmxieUJWc0tUaElfQ2d0NWVqaE9VM1p0UVdGRWR4SUxlWG80VGxOMmJVRmhSSGNhQzNodVgyaHZWRkJMU25OUklnb1NDQWc3RU1EX2pNMERLZ29TQ0FnN0VNRF9qTTBER2d0NGJsOW9iMVJRUzBwelVTaUJrb0dod29XWmhKVUKaAhxicm93c2UtZmVlZEZFc2Z2X2F1ZGlvX3Bpdm90",
  },
  headers: {
    "x-rapidapi-key": "c4a4127cd4msh79a471cd1fa1172p16846djsnc396a221a99f",
    "x-rapidapi-host": "youtube-v2.p.rapidapi.com",
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
//   credentials: "include",
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
