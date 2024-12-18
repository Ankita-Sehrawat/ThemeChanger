import React from 'react'
import { usedUserContext } from '../contextApi/UserContextFile'

const UserCard = () => {
    const { darkMode, setModefunc, data } = usedUserContext()
    return (
        <div>
            <div className={`w-96 h-[50vh] my-5 mx-auto p-3 border border-black ${darkMode ? 'bg-black text-white' : null}`}>
                <h1 className='text-3xl text-center'>{data.title}</h1>
                <p className='text-sm text-center mt-5 line-clamp-2'>{data.lorem}</p>
            </div>
            <div className='text-center my-5'>
                <button onClick={() => setModefunc()} className='border border-black bg-slate-300 p-2 me-5 '>Toggle themes</button>
            </div>
        </div>
    )
}

export default UserCard
