import axios from "axios";
import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

const CategoryPage = () => {

  let { id } = useParams();
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);
  useEffect(() => {
    //axios recuperar los datos del json
    axios("../../www.db_app.json").then((res) => {
      setData(res.data[0].juegos);
      setCat(res.data[0].categories);
    });
  }, [id]);
  
  return (
    <section className="py-5" id="contenedorCards">
      <h1 className="display-5 fw-bolder text-center">Juegos de { cat[id-1] ? cat[id-1].name : ''}</h1>
      <div className="container px-4 px-lg-5 mt-5">
        <div
          className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
          id="contenedorJuegos"
        >
          {data.map((juego) => {
            return juego.categoria.includes(cat[id-1].name) && (  
              <div className="col mb-5" key={juego.id}>
                <div className="card h-100">
                  {juego.descuento !== 0 ? (
                    <div
                      className="badge bg-dark text-white position-absolute"
                      style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                      Sale
                    </div>
                  ) : (
                    ``
                  )}
                  <img
                    className="card-img-top"
                    src={`../${juego.imgsrc}`}
                    alt={juego.nombre}
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{juego.nombre}</h5>
                      {/*verificarRate(juego.rate)*/}
                      {juego.descuento !== 0 ? (
                        <span className="text-muted text-decoration-line-through">
                          ${juego.precio}
                        </span>
                      ) : (
                        `$${juego.precio}`
                      )}
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <Link to={`/item/${juego.id}`}>
                        <a
                          className="btn btn-outline-dark mt-auto"
                          id={`juego${juego.id}`}
                        >
                          Ver detalles
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
