import { actions } from "./actions";
import { pelActions } from "./actions/peliculasAc";
import { sedeActions } from "./actions/sedesAc";
import dulces from '../data/dulces.json'

const INITIAL_STATE={
    usuario : [],
    carrito : [],
    filtrado: [],
    filtradoPeliculas: [],
    dulces,
    movies : [],
    genero: [],
    ciudad: [],
    sedes: [],
    todosUsuarios: [],
    update: null
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.logeado:
            return{
                ...state,
                usuario: [action.payload]
            }
        case actions.usuarios:
            return{
                ...state,
                todosUsuarios: action.payload
            }
        case pelActions.getPeliculas:
            return {
                ...state,
                movies : action.payload
            }
        case pelActions.getGenero:
            return {
                ...state,
                genero : action.payload
            }
        case sedeActions.getCiudad:
            return {
                ...state,
                ciudad : action.payload
            }
        case sedeActions.getSede:
            return {
                ...state,
                sedes : action.payload
            }
        case actions.agregarCarritoDulce:
            
            let nuevod = state.dulces.find(p => p.id_dulceria === action.payload);
            let buscard = state.carrito.find(el => el.id_dulceria === nuevod.id_dulceria)
            return buscard 
            ? {
                ...state,
                carrito: state.carrito.map(item => 
                    item.id_dulceria === nuevod.id_dulceria 
                    ? {...item, cantidad: item.cantidad + 1} 
                    : item)
            } : {
                ...state,
                carrito: [...state.carrito, {...nuevod, cantidad: 1}]
            }
        case actions.agregarCarritoPeli:
            let nuevop = state.movies.find(p => p.id_pelicula === parseInt(action.payload));
            let buscarp = state.carrito.find(item => item.id_pelicula === nuevop.id_pelicula)
            return buscarp 
            ? {
                ...state,
                carrito: state.carrito.map(item => 
                    item.id_pelicula === nuevop.id_pelicula 
                    ? {...item, cantidad: item.cantidad + 1, precio_venta:20} 
                    : item)
            } : {
                ...state,
                carrito: [...state.carrito, {...nuevop, cantidad: 1}]
            }
        case "FILTRADO":
            return{
                ...state,
                filtrado: action.payload
            }
        case "FILTRADO_PELICULAS":
            return{
                ...state,
                filtradoPeliculas: action.payload
            }
        case "UPDATE":
            return{
                ...state,
                update: action.payload
            }
        default:
            return state;
    }
}

export default reducer;