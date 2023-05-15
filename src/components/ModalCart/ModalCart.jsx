const Header = () => {
    return (
      <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Carrito</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body" id="contenedor_carrito">
                        <p className="card-text">Carrito vacío</p>
                    </div>
                    <div className="modal-footer">
                        <p className="card-text" id="totalCart">Total: $0</p>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Continuar</button>
                        <button type="button" className="btn btn-danger" id="finCompras">Finalizar</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Header