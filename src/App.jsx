
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//*Components
import Header from "./components/Header/Header";
import ModalCart from "./components/ModalCart/ModalCart";
import Footer from "./components/Footer/Footer";

//*Views
import HomePage from "./Views/HomePage/HomePage";
import DetailPage from "./Views/DetailPage/DetailPage";

function App(){
  return(
    <Router>
      <div>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/item/:id" element={<DetailPage/>}/>
          </Routes>
        </main>
        <ModalCart />
        <Footer />
      </div>
    </Router>
  );
}

export default App;