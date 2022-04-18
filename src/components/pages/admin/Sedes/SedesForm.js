import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getCiudadThunk,
  postSedeThunk,
  putSedeThunk,
} from "../../../../redux/actions/sedesAc";
import { CiudadAmin } from "./Ciudad/CiudadAmin";

export const SedesForm = () => {
  const dispatch = useDispatch();
  const update = useSelector((state) => state.update);
  const ciudades = useSelector((state) => state.ciudad);

  const [mostrar, setMostrar] = useState(false);
  const [ciudad, setCiudad] = useState("");
  const [nombre_sede, setNombre_sede] = useState("");
  const [direccion, setDireccion] = useState("");
  const [estado, setEstado] = useState(true);

  useEffect(() => {
    if (update) {
      setCiudad(update.ciudad.nombre_ciu);
      setNombre_sede(update.nombre_sede);
      setDireccion(update.direccion);
      setEstado(true);
    }

    dispatch(getCiudadThunk());
  }, [dispatch, update]);

  const submit = (e) => {
    e.preventDefault();
    const objSede = {
      ciudad: { id_ciudad: ciudad },
      nombre_sede,
      direccion,
      estado,
    };

    if (update) {
      dispatch(putSedeThunk(update.id_sede, objSede));
      dispatch({ type: "UPDATE", payload: null });
      limpiar();
    } else {
      dispatch(postSedeThunk(objSede));
      limpiar();
    }
  };

  const limpiar = () => {
    setCiudad("");
    setNombre_sede("");
    setDireccion("");
    setEstado(true);
  };

  return (
    <div className="container crudForm">
      <h3>Sedes</h3>
      <form className="col g-3" onSubmit={submit}>
        <div className="col-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre_sede}
            onChange={(e) => setNombre_sede(e.target.value)}
            required
          />
        </div>

        <div className="col-3">
          <label htmlFor="estado" className="form-label">
            Ciudad
          </label>
          <select
            id="inputState"
            className="form-select"
            onChange={(e) => setCiudad(e.target.value)}
          >
            <option value="">seleccione</option>
            {ciudades.map((el) => (
              <option key={el.id_ciudad} value={el.id_ciudad}>
                {el.nombre_ciu}
              </option>
            ))}
          </select>
        </div>

        <div className="col-3">
          <label htmlFor="nombre" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>

        <div className="col-3">
          <label htmlFor="estado" className="form-label">
            Estado
          </label>
          <select
            id="inputState"
            className="form-select"
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value={true}>Disponible</option>
            <option value={false}>No Disponible</option>
          </select>
        </div>

        <div className="col-3 mb-3 mt-3">
          <button className="btn btn-primary">
            {update === null ? "Registrar" : "Actualizar"}
          </button>{" "}
          {update && (
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch({ type: "UPDATE", payload: null });
                limpiar();
              }}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
      <Button
        variant="success"
        className="btn-modal"
        onClick={() => setMostrar(!mostrar)}
      >
        Agregar Ciudad
      </Button>

      <Modal
        show={mostrar}
        onHide={() => setMostrar(!mostrar)}
        size="xl"
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Ciudad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CiudadAmin />
        </Modal.Body>
      </Modal>
    </div>
  );
};
