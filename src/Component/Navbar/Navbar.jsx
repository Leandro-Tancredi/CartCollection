import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {
  
  return (
    <div>
      <div className="colorNav">
      <div className="row">
       <a className="navbar-brand fuente" >Cosmica Intuicion</a>
       </div>
      <div className="container-fluid">
      <div className="row ml-3">
        <div className="col-md-7"></div>
        <div className="col-3">
        <nav className="navbar navbar-expand-lg  ">
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
            <a className="navbar-brand fuente ">Telefono</a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand fuente ">@   cosmicaintuicion@gmail.com</a>
              </li>
              <li className="nav-item">
              <a className="navbar-brand fuente">ubicacion map</a>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      </div>
      </div>
      </div>
      <div className="container">
        <div className="row pt-3 pb-3">
          <div className="col-md-4 pt-5">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <div className="col-md-4">
            <img className="tamañoFoto" src=".././images/fotoFlor.jpeg " alt="foto" />
          </div>

          <div className="col-md-4 pt-5">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav pl-5 mb-2 mb-lg-0">
                <a className="nav-link">Crear Cuenta</a>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#"> | Iniciar sesión</a>
                </li>
              </ul>
              </div></div>
            </nav></div>  
          </div></div>
            
            <div className="container-fluid ">
              <div className="row">
               <div className="colorNav posicionNav">
                <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  mb-2 mb-lg-0 ">
              <Link to={`/`}>
              <a className="nav-link">inicio</a>
               </Link>
               <li className="nav-item">
                  <Link to={`/category/PreguntasFrecuentes`}>
                  <a className="nav-link">Preguntas Frecuentes</a>
                  </Link>
                </li>
                <li className="nav-item">
                <Link to={`/category/Acerca-de-mi`}>
                  <a className="nav-link">Acerca de mi</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Como Comprar</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Contacto</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" ><Link to={`/cart`}><CartWidget /></Link></a></li>
              </ul>
            </div>
              
            </nav>
            <div/>
            </div>
            </div>   
            </div>
            </div>
  );
}

export default NavBar;
