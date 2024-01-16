
import React from 'react';
import Logo from '@/img/logo.png';

function Navegador() {
  return (
<div>
 <nav  id="contenedor_navegador" className=" navbar navbar-dark  fixed-top">
    <div className="container-fluid">
      <img className="img_logo" src={Logo} alt=""/>
      <button id='btnHamburguesa' className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"> HOP UP</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ABOUT US</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                ACTIVITIES
              </a>
              <ul id="hamburguesa" className=" dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="#">MOUNTAINS</a></li>
                <li><a className="dropdown-item" href="#">XTREM</a></li>
                <li><a className="dropdown-item" href="#">SWIMINGPOOL</a></li>
                <li><a className="dropdown-item" href="#">BEACH</a></li>
                <li><a className="dropdown-item" href="#">ANIMALS</a></li>
                <li><a className="dropdown-item" href="#">VEHICLES</a></li>
                <li><a className="dropdown-item" href="#">ROUTES</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#">ALL ACTIVITIES</a></li>
              </ul>
            </li>
          </ul>
          <div className="dropdown mt-3">
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
              aria-expanded="false" data-bs-auto-close="outside">
              Log-in
            </button>
            <form className="dropdown-menu p-4">
              <div className="mb-3">
                <label for="exampleDropdownFormEmail2" className="form-label">Usuarios:</label>
                <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
              </div>
              <div className="mb-3">
                <label for="exampleDropdownFormPassword2" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck2"/>
                  <label className="form-check-label" for="dropdownCheck2">
                    Remember me
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Iniciar sesion</button>
            </form>

          </div>
        </div>
      </div>
      </div>
  </nav>


    
</div>
  );
}

// Exporta el componente para que pueda ser utilizado en otros archivos
export default Navegador;