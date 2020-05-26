import axios from 'axios';

const api = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json'
	}
});

/**
 We need to create an intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
**/

export default api;
