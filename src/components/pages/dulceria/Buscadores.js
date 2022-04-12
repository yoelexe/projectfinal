import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Buscadores = () => {
    const dulces = useSelector(state => state.dulces)

    const dispatch = useDispatch()

    const pFiltrado = (e) => {
        
        const filtro = dulces.filter(el => el.categ_dulce.nombre === e.target.value);

        dispatch({
            type: 'FILTRADO',
            payload: filtro
        })
    }
    return (
        <select onChange={pFiltrado}>
            <option value="">Todos</option>
            <option value="Palomitas">Palomitas</option>
            <option value="Bebidas">Bebidas</option>
        </select>
    )
}