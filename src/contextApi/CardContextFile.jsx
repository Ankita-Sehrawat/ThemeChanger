import React, { createContext, useContext, useState } from 'react'

// step 1
const CardContextCreated = createContext()

// step 6
export function UseCardContext() {
   return useContext(CardContextCreated)
}
// step 2
export default function CardContextFile({ children }) {
    // step 4
    const [Theme, setTheme] = useState(false)
    function ThemeSetFunc() {
        setTheme(!Theme)
    }
    return (
        // step 3                               // step 5
        <CardContextCreated.Provider value={{ Theme, ThemeSetFunc }}>
            {children}
        </CardContextCreated.Provider>
    )
}

