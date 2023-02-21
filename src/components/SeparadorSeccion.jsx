import React from 'react'

function SeparadorSeccion({texto}) {
  return (
    <div className='imagenes__seccion'>
        <div className='imagenes__line'></div>
        <p className='imagenes__span'>{texto}</p>
    </div>
  )
}

export default SeparadorSeccion