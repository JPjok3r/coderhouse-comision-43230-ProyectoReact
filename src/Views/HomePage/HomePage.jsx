import React from 'react'

import Banner from "../../components/Banner/Banner"
import ItemListContainer from "../../components/itemListContainer/itemListContainer"

const HomePage = () => {
  return (
    <div>
      <Banner 
        title="GG GAMESTORE"
        greet={`Bienvenido!! Compra tus juegos favoritos y los nuevos lanzamientos`}  
      />
      <ItemListContainer />
    </div>
  )
}

export default HomePage
