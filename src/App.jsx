import './App.css'
import CardsFile from './components/CardsFile'
import { usedUserContext } from './contextApi/UserContextFile'
import About from './pages/About'
import Home from './pages/Home'

function App() {

  return (
    <div>
      {/* <h1 className='text-9xl'>{UseTheUserContext.fname}</h1> */}
      {/* <Home/>
      <About/> */}

      <CardsFile/>
    </div>
  )
}

export default App
