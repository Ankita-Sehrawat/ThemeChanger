import React from 'react'
import { usedUserContext } from '../contextApi/UserContextFile'

const Home = () => {
    const useDarkMode = usedUserContext()
    return (
        <div className={`${useDarkMode ? 'bg-green-700 text-white' : null} h-[50vh]  `}>
            <h1 className='text-6xl'>this is home page.</h1>
        </div>
    )
}

export default Home



