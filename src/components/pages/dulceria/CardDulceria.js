import React from "react";
import { useDispatch } from "react-redux";
import { agregarCarritoDulce } from "../../../redux/actions";

const CardDulceria = (props) => {
  const dispatch = useDispatch();

  const agregar = (e) => {
    e.preventDefault();

    dispatch(agregarCarritoDulce(props.id_dulceria));
  };

  return (
    <div className="col">
      <li className="card">
        <img src="https://e7.pngegg.com/pngimages/547/622/png-clipart-popcorn-and-soda-cup-popcorn-cinema-popcorn-food-happy-birthday-vector-images-thumbnail.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.descripcion}</p>
          <button className="btn btn-success" onClick={agregar}>
            al carrito!
          </button>
        </div>
      </li>
    </div>
  );
};

export default CardDulceria;
