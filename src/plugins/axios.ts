import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_GATEWAY_URL;

axios.interceptors.response.use(
	(res: any) => res,
	(error: any) => {
		return Promise.reject(error)
	}
)