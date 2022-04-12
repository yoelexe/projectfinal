import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Buscadores } from "./Buscadores";
import CardMovies from "./CardMovies";
//import './Movies.css';
//import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const Movies = () => {
  const movies = useSelector((state) => state.movies);
  const filtradoPeliculas = useSelector((state) => state.filtradoPeliculas);
  const [data, setData] = useState([]);
  useEffect(() => {
    (filtradoPeliculas.length === 0) ? setData(movies) : setData(filtradoPeliculas);
  }, [filtradoPeliculas, movies]);
  return (
    <>
      <Buscadores setData={setData} />
      <ul className="row row-cols-1 row-cols-md-4 g-4">
        {data.map((mo) => (
          <CardMovies key={mo.id_movies} {...mo} />
        ))}
      </ul>
    </>
  );
};
export default Movies;
