import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Login } from "../../pages/login/Login";
import Carrito from "../carrito/Carrito";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  const usuario = useSelector((state) => state.usuario);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="https://i.imgur.com/1yUciIK.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/peliculas">
                  Peliculas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dulceria">
                  Dulceria
                </Link>
              </li>

              {usuario.length !== 0 &&
              usuario[0].roles.nom_rol === "administrador" ? (
                <li className="nav-item">
                  <Link className='nav-link' to="/admin">DashBoard</Link>
                </li>
              ) : (
                <span></span>
              )}
              <li className="nav-item">
                <Button
                  className="btnCarrito"
                  variant="light"
                  onClick={() => setShow(!show)}
                >
                  Boletería
                </Button>
              </li>
            </ul>
            <div className="d-flex">
              <Button
                className="btnCarrito"
                variant="light"
                onClick={() => setLogin(!login)}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <Offcanvas show={show} onHide={() => setShow(!show)} placement={"end"}>
        <Carrito />
      </Offcanvas>

      <Login login={login} setLogin={setLogin} />
    </>
  );
}

export default Navbar;
