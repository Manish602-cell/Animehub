import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import { getTrendingMovies } from "../services/api";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await getTrendingMovies();

        console.log("TMDB Success:", res.data);

        setMovies(res.data.results);
      } catch (err) {
        console.error("TMDB Error:", err);

        if (err.response?.status === 401) {
          setError(
            "Invalid TMDB API Key. Showing demo movies instead."
          );
        } else {
          setError(
            "Failed to load TMDB data. Showing demo movies instead."
          );
        }

        // Demo Movies
        setMovies([
          {
            id: 1,
            title: "Avengers Endgame",
            poster_path:
              "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
            vote_average: 8.4,
          },
          {
            id: 2,
            title: "Spider-Man",
            poster_path:
              "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
            vote_average: 8.0,
          },
          {
            id: 3,
            title: "The Batman",
            poster_path:
              "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
            vote_average: 7.9,
          },
          {
            id: 4,
            title: "Joker",
            poster_path:
              "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            vote_average: 8.3,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Scroll detect (show button after scroll)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Hero />

      <h2 style={{ padding: "20px" }}>
        Trending Movies
      </h2>

      {loading && (
        <h3 style={{ padding: "20px" }}>
          Loading Movies...
        </h3>
      )}

      {error && (
        <div
          style={{
            background: "#ff4444",
            color: "#fff",
            padding: "15px",
            margin: "20px",
            borderRadius: "10px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {error}
        </div>
      )}

      {!loading && (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          className="scroll-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ↑
        </button>
      )}
    </>
  );
}

export default Home;