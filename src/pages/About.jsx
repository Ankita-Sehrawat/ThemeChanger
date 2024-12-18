import React from 'react'
import { usedUserContext } from '../contextApi/UserContextFile'

const About = () => {
    const bgChange = usedUserContext()

    return (
        <div className={`${bgChange ? 'bg-red-700 text-white' : null} h-[40vh]`}>
            <div className='text-6xl'>this is about page.</div>
        </div>
    )
}

export default About
