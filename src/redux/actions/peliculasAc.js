import axios from "axios";

export const pelActions = {
  getPeliculas: "SET_PELICULAS",
  getGenero: "GET_GENERO",
};

export const getPeliculas = (movies) => ({
  type: pelActions.getPeliculas,
  payload: movies,
});

export const getGenero = (gen) => ({
  type: pelActions.getGenero,
  payload: gen,
});

export const getPeliculasThunk = () => {
  return (dispatch) => {
    return axios
      .get(`https://uvk-api.herokuapp.com/uvk/pelicula/`)
      .then((res) => dispatch(getPeliculas(res.data)));
  };
};
export const postPeliculasThunk = (peli) => {
  return (dispatch) => {
    return axios
      .post(`https://uvk-api.herokuapp.com/uvk/pelicula/`, peli)
      .then(() => dispatch(getPeliculasThunk()));
  };
};

export const putPeliculasThunk = (id, peli) => {
  return (dispatch) => {
    return axios
      .put(`https://uvk-api.herokuapp.com/uvk/pelicula/${id}`, peli)
      .then(() => dispatch(getPeliculasThunk()));
  };
};

export const deletePeliculasThunk = (id) => {
  return (dispatch) => {
    return axios
      .delete(`https://uvk-api.herokuapp.com/uvk/pelicula/${id}`)
      .then(() => dispatch(getPeliculasThunk()));
  };
};

export const getGeneroThunk = () => {
  return (dispatch) => {
    return axios
      .get("https://uvk-api.herokuapp.com/uvk/genero/")
      .then((res) => dispatch(getGenero(res.data)));
  };
};

export const postGeneroThunk = (genero) => {
  return (dispatch) => {
    return axios
      .post(`https://uvk-api.herokuapp.com/uvk/genero/`, genero)
      .then(() => dispatch(getPeliculasThunk()));
  };
};

export const putGeneroThunk = (id, genero) => {
  return (dispatch) => {
    return axios
      .put(`https://uvk-api.herokuapp.com/uvk/genero/${id}`, genero)
      .then(() => dispatch(getPeliculasThunk()));
  };
};

export const deleteGeneroThunk = (id) => {
  return (dispatch) => {
    return axios
      .delete(`https://uvk-api.herokuapp.com/uvk/genero/${id}`)
      .then(() => dispatch(getPeliculasThunk()));
  };
};