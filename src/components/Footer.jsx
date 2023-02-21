import React from 'react'
import SeparadorSeccion from './SeparadorSeccion'

function Footer() {
  return (
    <>
     <footer className='footer'>
        <SeparadorSeccion texto={'Terms of Service'}/>
        <div className='footer__grid contenedor'>
            <div className='footer__bloque'>
                <h3 className='footer__heading'>Pixabay</h3>
                <p className='footer__texto'>Over 3 million+ high quality stock images, videos and music shared by our talented community.</p>
            </div>
            <div className='footer__bloque'>
                <div className='footer__nav'>
                    <h4 className='footer__heading-nav'>Discover</h4>
                    <p className='footer__enlace'>Editor's Choice</p>
                    <p className='footer__enlace'>Curated Collections</p>
                    <p className='footer__enlace'>Popular Images</p>
                    <p className='footer__enlace'>Popular Videos</p>
                    <p className='footer__enlace'>Popular Music</p>
                    <p className='footer__enlace'>Popular Searches</p>
                </div>
                <div className='footer__nav'>
                    <h4 className='footer__heading-nav'>Community</h4>
                    <p className='footer__enlace'>Blog</p>
                    <p className='footer__enlace'>Forum</p>
                    <p className='footer__enlace'>Creators</p>
                    <p className='footer__enlace'>Cameras</p>
                </div>
                <div className='footer__nav'>
                    <h4 className='footer__heading-nav'>About</h4>
                    <p className='footer__enlace'>About Us</p>
                    <p className='footer__enlace'>FAQ</p>
                    <p className='footer__enlace'>License</p>
                    <p className='footer__enlace'>Terms of Service</p>
                    <p className='footer__enlace'>Privacy Policy</p>
                    <p className='footer__enlace'>Cookies Policy</p>
                    <p className='footer__enlace'>API</p>
                </div>
            </div>
        </div>
    </footer>
    </>
   
  )
}

export default Footer