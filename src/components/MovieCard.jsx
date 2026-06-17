import { Link } from "react-router-dom";
import { imageUrl } from "../services/api";

function MovieCard({ movie }) {
  return (
    <Link
    
      to={`/movie/${movie.id}`}
      className="movie-card"
    >
      <img
        src={imageUrl(movie.poster_path)}
        alt={movie.title}
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/500x750?text=No+Poster";
        }}
      />

      <h3>{movie.title}</h3>

      <p>
        ⭐ {movie.vote_average?.toFixed(1)}
      </p>
    </Link>
  );
}

export default MovieCard;