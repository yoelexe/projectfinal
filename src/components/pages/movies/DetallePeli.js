import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { agregarCarritoPeli } from '../../../redux/actions';

export const DetallePeli = () => {
    const [ peli, setPeli ] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://uvk-api.herokuapp.com/uvk/pelicula/${id}`)
        .then(res => setPeli(res.data))
    },[id])

    const dispatch = useDispatch();

  const agregar = (e) => {
    e.preventDefault();

    dispatch(agregarCarritoPeli(id));
  };
  return (
    <>
    <div className='container mt-3 detalle'>
        <h3>{peli.nombre}</h3>
        <img src={peli.img_peli} alt="" />
        <p>{peli.sipnosis}</p>
        <button className="btn btn-success" onClick={agregar}>
            Agregar al carrito
          </button>
    </div>
    </>
  )
}
