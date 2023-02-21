import React, { Fragment } from 'react'
import usePixabay from '../hooks/usePixabay'
import { Form } from './Header'


function ImagenIndividual() {

  // State Global
  const { imagenIndividual, setImagenIndividual, setMostrar } = usePixabay()


  // Funciones
  const volver = (e) => {
    e.preventDefault()
    setImagenIndividual([])
    setMostrar(false)
  }


  return (
   <>
        <header className='header-indi'>
            <div className='header-indi__grid'>
                <h1 className='header-indi__heading'>Pixabay</h1>
                <Form/>
            </div>
        </header>

        { imagenIndividual.map((dato) => {
            const { user, userImageURL, likes, largeImageURL, views, tags, comments, id } = dato
            return <Fragment key={id}>
                    
                <a href='#' className='volver' onClick={ volver }> <span>⇦</span> Return</a>

                <h3 className='heading'>{tags} / <span className='heading__span'>Views {views}</span> </h3>
                <div className='individual'>
                    <div className='individual__imagen'>
                        <img 
                            className="individual__img"
                            src={largeImageURL}
                            width="400" 
                            height="250" 
                            alt={tags}
                        />
                    </div>

                    <div className='individual__contenido'>
                        <div className='individual__grid'>
                            <div className='info-user'>
                                <img className='info-user__img' src={userImageURL} width="50" height="50" alt={user} />
                                <h3 className='info-user__texto'>By <span className='info-user__span'>{user}</span></h3>
                            </div>

                            <div className='info-img'>
                                <p className='imagenes__texto imagenes__texto--indi like' title='Likes'>{likes}</p>
                                <p className='imagenes__texto imagenes__texto--indi comment' title='Comments'>{comments}</p>
                            </div>
                        </div>

                        <div className='individual__contenedor-enlace'>
                            <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className='individual__download' title='Download image'>Free Download</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        }) }
    </>
  )
}

export default ImagenIndividual