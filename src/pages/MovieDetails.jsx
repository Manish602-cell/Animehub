<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieDetails,
  getMovieVideos,
  imageUrl,
} from "../services/api";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Movie Details
        const movieRes = await getMovieDetails(id);
        setMovie(movieRes.data);

        // Movie Videos
        const videoRes = await getMovieVideos(id);
        const videos = videoRes.data.results || [];

        // Priority:
        // 1. YouTube Trailer
        // 2. Any YouTube Video
        // 3. Vimeo Video
        const selectedVideo =
          videos.find(
            (v) =>
              v.site === "YouTube" &&
              v.type === "Trailer"
          ) ||
          videos.find(
            (v) => v.site === "YouTube"
          ) ||
          videos.find(
            (v) => v.site === "Vimeo"
          );

        if (selectedVideo) {
          setVideo({
            key: selectedVideo.key,
            site: selectedVideo.site,
          });
        }
      } catch (error) {
        console.error(
          "Error fetching movie details/videos:",
          error
        );
      }
    };

    fetchData();
  }, [id]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div
      className="movie-details"
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
        color: "#fff",
      }}
    >
      {/* Poster */}
      <img
        src={imageUrl(movie.poster_path)}
        alt={movie.title}
        style={{
          width: "300px",
          maxWidth: "100%",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      />

      {/* Movie Info */}
      <h1>{movie.title}</h1>

      <p>
        <strong>⭐ Rating:</strong>{" "}
        {movie.vote_average?.toFixed(1)}
      </p>

      <p>
        <strong>Release Date:</strong>{" "}
        {movie.release_date}
      </p>

      <p>{movie.overview}</p>

      {/* Video Section */}
      <div style={{ marginTop: "30px" }}>
        <h2>Watch Video</h2>

        {video ? (
          video.site === "YouTube" ? (
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${video.key}`}
              title="Movie Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <iframe
              width="100%"
              height="500"
              src={`https://player.vimeo.com/video/${video.key}`}
              title="Movie Video"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )
        ) : (
          <div
            style={{
              padding: "20px",
              background: "#222",
              borderRadius: "10px",
            }}
          >
            <p>
              No YouTube or Vimeo video available for this
              movie.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

=======
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieDetails,
  getMovieVideos,
  imageUrl,
} from "../services/api";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Movie Details
        const movieRes = await getMovieDetails(id);
        setMovie(movieRes.data);

        // Movie Videos
        const videoRes = await getMovieVideos(id);
        const videos = videoRes.data.results || [];

        // Priority:
        // 1. YouTube Trailer
        // 2. Any YouTube Video
        // 3. Vimeo Video
        const selectedVideo =
          videos.find(
            (v) =>
              v.site === "YouTube" &&
              v.type === "Trailer"
          ) ||
          videos.find(
            (v) => v.site === "YouTube"
          ) ||
          videos.find(
            (v) => v.site === "Vimeo"
          );

        if (selectedVideo) {
          setVideo({
            key: selectedVideo.key,
            site: selectedVideo.site,
          });
        }
      } catch (error) {
        console.error(
          "Error fetching movie details/videos:",
          error
        );
      }
    };

    fetchData();
  }, [id]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div
      className="movie-details"
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
        color: "#fff",
      }}
    >
      {/* Poster */}
      <img
        src={imageUrl(movie.poster_path)}
        alt={movie.title}
        style={{
          width: "300px",
          maxWidth: "100%",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      />

      {/* Movie Info */}
      <h1>{movie.title}</h1>

      <p>
        <strong>⭐ Rating:</strong>{" "}
        {movie.vote_average?.toFixed(1)}
      </p>

      <p>
        <strong>Release Date:</strong>{" "}
        {movie.release_date}
      </p>

      <p>{movie.overview}</p>

      {/* Video Section */}
      <div style={{ marginTop: "30px" }}>
        <h2>Watch Video</h2>

        {video ? (
          video.site === "YouTube" ? (
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${video.key}`}
              title="Movie Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <iframe
              width="100%"
              height="500"
              src={`https://player.vimeo.com/video/${video.key}`}
              title="Movie Video"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )
        ) : (
          <div
            style={{
              padding: "20px",
              background: "#222",
              borderRadius: "10px",
            }}
          >
            <p>
              No YouTube or Vimeo video available for this
              movie.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

>>>>>>> 9a5d9e683b3bb8de9dafa29e3eecb215399f7f48
export default MovieDetails;