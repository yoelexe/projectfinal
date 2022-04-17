import axios from "axios"

export const pelActions = {
    getPeliculas : "SET_PELICULAS",
    getGenero: "GET_GENERO"
}

export const getPeliculas = movies => ({
    type: pelActions.getPeliculas,
    payload: movies
})

export const getGenero = gen => ({
    type: pelActions.getGenero,
    payload: gen
})

export const getPeliculasThunk = ()=>{
    return dispatch => {
        return axios.get('https://uvk-api.herokuapp.com/uvk/pelicula/')
            .then(res => dispatch(getPeliculas(res.data)))
    }
} 

export const getGeneroThunk = ()=>{
    return dispatch => {
        return axios.get('https://uvk-api.herokuapp.com/uvk/genero/')
            .then(res => dispatch(getGenero(res.data)))
    }
} 