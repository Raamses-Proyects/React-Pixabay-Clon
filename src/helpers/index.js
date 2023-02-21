export const retornarPalabra = () => {
    const imangesRandom = ["Cats", "Coffee", "Cars", "Travels", "Landscapes", "Beach", "Winter", "Birds", "Food", "Ice Cream"]
    const termino = imangesRandom[ Math.floor( Math.random() * 10 ) ]
    return termino
}

export const calcularPaginas = (totalHits, registrosPorPagina) => {
    let total = 0
    return total = Math.ceil(totalHits / registrosPorPagina)
}

export const tipoBusqueda = (busquedaRandom, busqueda) => {
    return `${ busquedaRandom !== '' ? busquedaRandom : busqueda}`
}