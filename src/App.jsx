import './App.css'
import CardsFile from './components/CardsFile'
import UserCard from './components/UserCard'
import { usedUserContext } from './contextApi/UserContextFile'
import About from './pages/About'
import Home from './pages/Home'

function App() {

  return (
    <div>

      {/* <Home/>
      <About/> */}

      <div className='flex justify-between items-center px-10'>
        <CardsFile/>
        <UserCard/>
      </div>

    </div>
  )
}

export default App
