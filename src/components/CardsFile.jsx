import React from 'react'
import { UseCardContext } from '../contextApi/CardContextFile'

const CardsFile = () => {
    // step 8
    const { Theme, ThemeSetFunc } = UseCardContext()
    return (
        <div>
            {/* // step 9 */}
            <div className={`w-96 h-96 border-2 mx-auto my-5 ${Theme ? 'bg-black text-white' : null} `}>
               <p className='text-center pt-10 text-3xl'> {Theme ? 'Background-black' : 'Background-white'}</p>
            </div>
            <div className='text-center '>
                <button onClick={() => ThemeSetFunc()} className='bg-slate-400 border p-2 '>Theme Toggle</button>
            </div>
        </div>
    )
}

export default CardsFile
