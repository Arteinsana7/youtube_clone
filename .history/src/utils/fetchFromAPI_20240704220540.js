import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  credentials: "include",
  params: {
    maxResults: "50",
    audio_id:
      "8gVbCk4SPwoLeXo4TlN2bUFhRHcSC3l6OE5Tdm1BYUR3Ggt4bl9ob1RQS0pzUSIKEggIOxDA_4zNAyoKEggIOxDA_4zNAxoLeG5faG9UUEtKc1EogZKBocKFmYSVAQ==",
  },
  headers: {
    "x-rapidapi-key": "c4a4127cd4msh79a471cd1fa1172p16846djsnc396a221a99f",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
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
