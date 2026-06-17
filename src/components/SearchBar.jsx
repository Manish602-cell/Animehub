<<<<<<< HEAD
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

=======
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

>>>>>>> 9a5d9e683b3bb8de9dafa29e3eecb215399f7f48
export default SearchBar;