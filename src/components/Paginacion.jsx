import usePixabay from '../hooks/usePixabay'


function Paginacion() {  

  // State global
  const { totalPaginas, setPaginaActual } = usePixabay()
  

  // Funciones
  function listaPaginas(total) {
    let array = []
    for(let i = 1; i <= total; i++) {
      array.push(i)
    }
    return array
  }


  return (
    <div className='paginacion contenedor'>
      { listaPaginas(totalPaginas).map((i) => {
      return <a 
        key={i}
        href='#'
        dataset-pagina={i}
        value={i}
        className="paginacion__enlaces"
        onClick={ () => {
          setPaginaActual(i)
        } }
      >{i}</a>
    }) }
    </div>
  )
}

export default Paginacion