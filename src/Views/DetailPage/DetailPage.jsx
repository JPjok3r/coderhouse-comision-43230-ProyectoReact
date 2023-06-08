import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  let { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios("../../www.db_app.json").then((res) => {
      setData(res.data[0].juegos[id - 1]);
    });
  }, [id]);
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={`.${data.imgsrc}`}
              alt={data.nombre}
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5 fw-bolder">{data.nombre}</h1>
            <div className="fs-5 mb-5">
              {data.descuento !== 0 ? <div><span className="text-decoration-line-through">${data.precio}</span> <span>${(data.precio * (1 - (data.descuento / 100))).toFixed(2)}</span></div>:
              <span>{data.precio}</span>}
            </div>
            <p className="lead">
              {data.descripcion}
            </p>
            <div className="d-flex">
              {/* <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="num"
                value="1"
                style="max-width: 3rem"
              /> */}
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
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
