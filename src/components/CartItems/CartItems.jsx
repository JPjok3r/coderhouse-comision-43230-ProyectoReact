import React from 'react'

const CartItems = ({ data }) => {
  return (
        <div className="row g-0">
            <div className="col-md-4">
            <img src={data.imgsrc} className="img-fluid rounded-start cartImage" alt={data.name} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">Precio: $ {(data.price * (1 - data.discount / 100)).toFixed(2)}</p>
                    <p className="card-text">Cantidad: {data.cant}</p>  
                    {/* <button type="button" className="btn btn-primary btn-sm" onClick={() => restarHandler()}>-</button><button type="button" className="btn btn-primary btn-sm" onClick={() => sumaHandler()}>+</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick="borrarItem(${item.juego.id})"><i className="bi bi-trash"></i></button> */}
                </div>
            </div>
        </div>
  )
}

export default CartItems
