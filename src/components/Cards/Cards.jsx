import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="card h-100">
      {data.descuento !== 0 ? (
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Sale
        </div>
      ) : (
        ``
      )}
      <img className="card-img-top" src={data.imgsrc} alt={data.name} />
      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">{data.name}</h5>
          {/*verificarRate(juego.rate)*/}
          {data.discount !== 0 ? (
            <span className="text-muted text-decoration-line-through">
              ${data.price}
            </span>
          ) : (
            `$${data.price}`
          )}
        </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <Link
            to={`/item/${data.id}`}
            className="btn btn-outline-dark mt-auto"
            id={data.id}
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
