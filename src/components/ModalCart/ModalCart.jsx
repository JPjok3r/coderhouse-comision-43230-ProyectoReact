import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

import CartItems from "../CartItems/CartItems";

const Header = () => {
    const { cartItems } = useContext(CartContext);
    const [ total, setTotal ] = useState(0);
    useEffect(()=> {
        let tot = 0;
        cartItems.forEach((game) => {
            tot += (game.price * (1 - (game.discount / 100))) * game.cant;
        })
        setTotal(tot.toFixed(2)); 
    }, [cartItems.length]);
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Carrito</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body" id="contenedor_carrito">
                        {cartItems.length === 0 
                        ? <p className="card-text">Carrito vacío</p>
                        : cartItems.map((item) => {
                            return(
                                <div className="card mb-3" style={{maxWidth: "540px"}} key={item.id}>
                                    <CartItems data={item}/>
                                </div>
                            );
                        })
                    }
                    </div>
                    <div className="modal-footer">
                        <p className="card-text" id="totalCart">Total: $ {total}</p>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Continuar</button>
                        <Link to='/cart'><button type="button" className="btn btn-danger" data-bs-dismiss="modal">Ver detalle carrito</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Header