
import { useState } from "react";
import "./footer.css";

const Footer = () => {
    let yy = new Date;
    const [year] = useState(yy.getFullYear());
  return (
    <footer className="py-5 bg-dark footPage">
        <div className="container"><p className="m-0 text-center text-white">Copyright &copy; GG GameStore {year}</p></div>
    </footer>
  )
}

export default Footer
