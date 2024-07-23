import { environment } from '@/setting/environment';
import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';

const axiosInstance = axios.create({
	baseURL: environment.apiAlbo,
	headers: {
		'Content-Type': 'application/json'
	}
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = getCookie('token');

		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response && error.response.status === 401) {
			deleteCookie('token');
			window.location.href = '/login';
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;
