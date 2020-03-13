import axios from 'axios';
import {API_URL_BASE} from '../../configs/backendAPI';
import theMovieDBKey from '../../configs/theMovieDBKey';

export const fetchTopRatedMovies = () => axios.get(`${API_URL_BASE}/movie/top_rated?api_key=${theMovieDBKey.API_KEY}&language=en-US&page=1`);
