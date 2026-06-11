import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav className="navbar">
   <Link to="/" className="logo">
  🎌 AnimeHub
</Link>

      <SearchBar />
    </nav>
  );
}

export default Navbar;