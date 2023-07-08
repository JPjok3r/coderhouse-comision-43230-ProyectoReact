import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//*Components
import Header from "./components/Header/Header";
import ModalCart from "./components/ModalCart/ModalCart";
import Footer from "./components/Footer/Footer";

//* HOC
import { CartProvider } from "./context/CartContext";

//*Views
import HomePage from "./Views/HomePage/HomePage";
import DetailPage from "./Views/DetailPage/DetailPage";
import CategoryPage from "./Views/CategoryPage/CategoryPage";
import Cart from "./Views/Cart/Cart";

function App() {
  return (
    <Router>
      <CartProvider>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/item/:id" element={<DetailPage />} />
              <Route path="/category/:id" element={<CategoryPage />} />
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </main>
          <ModalCart />
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
