import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carrito from "../carrito/Carrito";
import './Navbar.css'

function Navbar() {
  const [show, setShow] = useState(false);
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
              <li className="nav-item">
                <Button className='btnCarrito' variant="light" onClick={() => setShow(!show)}>
                  Carrito
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Offcanvas show={show} onHide={() => setShow(!show)} placement={"end"}>
        <Carrito />
      </Offcanvas>
    </>
  );
}

export default Navbar;
