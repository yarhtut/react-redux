import axios from 'axios';


export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.heroluapp.com/api';
const API_KEY = '?key=12345678yar'

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	
	return {
		type: FETCH_POSTS,
		payload: request
	};
}