
import axios from "axios";
import "./itemList.css";
import { useState, useEffect } from "react";

import Cards from "../Cards/Cards";


const itemListContainer = () => {
 const [data, setData] = useState([]); 

 useEffect(() => {
  //axios recuperar los datos del json
  axios("www.db_app.json").then((res) => {
    setData(res.data[0].juegos);
  });
 }, [])

  return (
    <section className="py-5" id="contenedorCards">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center" id="contenedorJuegos">
            {data.map(juego => {
              return(
                <div className="col mb-5" key={juego.id}> 
                <Cards data={juego} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  )
}

export default itemListContainer
