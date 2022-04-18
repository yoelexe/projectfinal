import axios from "axios";
import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";

const Carrito = () => {
  const carrito = useSelector((state) => state.carrito);

  const pagar = async () => {
    const data = { items: [] };

    carrito.forEach((prod) => {
      const add = {
        nombre: prod.nombre,
        precio: prod.precio_venta,
        cantidad: prod.cantidad,
      };
      data.items.push(add);
    });

    axios
      .post("https://cinepago.herokuapp.com/api/pagos/", data)
      .then((res) => {
        if (res.data.success) {
          mostrarMP(res.data.data);
        }
      });
  };
  const mostrarMP = (token) => {
    // eslint-disable-next-line no-undef
    const mp = new MercadoPago("TEST-2c52418b-d0d0-4b88-a32f-35f6f30e6bd9", {
      locale: "es-MX",
    });

    mp.checkout({
      preference: {
        id: token,
      },
      autoOpen: true,
    });
  };

  return (
    <div className="carrito">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul className="list-group">
          {carrito.map((el,i) => (
            <li className="row g-0" key={i}>
            <div className="col-md-4">
              <img src="https://elmen.pe/wp-content/uploads/2018/02/Combos-de-cine.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{el.nombre}</h5>
                <p className="card-text"><small className="text-muted">S/. {el.precio_venta} x{el.cantidad} unidades</small></p>
              </div>
            </div>
          </li>
          ))}
        </ul>
        {carrito.length === 0 ? (
          <h4>No hay productos</h4>
        ) : (
          <div>
            <button className="btn btn-success" onClick={pagar}>
              Pagar
            </button>
          </div>
        )}
      </Offcanvas.Body>
    </div>
  );
};

export default Carrito;
