import axios from "axios";

export const sedeActions = {
  getCiudad: "GET_CUIDAD",
  delUpdate: "DELETE_UPDATE_CONTENT",
  getSede: "GET_SEDE",
};

export const getCiudad = (ciudad) => ({
  type: sedeActions.getCiudad,
  payload: ciudad,
});

export const getSede = (sede) => ({
  type: sedeActions.getSede,
  payload: sede,
});

export const getCiudadThunk = () => {
  return (dispatch) => {
    return axios
      .get("https://uvk-api.herokuapp.com/uvk/ciudad")
      .then((res) => dispatch(getCiudad(res.data)));
  };
};

export const postCiudadThunk = (ciudad) => {
  return (dispatch) => {
    return axios
      .post("https://uvk-api.herokuapp.com/uvk/ciudad", ciudad)
      .then(() => dispatch(getCiudadThunk()));
  };
};

export const putCiudadThunk = (id, ciudad) => {
  return (dispatch) => {
    return axios
      .put(`https://uvk-api.herokuapp.com/uvk/ciudad/${id}`, ciudad)
      .then(() => {
        dispatch(getCiudadThunk());
      });
  };
};

export const deleteCiudadThunk = (id) => {
  return (dispatch) => {
    return axios
      .delete(`https://uvk-api.herokuapp.com/uvk/ciudad/${id}`)
      .then(() => dispatch(getCiudadThunk(null)));
  };
};

export const getSedeThunk = () => {
  return (dispatch) => {
    return axios
      .get("https://uvk-api.herokuapp.com/uvk/sede/")
      .then((res) => dispatch(getSede(res.data)));
  };
};
