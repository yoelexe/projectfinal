import React from "react";
import { Link } from "react-router-dom";
import "./Movies.css";

const CardMovies = (props) => {
  return (
    <Link to={`/peliculas/${props.id_pelicula}`}>
      <div className="col">
        <li className="card">
          <img src={props.img_peli} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.nombre}</h5>
            <p className="card-text">
              {props.genero.nombre} | {props.duracion} mins |{" "}
              {props.clasificacion}
            </p>
          </div>
        </li>
      </div>
    </Link>
  );
};

export default CardMovies;
