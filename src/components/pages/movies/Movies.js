import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPeliculasThunk } from "../../../redux/actions";
import { Buscadores } from "./Buscadores";
import CardMovies from "./CardMovies";
//import './Movies.css';
//import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const Movies = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);
  const filtradoPeliculas = useSelector((state) => state.filtradoPeliculas);

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(setPeliculasThunk());
    if(filtradoPeliculas.length === 0){
      return setData(movies) 
    } else {
      return setData(filtradoPeliculas)
    }
  }, [dispatch, movies, filtradoPeliculas]);
  return (
    <>
      <Buscadores setData={setData} />
      <ul className="row row-cols-1 row-cols-md-4 g-4">
        {data.map((p) => (
          <CardMovies key={p.id_pelicula} {...p} />
        ))}
      </ul>
    </>
  );
};
export default Movies;
