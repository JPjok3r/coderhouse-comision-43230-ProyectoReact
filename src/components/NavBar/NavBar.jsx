import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import "./NavBar.css"

const NavBar = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    //axios recuperar los datos del json
    axios("www.db_app.json").then((res) => {
      setData(res.data[0].categories);
    });
  }, [])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-ligth">
      <div className="container px-4 px-lg-5">
          <button className="navbar-toggler btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse navBarOptions" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 MenuNavBar">
                <li className="nav-item">
                  <Link to="/" className="nav-link active text-white" aria-current="page">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item"><a className="nav-link text-white" aria-current="page" href="#!">Contactanos</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" aria-expanded="false" href="#!" role="button" data-bs-toggle="dropdown">Códigos GiftCard</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="giftCardsDropdownList">
                        <li><a className="dropdown-item" href="#!">Play Station</a></li>
                        <li><a className="dropdown-item" href="#!">X-BOX | Microsoft</a></li>
                        <li><a className="dropdown-item" href="#!">Epic Games</a></li>
                        <li><a className="dropdown-item" href="#!">Steam</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" id="navbarDropdown" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="categorias">
                        <li><Link className="dropdown-item" to="/" id="li-todos">Todos los juegos</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        {data.map((category) => {
                          return (
                            <li key={category.id}>
                              <Link className="dropdown-item" to={`/category/${category.id}`}>
                                {category.name}
                              </Link>
                            </li>
                          );
                        })}
                        
                    </ul>
                </li>
            </ul>
            <button className="btn btn-outline-light btnCart" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill" id="cartCantElements">0</span>
            </button>
          </div> 
      </div>
    </nav>
  )
}

export default NavBar
