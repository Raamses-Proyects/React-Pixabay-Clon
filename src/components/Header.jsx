import Alerta from './Alerta.jsx'
import usePixabay from '../hooks/usePixabay'


export function Form() {

  // State global
  const { setDatosAPI, 
          busqueda, 
          setBusqueda, 
          consultarAPI, 
          setBusquedaRandom, 
          setPaginaActual, 
          setImagenIndividual, 
          setMostrar, 
          setError } = usePixabay()

  
  // Funciones
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validando
    if( busqueda.trim() === '' ) {
        setError(true)
        setTimeout(() => {
            setError(false)
        }, 3000);
        return
    }
    setError(false)
    setBusquedaRandom('')
    setPaginaActual(1)

    // Reiniciando pagina individual
    setImagenIndividual([])
    setMostrar(false)

    // Consultando API
    consultarAPI(busqueda, setDatosAPI)

    // Reiniciando la busqueda
    // setBusqueda('')
    // document.querySelector('.formulario').reset()
  }


  return(
    <form className='formulario' onSubmit={ handleSubmit }>
        <input className='formulario__input' 
               onChange={ (e) => setBusqueda(e.target.value) }
               type="text" 
               placeholder='Search for all images on Pixabay'
               value={busqueda} />
        <button className='formulario__submit' type='submit' title='Search'>
            <span className='formulario__icon'></span>
        </button>
    </form>
  )
}


function Header() {

  // State global
  const { error } = usePixabay()

  return (
    <header className='header'>
        <div className='contenedor'>
            <h1 className='header__heading'>Pixabay</h1>

            <div className='header__datos'>

                <div className='header__contenido'>
                    <h2 className='header__descripcion'>Stunning free images & royalty free stock</h2>
                    <p className='header__texto'>Over 2.7 million+ high quality stock images, videos and music shared by our talented community.</p>
                    <Form/>
                    { error ? 
                        <Alerta
                            error={error}
                            tipo={'warning'}
                            mensaje={"Enter a search term"}
                            /> 
                        : null }
                </div>

                <div className='derechos'>
                    <div className='derechos__grid'>
                        <div className='derechos__bloque'>
                            <p className='derechos__enlace'>Read more about the <span>Pixabay Licence</span></p>
                        </div>
                        <div className='derechos__bloque'>
                            <p className='derechos__texto'>Free image by Pixabay</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </header>
  )
}

export default Header