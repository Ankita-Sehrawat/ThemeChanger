import React, { createContext, useContext, useState } from 'react'

// step 1
const CardContextCreated = createContext()

// step 7
export function UseCardContext() {
   return useContext(CardContextCreated)
}
// step 2
export default function CardContextFile({ children }) {
    // step 5
    const [Theme, setTheme] = useState(false)
    function ThemeSetFunc() {
        setTheme(!Theme)
    }
    return (
        // step 4                               // step 6
        <CardContextCreated.Provider value={{ Theme, ThemeSetFunc }}>
            {children}
        </CardContextCreated.Provider>
    )
}

