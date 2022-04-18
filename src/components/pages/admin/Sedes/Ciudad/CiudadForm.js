import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postCiudadThunk,
  putCiudadThunk,
} from "../../../../../redux/actions/sedesAc";

export const CiudadForm = () => {
  const dispatch = useDispatch();

  const update = useSelector((state) => state.update);

  const [nomCiu, setNomCiu] = useState("");
  const [estado, setEstado] = useState(true);

  useEffect(() => {
    if (update) {
      setNomCiu(update.nombre_ciu);
      setEstado(update.estado);
    }
  }, [update]);

  const submit = (e) => {
    e.preventDefault();
    const objCiudad = {
      nombre_ciu: nomCiu,
      estado,
    };

    if (update) {
      dispatch(putCiudadThunk(update.id_ciudad, objCiudad));
      dispatch({ type: "UPDATE", payload: null });
      limpiar();
    } else {
      dispatch(postCiudadThunk(objCiudad));
      limpiar();
    }
  };

  const limpiar = () => {
    setNomCiu("");
    setEstado(true);
  };
  return (
    <div className="container crudModalForm">
      <form className="col g-3" onSubmit={submit}>
        <div className="col-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nomCiu}
            onChange={(e) => setNomCiu(e.target.value)}
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
          </button> {" "}
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
    </div>
  );
};
