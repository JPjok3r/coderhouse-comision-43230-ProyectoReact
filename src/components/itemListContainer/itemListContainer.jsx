import "./itemList.css";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

import Cards from "../Cards/Cards";


const itemListContainer = () => {
 const [data, setData] = useState([]); 

 useEffect(() => {
  const getGames = async () => {
    const q = query(collection(db, "games"));
    const gamesSnapshot = await getDocs(q);
    const dataGames = [];
    gamesSnapshot.forEach((doc) => {
      dataGames.push({...doc.data(), id: doc.id});
    });
    setData(dataGames);
  };
  getGames();
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
