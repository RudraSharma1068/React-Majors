                           

const API_KEY = "5405f291a4e642dd6f9615fccea30019";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();
  return data.results;
};
