import { GiCapybara } from "react-icons/gi";
import CartWidget from '../cartWidget/CartWidget'
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";


function Navbar() {
        
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          
          <Link to={"/"} className="navbar-brand d-flex align-items-center">
            <GiCapybara className="me-2 capybara-icon" />MateMarket
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link active" aria-current="page" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link active">Nosotros</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink to={"/category"} className="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink to={"/category/mates"} className="dropdown-item" >Mates</NavLink></li>
                  <li><NavLink to={"/category/termos"} className="dropdown-item" >Termos</NavLink></li>
                  <li><NavLink to={"/category/yerbas"} className="dropdown-item" >Yerbas</NavLink></li>
                  <li><NavLink to={"/category/bombillas"} className="dropdown-item" >Bombillas</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink to={"/category/otros"} className="dropdown-item" >Otros</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" >Contactanos</a>
              </li>
            </ul>
            <ul className="navbar-nav d-flex align-items-center mb-2 mb-lg-0 list-unstyled">
              <li className="nav-item"><CartWidget /></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
