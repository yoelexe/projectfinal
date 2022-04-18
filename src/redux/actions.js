import axios from "axios"

export const actions = {
    logeado : "LOGEADO",
    agregarCarritoDulce: "CARRITO_DULCE",
    agregarCarritoPeli: "CARRITO_MOVIES",
    usuarios: 'TODOS_USUARIOS'
}

export const logeado = (usuario) => ({
    type: actions.logeado,
    payload: usuario
})

export const getUsuarios = (usuarios) => ({
    type: actions.usuarios,
    payload: usuarios
})

export const agregarCarritoDulce = (id) => ({
    type: actions.agregarCarritoDulce,
    payload: id
})

export const agregarCarritoPeli = (id) => ({
    type: actions.agregarCarritoPeli,
    payload: id
})

export const logueadoThunk = (id) => {
    return (dispatch) => {
        return axios
          .get(`https://uvk-api.herokuapp.com/uvk/userempleado/${id}`)
          .then((res) => dispatch(logeado(res.data)));
      };
}

export const getUsuariosThunk = () => {
    return (dispatch) => {
        return axios
          .get(`https://uvk-api.herokuapp.com/uvk/userempleado/`)
          .then((res) => dispatch(getUsuarios(res.data)));
      };
}