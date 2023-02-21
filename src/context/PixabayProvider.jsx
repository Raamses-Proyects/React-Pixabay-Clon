import { useEffect } from 'react'
import { useState, createContext } from 'react'
import { calcularPaginas, tipoBusqueda } from '../helpers/index.js'


// Declarando Context (variable con la que se manda a llamar el context/variables globales)
const PixabayContext = createContext()


// Provider (fuentes de los datos)
const PixabayProvider = ({children}) => {
    
    // Variables
    const registrosPorPagina = 21
    const key = import.meta.env.VITE_API_KEY


    // States Globales
    const [datosAPI, setDatosAPI] = useState( [] ) 
    const [busqueda, setBusqueda] = useState('')
    const [busquedaRandom, setBusquedaRandom] = useState('')
    const [totalPaginas, setTotalPaginas] = useState(0)
    const [paginaActual, setPaginaActual] = useState(1)
    const [imagenIndividual, setImagenIndividual] = useState([])
    const [mostrar, setMostrar] = useState(false)
    const [error, setError] = useState(false) // error de termino de busqueda


    // Consultar API para la busqueda con multiples resultados
    const consultarAPI = (terminoBusqueda, guardarDatosAPI) => {
        if(terminoBusqueda !== "") {
            const url = `https://pixabay.com/api/?key=${key}&q=${terminoBusqueda}&per_page=${registrosPorPagina}&page=${paginaActual}`
            
            fetch(url)
            .then( respuesta => respuesta.json() )
            .then( resultado => {
                setTotalPaginas(calcularPaginas(resultado.totalHits, registrosPorPagina))
                guardarDatosAPI(resultado.hits)
            } )
            .catch( error => console.error(error) )
        }
    }
    useEffect(() => { // Actualizando el numero de pagina seleccionada
        consultarAPI(tipoBusqueda(busquedaRandom, busqueda), setDatosAPI)
    }, [paginaActual])


    // Consultar API por ID
    const consultarApiId = (id) => {
        const url = `https://pixabay.com/api/?key=${key}&id=${id}`
        fetch(url)
            .then( respuesta => respuesta.json() )
            .then( datosAPI => setImagenIndividual(datosAPI.hits) )
            .catch( error => console.error(error) )
    }


    return (
        <PixabayContext.Provider
            value={{
                datosAPI,
                setDatosAPI,
                busqueda,
                setBusqueda,
                busquedaRandom,
                setBusquedaRandom,
                consultarAPI,
                totalPaginas,
                setPaginaActual,
                consultarApiId,
                setImagenIndividual,
                imagenIndividual,
                setMostrar,
                mostrar,
                setError,
                error
            }}
        >
            {children}
        </PixabayContext.Provider>
    )
}


// Exportando
export {
    PixabayProvider
}
export default PixabayContext