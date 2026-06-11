import axios from "axios";

// Direct API Key
const API_KEY = "c03b4f9a138975e878f9f6ab68667c1b";

const api = axios.create({
baseURL: "https://api.themoviedb.org/3",
timeout: 10000,
});

api.interceptors.request.use((config) => {
config.params = {
...config.params,
api_key: API_KEY,
};

return config;
});

export const getTrendingMovies = () =>
api.get("/trending/movie/week");

export const searchMovies = (query) =>
api.get("/search/movie", {
params: { query },
});

export const getMovieDetails = (id) =>
api.get(`/movie/${id}`);

export const getMovieVideos = (id) =>
api.get(`/movie/${id}/videos`);

export const imageUrl = (path) =>
path
? `https://image.tmdb.org/t/p/w500${path}`
: "https://via.placeholder.com/500x750?text=No+Image";

export default api;
