import { PixabayProvider } from './context/PixabayProvider'
import AppPixabay from './components/AppPixabay'

function App() {

  return (
    <PixabayProvider>
      <AppPixabay/>
    </PixabayProvider>
  )
}

export default App