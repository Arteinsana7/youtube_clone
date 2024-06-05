import axios from "axios";

const BASE_URL = 'https://youtube-v38.p.rapidapi.com/search/?q=despacito&hl=en&gl=US'

const options = {
	url: BASE_URL,
    params : {
        maxresults:'50'
    },
	
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY,'c4a4127cd4msh79a471cd1fa1172p16846djsnc396a221a99f',
		'x-rapidapi-host': 'youtube-v38.p.rapidapi.com'
	}
};

