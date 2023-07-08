import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

import { CartContext } from "../../context/CartContext";

const DetailPage = () => {
  let { id } = useParams();
  const [data, setData] = useState({});
  const [value, setValue] = useState(1);
  const { cartItems, setCartItems, verificarCantidadItems } =
    useContext(CartContext);
  useEffect(() => {
    const getGame = async () => {
      const q = query(collection(db, "games"));

      const gamesSnapshot = await getDocs(q);
      //const dataGames = [];
      gamesSnapshot.forEach((doc) => {
        if (doc.id === id) setData({ ...doc.data(), id: doc.id });
      });
      //setData(dataGames);
    };
    getGame();
  }, [id]);
  const onChange = (e) => {
    setValue(e.target.value.replace(/ /g,""));
  };
  const sumarValue = () => {
    setValue(Number(value)+1);
  }
  const restarValue = () => {
    Number(value) > 1 && setValue(Number(value)-1);
  }
  const onSubmit = () => {
    let cartIni = [];
    if (cartItems.length === 0) {
      cartIni.push({ ...data, cant: parseInt(value) });
    } else {
      cartIni = cartItems;
      let indexIfExist = -1;
      cartIni.forEach((item, index) => {
        if (item.id === data.id) {
          indexIfExist = index;
        }
      });
      if (indexIfExist !== -1) {
        cartIni[indexIfExist].cant += parseInt(value);
      } else {
        cartIni.push({ ...data, cant: parseInt(value) });
      }
    }
    setCartItems(cartIni);
    verificarCantidadItems();
  };
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={data.imgsrc}
              alt={data.name}
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5 fw-bolder">{data.name}</h1>
            <div className="fs-5 mb-5">
              {data.discoint !== 0 ? (
                <div>
                  <span className="text-decoration-line-through">
                    ${data.price}
                  </span>{" "}
                  <span>
                    ${(data.price * (1 - data.discount / 100)).toFixed(2)}
                  </span>
                </div>
              ) : (
                <span>{data.price}</span>
              )}
            </div>
            <p className="lead">{data.description}</p>
            <div className="d-flex">
              <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="number"
                value={value}
                onChange={onChange}
                style={{ maxWidth: "3rem" }}
              />
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => restarValue()}
                style={{ paddingLeft: "12px", paddingRight: "12px", fontSize: "20px" }}
              >
                -
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => sumarValue()}
                style={{ marginLeft: "5px", fontSize: "20px" }}
              >
                +
              </button>
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
                onClick={() => onSubmit()}
              >
                <i className="bi-cart-fill me-1"></i>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
