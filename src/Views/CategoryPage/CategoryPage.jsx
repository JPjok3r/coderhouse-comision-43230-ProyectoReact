import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

import Cards from "../../components/Cards/Cards";

const CategoryPage =  () => {

  let { id } = useParams();
  const [data, setData] = useState([]);
  useEffect( () => {
    
    const getGames = async () => {
      const q = query(collection(db, "games"), where("category", "array-contains", id));
      const gamesSnapshot = await getDocs(q);
      const dataGames = [];
      gamesSnapshot.forEach((doc) => {
        dataGames.push({...doc.data(), id: doc.id});
      });
      setData(dataGames);
  };
  getGames();
  }, [id]);
  
  return (
    <section className="py-5" id="contenedorCards">
      <h1 className="display-5 fw-bolder text-center">Juegos de { id }</h1>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center" id="contenedorJuegos">
            {data.map(juego => {
              return (
                <div className="col mb-5" key={juego.id}> 
                  <Cards data={juego} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
