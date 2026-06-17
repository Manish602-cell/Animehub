import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./pages/SearchResults";

function App() {
<<<<<<< HEAD
  const basename =
    process.env.NODE_ENV === "production"
      ? "/Animehub"
      : "";

  return (
    <BrowserRouter basename={basename}>
=======
  return (
    <BrowserRouter>
>>>>>>> 9a5d9e683b3bb8de9dafa29e3eecb215399f7f48
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchResults />} />

        {/* Fallback route */}
        <Route path="*" element={<Home />} />
=======
        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />
        <Route
          path="/search"
          element={<SearchResults />}
        />
>>>>>>> 9a5d9e683b3bb8de9dafa29e3eecb215399f7f48
      </Routes>
    </BrowserRouter>
  );
}

export default App;