
export const actions = {
    logeado : "LOGEADO",
    agregarCarritoDulce: "CARRITO_DULCE",
    agregarCarritoPeli: "CARRITO_MOVIES"
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