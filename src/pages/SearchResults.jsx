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

export default SearchResults;