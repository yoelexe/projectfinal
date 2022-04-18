import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCiudadThunk,
  getCiudadThunk,
} from "../../../../../redux/actions/sedesAc";

export const ListaCiudades = () => {
  const dispatch = useDispatch();
  const ciudad = useSelector((state) => state.ciudad);
  useEffect(() => {
    dispatch(getCiudadThunk());
  }, [dispatch]);
  return (
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
          {ciudad.map((e) => (
            <tr key={e.id_ciudad}>
              <th scope="row">{e.id_ciudad}</th>
              <td>{e.nombre_ciu}</td>
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
                  onClick={() => dispatch(deleteCiudadThunk(e.id_ciudad))}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
