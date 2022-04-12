export const actions = {
    logeado : "LOGEADO",
    agregarCarritoDulce: "CARRITO_DULCE",
    agregarCarritoPeli: "CARRITO_MOVIES",
    aumentarProdCart : "AUMENTAR_PROD_CART",
    disminuirProdCart : "DISMINUIR_PROD_CART"
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