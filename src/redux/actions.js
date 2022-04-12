import axios from "axios"

export const actions = {
    logeado : "LOGEADO",
    agregarCarritoDulce: "CARRITO_DULCE",
    agregarCarritoPeli: "CARRITO_MOVIES",
    aumentarProdCart : "AUMENTAR_PROD_CART",
    disminuirProdCart : "DISMINUIR_PROD_CART",
    setPeliculas : "SET_PELICULAS",
    getGenero: "GET_GENERO"
}

export const logeado = (usuario) => ({
    type: actions.logeado,
    payload: usuario
})

export const agregarCarritoDulce = (id) => ({
    type: actions.agregarCarritoDulce,
    payload: id
})

export const agregarCarritoPeli = (id) => ({
    type: actions.agregarCarritoPeli,
    payload: id
})

export const aumentarProdCart = (cantidad) => ({
    type: actions.aumentarProdCart,
    payload: cantidad
})

export const disminuirProdCart = (cantidad) => ({
    type: actions.disminuirProdCart,
    payload: cantidad
})

export const setPeliculas = movies => ({
    type: actions.setPeliculas,
    payload: movies
})

export const getGenero = gen => ({
    type: actions.getGenero,
    payload: gen
})

export const setPeliculasThunk = ()=>{
    return dispatch => {
        return axios.get('http://localhost:8090/uvk/pelicula/')
            .then(res => dispatch(setPeliculas(res.data)))
    }
} 

export const getGeneroThunk = ()=>{
    return dispatch => {
        return axios.get('http://localhost:8090/uvk/genero')
            .then(res => dispatch(getGenero(res.data)))
    }
} 