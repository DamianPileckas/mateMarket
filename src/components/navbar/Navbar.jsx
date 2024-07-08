import { GiCapybara } from "react-icons/gi";
import CartWidget from '../cartWidget/CartWidget'
import './Navbar.css';


function Navbar() {
        
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          
          <a className="navbar-brand d-flex align-items-center" href="#">
            <GiCapybara className="me-2 capybara-icon" />MateMarket
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Nosotros</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Mates</a></li>
                  <li><a className="dropdown-item" href="#">Termos</a></li>
                  <li><a className="dropdown-item" href="#">Yerba</a></li>
                  <li><a className="dropdown-item" href="#">bombillas</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">otros</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Contactanos</a>
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
