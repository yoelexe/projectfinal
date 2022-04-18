import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteGeneroThunk,
  postGeneroThunk,
  putGeneroThunk,
} from "../../../../../redux/actions/peliculasAc";

export const GeneroAdmin = () => {
  const dispatch = useDispatch();

  const update = useSelector((state) => state.update);
  const genero = useSelector(state => state.genero)

  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState(true);

  useEffect(() => {
    if (update) {
      setNombre(update.nombre);
      setEstado(update.estado);
    }
  }, [update]);

  const submit = (e) => {
    e.preventDefault();
    const objCiudad = {
      nombre,
      estado,
    };

    if (update) {
      dispatch(putGeneroThunk(update.id_ciudad, objCiudad));
      dispatch({ type: "UPDATE", payload: null });
      limpiar();
    } else {
      dispatch(postGeneroThunk(objCiudad));
      limpiar();
    }
  };

  const limpiar = () => {
    setNombre("");
  };
  return (
    <>
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
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
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
      </div>

      <div className="container col-6 crudModalList">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {genero.map((e) => (
            <tr key={e.id_genpeli}>
              <th scope="row">{e.id_genpeli}</th>
              <td>{e.nombre}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() =>
                    dispatch({
                      type: "UPDATE",
                      payload: { ...e },
                    })
                  }
                >
                  Editar
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteGeneroThunk(e.id_genpeli))}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};
