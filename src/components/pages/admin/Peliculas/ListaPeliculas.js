import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePeliculasThunk,
  getPeliculasThunk,
} from "../../../../redux/actions/peliculasAc";

export const ListaPeliculas = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(getPeliculasThunk());
  }, [dispatch]);
  return (
    <div className="container col-6 crudList" >
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((e) => (
            <tr key={e.id_pelicula}>
              <th scope="row">{e.id_pelicula}</th>
              <td>{e.nombre}</td>
              <td>{e.estado ? "Disponible" : "No Disponible"}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => 
                    dispatch({ type: "UPDATE", payload: { ...e }
                  })}
                >
                  Editar
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deletePeliculasThunk(e.id_pelicula))}
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
