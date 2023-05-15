import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-ligth">
          <div className="container px-4 px-lg-5">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse navBarOptions" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 MenuNavBar">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Inicio</a></li>
                    <li className="nav-item"><a className="nav-link" aria-current="page" href="#!">Contactanos</a></li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" aria-expanded="false" href="#!" role="button" data-bs-toggle="dropdown">Códigos GiftCard</a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="giftCardsDropdownList">
                            <li><a className="dropdown-item" href="#!">Play Station</a></li>
                            <li><a className="dropdown-item" href="#!">X-BOX | Microsoft</a></li>
                            <li><a className="dropdown-item" href="#!">Epic Games</a></li>
                            <li><a className="dropdown-item" href="#!">Steam</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="categorias">
                            <li><a className="dropdown-item" href="#!" id="li-todos">Todos los juegos</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#!">Acción</a></li>
                            <li><a className="dropdown-item" href="#!">MMO</a></li>
                            <li><a className="dropdown-item" href="#!">Aventura</a></li>
                            <li><a className="dropdown-item" href="#!">RPG</a></li>
                            <li><a className="dropdown-item" href="#!">Carreras</a></li>
                        </ul>
                    </li>
                </ul>
                <button className="btn btn-outline-dark btnCart" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="bi-cart-fill me-1"></i>
                    Cart
                    <span className="badge bg-dark text-white ms-1 rounded-pill" id="cartCantElements">0</span>
                </button>
              </div> 
          </div>
        </nav>
    </div>
  )
}

export default NavBar
