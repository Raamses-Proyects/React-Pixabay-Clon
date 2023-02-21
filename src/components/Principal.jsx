import { useEffect } from 'react'
import ListaImagenes from './ListaImagenes'
import usePixabay from '../hooks/usePixabay'
import { retornarPalabra } from '../helpers/index.js'
import Spinner from './Spinner'


function Principal() {

  // State Global
  const { datosAPI, setDatosAPI, consultarAPI, busquedaRandom, setBusquedaRandom } = usePixabay()


  // Obteniendo la palabra aleatoria
  useEffect(() => { 
    if(datosAPI?.length === 0) {
      setBusquedaRandom(retornarPalabra())
    }
  }, [])
 
  // Consultando API
  useEffect(() => {
    if(datosAPI?.length === 0) {
      consultarAPI(busquedaRandom, setDatosAPI)
    }
  }, [busquedaRandom])

  
  return (
    <main className='imagenes'>
        <div className='contenedor'>
            { datosAPI?.length ? <ListaImagenes /> : <Spinner/> }
        </div>
    </main>
  )
}

export default Principal