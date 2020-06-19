import axios from 'axios';
import store from '../redux/store/store';
import { SIGNOUT } from '../redux/store/types';

const api = axios.create({
	baseURL: '/api/v1',
	headers: { 'Content-Type': 'application/json' }
});

api.interceptors.response.use(
	(res) => res,
	(err) => {
		if (err.response.data.msg === 'Token is not valid') {
			store.dispatch({ type: SIGNOUT });
		}
		return Promise.reject(err);
	}
);

export default api;
