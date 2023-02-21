# React-Pixabay-Clon
Sobre el proyecto Clon de Pixabay

    Se conecto a la API que proporciona la página de Pixabay para que por medio de la
    búsqueda hecha en un formulario se pueda traer los resultados que estén disponibles
    en la base de datos de Pixabay, esta búsqueda tiene validación para no aceptar campos 
    vacios o para cuando no haya resultados disponibles en la API, algo similar a lo que
    haria la página original.

    Cada vez que la pagina se recargar muestra una lista de fotos diferentes haciendo así que 
    el sitio se tienta mas dinámico.

    Cada card de la lista de fotos que sale por defecto al entrar o recargar el sitio, o de las imágenes
    que salen de las búsquedas tienen la información del nombre de la foto, los likes, comentarios, asi 
    como el id de cada foto. Al dar clic en cualquier imagen se hara otra consulta a la API para buscar
    la información especifica de cada una de las fotos por medio del ID, para esto se rende-riza un componente
    que cambia la vista para que la imagen y su información sean lo principal del sitio.

    El sitio cuenta con una paginacion ya que por cada búsqueda pueden salir hasta un limite de 
    500 imágenes que es el limite que coloca Pixabay y el numero máxima de fotos que se muestran 
    por página/sitio/vista es de 20, ya de allí esta la paginacion.



REACT

    1.- Se utilizaron los Hooks de useState, useEffect y se creo un Context para el manejo de las 
        variables globales con createContext y para usarlo el Hooks de useContext.

    2.- Variable de entorno:
        Se implemeto el uso de una variable de entorno para proteger el key que proporciona
        la API de pixabay y para eso se siguieron los siguientes pasos

        1.- Se creo en la raiz del proyecto el archivo de: 
            .env

        2.- Se declaro la variable de:
            VITE_API_KEY=algunValor 

        3.- Al estar en la raiz del proyecto se puede acceder de manera global a estas variables
            de entorno de la siguiente manera:
            console.log( import.meta.env.VITE_API_KEY )



CSS

    Para este proyecto se utilizo css plano, se descargo el archivo de normalize.css y
    de la pagina se https://tobiasahlin.com/spinkit/ se descargo el spinner de carga para
    cuando haya un error en la búsqueda.



JavaScritp/Funciones

    1.- Ya que cada vez que entras al sitio salen una lista de cards diferentes 
        se implemento una función que tiene un array con 10 diferentes palabras y 
        seleccionada una de ellas al azar para después hacer una consulta a la API
        y mostrar los resultados relacionados a ella.

        const retornarPalabra = () => {
            const imangesRandom = ["Cats", "Coffee", "Cars", "Travels", "Landscapes", "Beach", "Winter", "Birds", "Food", "Ice Cream"]
            const termino = imangesRandom[ Math.floor( Math.random() * 10 ) ]
            return termino
        }

    2.- Calcular el numero de paginaciones [1] [2] [3]... que se requieren por cada busqueda
        const calcularPaginas = (totalHits, registrosPorPagina) => {
            let total = 0
            return total = Math.ceil(totalHits / registrosPorPagina)
        }
    
    3.- Una función que ayuda a saber cuando mostrar la búsqueda random o la búsqueda
          que realizo el usuario (se quiere ver ir al archivo de index.js de carpeta de helpers)
