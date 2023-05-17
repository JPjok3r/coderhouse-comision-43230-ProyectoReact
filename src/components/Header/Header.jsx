import "./Header.css";
import img from "./logo_transparent.png";

import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div>
      <header className="menuBar bg-dark">
        <a className="navbar-brand imgLogo" href="#!">
          <img src={img} alt="logo" />
        </a>
        < NavBar />
      </header>
    </div>
  )
}

export default Header
