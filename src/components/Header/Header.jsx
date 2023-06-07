import "./Header.css";
import img from "./logo_transparent.png";

import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="menuBar bg-dark">
      <a className="navbar-brand imgLogo" href="#!">
        <Link to="/">
          <img src={img} alt="logo" />
        </Link>
      </a>
      < NavBar />
    </header>
  )
}

export default Header
