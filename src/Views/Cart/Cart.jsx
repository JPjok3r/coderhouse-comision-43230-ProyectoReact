import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import Swal from "sweetalert2";

const initialState = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
};

const Cart = () => {
  const { cartItems, clearCart, eliminarItem } = useContext(CartContext);
  const [chkout, setChkout] = useState(false);
  const [values, setValues] = useState(initialState);
  const [total, setTotal] = useState(0);
  const [chekoutID, setCheckoutID] = useState("");
  useEffect(() => {
    let tot = 0;
    cartItems.forEach((game) => {
      tot += game.price * (1 - game.discount / 100) * game.cant;
    });
    setTotal(tot.toFixed(2));
  }, [cartItems.length]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(values);
    const docRef = await addDoc(collection(db, "checkouts"), values);
    setCheckoutID(docRef.id);
    clearCart();
    setValues(initialState);
  };
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acción</th>
            <th scope="col">Precio Unitario</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => {
            return (
              <tr
                className={index % 2 === 0 ? "table-active" : ""}
                key={item.id}
              >
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={item.imgsrc}
                    alt={item.name}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h5 className="">{item.name}</h5>
                </td>
                <td>
                  <p className="card-text">{item.cant}</p>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => restarHandler()}
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => sumaHandler()}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarItem(item.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
                <td>
                  <p className="card-text">
                    $ {(item.price * (1 - item.discount / 100)).toFixed(2)}
                  </p>
                </td>
                <td>
                  <p className="card-text">
                    ${" "}
                    {(
                      item.cant *
                      (item.price * (1 - item.discount / 100))
                    ).toFixed(2)}
                  </p>
                </td>
              </tr>
            );
          })}
          <tr>
            <th scope="row" colSpan="5" style={{ textAlign: "right" }}>
              <h3>
                <strong>Total:</strong>
              </h3>
            </th>
            <td>
              <h3>$ {total}</h3>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-lg btn-primary" type="button" onClick={() => {clearCart()}}>
        Vaciar carrito
      </button>
      <button
        className="btn btn-lg btn-success"
        type="button"
        onClick={() => {
          setChkout(true);
        }}
      >
        Checkout
      </button>
      {chkout && (
        <form
          onSubmit={submitHandler}
          style={{ width: "80%", position: "center" }}
        >
          <div className="form-group">
            <label className="col-form-label mt-4" htmlFor="nombre">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Nombre"
              onChange={handleOnChange}
              id="nombre"
              required
            />
          </div>
          <div className="form-group">
            <label className="col-form-label mt-4" htmlFor="apellido">
              Apellido
            </label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Apellido"
              onChange={handleOnChange}
              id="apellido"
            />
          </div>
          <div className="form-group">
            <label className="col-form-label mt-4" htmlFor="fono">
              Telefono
            </label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Telefono/Celular"
              onChange={handleOnChange}
              id="fono"
              required
              pattern="[0-9]+"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label mt-4">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              onChange={handleOnChange}
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              Nunca compartiremos su email con nadie.
            </small>
          </div>
          <button type="submit" className="btn btn-success">
            Enviar
          </button>
        </form>
      )}
      {chekoutID && (
        <div class="alert alert-dismissible alert-success">
          <Link to="/"><button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
          > </button></Link>
          <strong>Well done!</strong> Su checkout se registro correctamente con el id: {chekoutID}
        </div>
      )}
    </div>
  );
};

export default Cart;
