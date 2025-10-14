import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="App-header">
      <a href="#" className="kitty">
        <FontAwesomeIcon icon={faCat} />
      </a>
      <a href="#">About</a>
    </nav>
  );
}

export default Navbar;
