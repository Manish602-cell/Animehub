<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../services/api";

function SearchResults() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(
    location.search
  ).get("q");

  useEffect(() => {
    if (query) {
      searchMovies(query).then((res) =>
        setMovies(res.data.results)
      );
    }
  }, [query]);

  return (
    <>
      <h2>Search: {query}</h2>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </>
  );
}

=======
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../services/api";

function SearchResults() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(
    location.search
  ).get("q");

  useEffect(() => {
    if (query) {
      searchMovies(query).then((res) =>
        setMovies(res.data.results)
      );
    }
  }, [query]);

  return (
    <>
      <h2>Search: {query}</h2>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </>
  );
}

>>>>>>> 9a5d9e683b3bb8de9dafa29e3eecb215399f7f48
export default SearchResults;