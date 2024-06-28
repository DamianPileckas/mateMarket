import { GiCapybara } from "react-icons/gi";
import CartWidget from '../cartWidget/CartWidget'
import './Navbar.css';
function Navbar() {

        
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          
          <a className="navbar-brand d-flex align-items-center" href="#">
            <GiCapybara className="me-2 capybara-icon" />MateMarket
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Nosotros</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Mates</a></li>
                  <li><a class="dropdown-item" href="#">Termos</a></li>
                  <li><a class="dropdown-item" href="#">Yerba</a></li>
                  <li><a class="dropdown-item" href="#">bombillas</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">otros</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Contactanos</a>
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
