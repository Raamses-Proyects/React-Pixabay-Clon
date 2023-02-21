import React from 'react'
import Header from './Header'
import Principal from './Principal'
import Paginacion from './Paginacion'
import usePixabay from '../hooks/usePixabay'
import ImagenIndividual from './ImagenIndividual'
import Footer from './Footer'

function AppPixabay() {

  // State Global
  const { mostrar } = usePixabay()

  return (
    <>
      { !mostrar ?
      <>
        <Header/>
        <Principal/>
        <Paginacion/>
        <Footer/>
      </>
      : 
      <>
        <ImagenIndividual/>
        <Footer/>
      </> }
    </>
  )
}

export default AppPixabay