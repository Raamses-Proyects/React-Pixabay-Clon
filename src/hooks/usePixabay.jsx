import { useContext } from 'react'
import PixabayContext from '../context/PixabayProvider'

const usePixabay = () => {
    return useContext(PixabayContext)
}

export default usePixabay
