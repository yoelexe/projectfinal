import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getGeneroThunk,
  postPeliculasThunk,
  putPeliculasThunk,
} from "../../../../redux/actions/peliculasAc";
import { GeneroAdmin } from "./Genero/GeneroAdmin";

export const PeliculasForm = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const genero = useSelector((state) => state.genero);

  const update = useSelector((state) => state.update);

  const [img_peli, setImg_peli] = useState("");
  const [nombre, setNombre] = useState("");
  const [sipnosis, setSinopsis] = useState("");
  const [duracion, setDuracion] = useState("");
  const [clasificacion, setClasificacion] = useState("");
  const [generoP, setGeneroP] = useState("");
  const [estado, setEstado] = useState(true);

  useEffect(() => {
    if (update) {
      setNombre(update.nombre);
      setImg_peli(update.img_peli);
      setSinopsis(update.sipnosis);
      setDuracion(update.duracion);
      setClasificacion(update.clasificacion);
      setGeneroP(update.generoP);
      setEstado(true);
    }
    dispatch(getGeneroThunk());
  }, [update, dispatch]);

  const submit = (e) => {
    e.preventDefault();
    const objPeli = {
      img_peli,
      nombre,
      sipnosis,
      duracion,
      clasificacion,
      estado,
      genero: { id_genpeli: generoP },
    };
    if (update) {
      dispatch(putPeliculasThunk(update.id_pelicula, objPeli));
      dispatch({ type: "UPDATE", payload: null });
      limpiar();
    } else {
      dispatch(postPeliculasThunk(objPeli));
      limpiar();
    }
  };

  const limpiar = () => {
    setNombre("");
    setImg_peli("");
    setSinopsis("");
    setDuracion("");
    setClasificacion("");
    setGeneroP("");
    setEstado(true);
  };

  return (
    <div className="container crudForm">
      <h3>Peliculas</h3>

      <form className="col g-3" onSubmit={submit}>
        <div className="col-4">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="col-4">
          <label className="form-label">Imagen</label>
          <input
            type="text"
            className="form-control"
            value={img_peli}
            onChange={(e) => setImg_peli(e.target.value)}
            required
          />
        </div>

        <div className="col-4">
          <label className="form-label"></label>
          Duración
          <input
            type="number"
            className="form-control"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            required
          />
        </div>

        <div className="col-4">
          <label className="form-label">Clasificación</label>
          <input
            type="text"
            className="form-control"
            value={clasificacion}
            onChange={(e) => setClasificacion(e.target.value)}
            required
          />
        </div>

        <div className="col-4">
          <label className="form-label">Genero</label>
          <Form.Select
            className="form-select"
            onChange={(e) => setGeneroP(e.target.value)}
          >
            {genero.map((el) => (
              <option key={el.id_genpeli} value={el.id_genpeli}>
                {el.nombre}
              </option>
            ))}
          </Form.Select>
        </div>

        <div className="col-4 mb-3 mt-1">
          <label className="form-label">Sinopsis</label>
          <textarea
            className="form-control"
            value={sipnosis}
            onChange={(e) => setSinopsis(e.target.value)}
            rows="6"
          ></textarea>
        </div>

        <div className="col-4">
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

        <div className="col-4 mb-3 mt-3">
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
        onClick={() => setShow(!show)}
      >
        Nuevo Genero
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(!show)}
        size="xl"
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Genero</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GeneroAdmin />
        </Modal.Body>
      </Modal>
    </div>
  );
};
