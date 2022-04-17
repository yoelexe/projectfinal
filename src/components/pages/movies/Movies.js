import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeliculasThunk } from "../../../redux/actions/peliculasAc";
import { Buscadores } from "./Buscadores";
import CardMovies from "./CardMovies";

const Movies = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);
  const filtradoPeliculas = useSelector((state) => state.filtradoPeliculas);

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getPeliculasThunk());
    if(filtradoPeliculas.length === 0){
      return setData(movies) 
    } else {
      return setData(filtradoPeliculas)
    }
  }, [dispatch, movies, filtradoPeliculas]);
  return (
    <div className="movies">
      <Buscadores setData={setData} />
      <ul className="row row-cols-1 row-cols-md-5 g-4">
        {data.map((p) => (
          <CardMovies key={p.id_pelicula} {...p} />
        ))}
      </ul>
    </div>
  );
};
export default Movies;
