import { actions } from "./actions";
import dulces from '../data/dulces.json'
import movies from '../data/movies.json'

const INITIAL_STATE={
    usuario : "",
    carrito : [],
    filtrado: [],
    filtradoPeliculas: [],
    dulces,
    movies
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.logeado:
            return{
                ...state,
                usuario: action.payload
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
            let nuevop = state.movies.find(p => p.id_movies === action.payload);
            let buscarp = state.carrito.find(item => item.id_movies === nuevop.id_movies)
            return buscarp 
            ? {
                ...state,
                carrito: state.carrito.map(item => 
                    item.id_dulceria === nuevop.id_dulceria 
                    ? {...item, cantidad: item.cantidad + 1} 
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
        default:
            return state;
    }
}

export default reducer;