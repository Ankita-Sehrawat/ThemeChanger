// import React from 'react'
// import { usedUserContext } from '../contextApi/UserContextFile'

// const Home = () => {
//     const useDarkMode = usedUserContext()
//     return (
//         <div className={`${useDarkMode ? 'bg-green-700 text-white' : null} h-[50vh]  `}>
//             <h1 className='text-6xl'>this is home page.</h1>
//         </div>
//     )
// }

// export default Home


// import React, { useState } from 'react'
// import { usedUserContext } from '../contextApi/UserContextFile'

// const Home = () => {
//     const useMode = usedUserContext()


//     return (
//         <div>
//             <div className={`w-96 h-[50vh] my-5 mx-auto ${useMode ? 'bg-black text-white' : 'bg-white text-black'}`}> </div>
//             <div className='text-center my-5'>
//                 <button onClick={() => useMode()} className='border border-black bg-slate-300 p-2 me-5 '>Dark Mode</button>
//                 <button onClick={() => useMode()} className='border border-black bg-slate-300 p-2 me-5 '>Light Mode</button>
//             </div>
//         </div>
//     )
// }

// export default Home


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
import React from 'react';
import { usedUserContext } from '../contextApi/UserContextFile';

const Home = () => {
    const { darkMode, setModefunc } = usedUserContext();

    return (
        <div>
            <div className={`w-96 h-[50vh] my-5 mx-auto border-2 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                {darkMode ? "Dark Mode Active" : "Light Mode Active"}
            </div>
            <div className="text-center my-5">
                <button onClick={setModefunc} className="border border-black bg-slate-300 p-2 me-5">
                    Toggle Dark/Light Mode
                </button>
            </div>
        </div>
    );
};

export default Home;

