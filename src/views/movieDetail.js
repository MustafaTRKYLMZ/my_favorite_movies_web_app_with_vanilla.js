import { movieDetailView } from "./movieDetailView.js";

export const movieDetail = (event) => {
  const movies = JSON.parse(localStorage.getItem("moviesList")) || [];

  const singleMovie = movies.filter(
    (movie) => movie.id === Number(event.target.value)
  );
  movieDetailView(singleMovie);
};
