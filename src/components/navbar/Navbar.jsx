import { Link } from 'react-router-dom';
import './navbar.css'

 const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to={"Home"} className="navbar-link">Inicio</Link>
        </li>
        <li className="navbar-item">
          <Link to={"bolsos"} className="navbar-link">Bolsos</Link>
        </li>
        <li className="navbar-item">
          <Link to={"carteras"} className="navbar-link">Carteras</Link>
        </li>
        <li className="navbar-item">
          <Link to={"zapatos"} className="navbar-link">Carteras</Link>
        </li>
      </ul>
    </nav>

  )
}

export default Navbar;
