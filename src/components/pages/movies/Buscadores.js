import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGeneroThunk } from "../../../redux/actions/peliculasAc";

export const Buscadores = () => {
  const movies = useSelector((state) => state.movies);
  const genero = useSelector((state) => state.genero);

  const dispatch = useDispatch();

  const pFiltrado = (e) => {
    const filtro = movies.filter(
      (peli) => peli.genero.nombre === e.target.value
    );
    console.log(filtro);

    dispatch({
      type: "FILTRADO_PELICULAS",
      payload: filtro,
    });
  };

  useEffect(() => {
    dispatch(getGeneroThunk());
  }, [dispatch]);
  return (
    <select onChange={pFiltrado}>
      <option value="">Todos</option>
      {genero.map((el) => (
        <option key={el.id_genpeli} value={el.nombre}>
          {el.nombre}
        </option>
      ))}
    </select>
  );
};
