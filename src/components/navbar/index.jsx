import { Link } from "react-router-dom";
import logo from "../../images/Rustic_Printed-removebg-preview.png";
import "./styles.css";

export const Navbar = () => {
  return (
    <div className="navbarClass">
      <Link to="/">
        <img src={logo} alt="logo biografia afrocentradas" id="imgLogoHome" />
      </Link>
      <ul className="ulNavbar">
        <li className="liNavbar">
          <Link to="/">Home</Link>
        </li>
        <li className="liNavbar">
          <Link to="/favoritos">Favoritos</Link>
        </li>
        <li className="liNavbar">
          <Link to="/explorar">Explorar</Link>
        </li>
        <li className="liNavbar">
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <div className="ulNavbar" id="buttonLoginHome">
        <button className="loginFormBtn">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};
