import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSedeThunk, getSedeThunk } from '../../../../redux/actions/sedesAc';

export const ListaSedes = () => {
    const dispatch = useDispatch();
    const sedes = useSelector(state => state.sedes)

    useEffect(()=>{
        dispatch(getSedeThunk())
    }, [dispatch])
  return (
    <div className="container col-6 crudList">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sedes.map((e) => (
            <tr key={e.id_sede}>
              <th scope="row">{e.id_sede}</th>
              <td>{e.nombre_sede}</td>
              <td>{e.ciudad.nombre_ciu}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() =>
                    dispatch({
                      type: "UPDATE",
                      payload: { ...e },
                    })
                  }
                >
                  Editar
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteSedeThunk(e.id_sede))}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
