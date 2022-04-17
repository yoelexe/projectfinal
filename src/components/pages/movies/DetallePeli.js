import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const DetallePeli = () => {
    const [ peli, setPeli ] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://uvk-api.herokuapp.com/uvk/pelicula/${id}`)
        .then(res => setPeli(res.data))
    },[id])

    console.log(peli)
  return (
    <div>
        <h1>{peli.nombre}</h1>
        <img src={peli.img_peli} alt="" />
        <p>{peli.sipnosis}</p>
    </div>
  )
}
