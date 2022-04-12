import React from "react";
import { useDispatch } from "react-redux";
import { agregarCarritoPeli } from "../../../redux/actions";

const CardMovies = (props) => {
  const dispatch = useDispatch();

  const agregar = (e) => {
    e.preventDefault();

    dispatch(agregarCarritoPeli(props.id_movies));
  };

  return (
    <div className="col">
      <li className="card">
        <img src="https://cinestar-files.obs.la-south-2.myhuaweicloud.com/movies/1649364917.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.descripcion}</p>
          <button className="btn btn-success" onClick={agregar}>
            Agregar al carrito
          </button>
        </div>
      </li>
    </div>
  );
};

export default CardMovies;