import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./pages/SearchResults";

function App() {
  const basename =
    process.env.NODE_ENV === "production"
      ? "/Animehub"
      : "";

  return (
    <BrowserRouter basename={basename}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchResults />} />

        {/* Fallback route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;