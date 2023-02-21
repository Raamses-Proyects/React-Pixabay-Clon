import usePixabay from '../hooks/usePixabay'
import SeparadorSeccion from './SeparadorSeccion'

function ListaImagenes() {

  // State global
  const { datosAPI, consultarApiId, setMostrar } = usePixabay()

  
  return (
    <>
        <SeparadorSeccion texto={'Discover with Pixabay'} />
      
        <div className='imagenes__grid'>
            { datosAPI.map((dato) => {
                const { id, largeImageURL, tags, likes, comments } = dato
                return (
                    <div className='imagenes__card' id={id} key={id}>
                        <div className='imagenes__contenedor'>
                            <a href="#" title='Go to image'>
                                <img 
                                className="imagen__img"
                                loading="lazy" 
                                src={largeImageURL}
                                width="400" 
                                height="250" 
                                alt={tags}
                                onClick={ (e) => {
                                    e.preventDefault()
                                    consultarApiId(id)
                                    setMostrar(true)
                                } }
                                />
                            </a>

                            <div className='imagenes__info'>
                                <div className='imagenes__info__grid'>
                                    <p className='imagenes__texto' title='name'>{tags}</p>
                                    <p className='imagenes__texto like' title='Likes'>{likes}</p>
                                    <p className='imagenes__texto comment' title='Comments'>{comments}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
            }) }
        </div>
    </>
  )
}

export default ListaImagenes