import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { logeado } from '../../../redux/actions';
import { Navigate, useNavigate } from 'react-router-dom'

export const Login = () => {
    
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [mostrarContra, setMostrarContra] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        dispatch(logeado(usuario))
        navigate('/')
    }
    return (
        <form onSubmit={submit}>
            <div className='input-container'>
                <input 
                    type="text"
                    placeholder='Usuario'
                    onChange={e => setUsuario(e.target.value)}
                    value={usuario}
                />
            </div>
            <div className='input-container'>
                <input 
                    type={(mostrarContra)? "text" : "password"}
                    placeholder='Contraseña'
                    onChange={e => setContrasena(e.target.value)}
                    value={contrasena}
                />
            </div>

            <button onClick={()=>setMostrarContra(!mostrarContra)}>Mostrar contraseña</button>
            <button>Ingresar</button>
        </form>
    )
}
