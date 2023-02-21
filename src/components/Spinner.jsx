import { useState, useEffect } from 'react'
import usePixabay from '../hooks/usePixabay'
import { retornarPalabra } from '../helpers/index.js'
import '../css/spinner.css'

function Spinner() {

  // State local
  const [cargar, setCargar] = useState(true)


  // State Global
  const { datosAPI, setBusquedaRandom, setBusqueda } = usePixabay()


  // Si no se encuntra el termino se muestra un spinner y se restablece la busqueda
  useEffect(() => {
    if(datosAPI?.length === 0) {
      setTimeout(() => {
        setCargar(false)
        setTimeout(() => {
          setBusqueda('')
          setBusquedaRandom(retornarPalabra())
        }, 1200);
      }, 1200);
    }
  }, [])
  
  
  return(
    <>
      { cargar ? ( 
        <>
          <h3 className='spinner__heading'>Searching...</h3>
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
      </> ) : <h3 className='spinner__restarting'>Search not found, restarting...</h3> }
    </>
  )
}

export default Spinner