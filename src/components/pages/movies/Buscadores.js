import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Buscadores = () => {
    const movies = useSelector(state => state.movies)

    const dispatch = useDispatch()

    const pFiltrado = (e) => {
        
        const filtro = movies.filter(mo => mo.categ_movies.nombre === e.target.value);

        dispatch({
            type: 'FILTRADO_PELICULAS',
            payload: filtro
        })
    }
    return (
        <select onChange={pFiltrado}>
            <option value="">Todos</option>
            <option value="Accion">Accion</option>
            <option value="Comedia">Comedia</option>
            <option value="Suspenso">Suspenso</option>
            <option value="Drama">Drama</option>
        </select>
    )
}