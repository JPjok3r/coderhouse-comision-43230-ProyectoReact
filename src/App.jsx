/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
todo esto de debe borrar */

import React from "react";

//*Components
import Header from "./components/Header/Header";
import ItemListContainer from "./components/itemListContainer/itemListContainer"
import ModalCart from "./components/ModalCart/ModalCart";
import Footer from "./components/Footer/Footer";

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <ItemListContainer 
          title="GG GAMESTORE"
          greet="Bienvenido!! Compra tus juegos favoritos y los nuevos lanzamientos"  
        />
        <ModalCart />
        <Footer />
      </div>
    );
  }
}

export default App;