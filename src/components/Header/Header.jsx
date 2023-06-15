import "./Header.css";
import img from "./logo_transparent.png";

import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="menuBar bg-dark">
      <Link className="navbar-brand imgLogo" to="/">
          <img src={img} alt="logo" />
      </Link>
      < NavBar />
    </header>
  )
}

export default Header
