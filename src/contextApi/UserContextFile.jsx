// import { createContext, useContext, useState } from "react";

// const CreatedUserContext = createContext();

// export function usedUserContext() {
//     return useContext(CreatedUserContext)
// }

// export function UserContextFunc({ children }) {
//     const [darkMode, setDarkMode] = useState(false)
    
//     function setModefunc() {
//         setDarkMode(!darkMode)
//     }
//     return (
//         <CreatedUserContext.Provider value={{ darkMode, setModefunc }}>
//             {children}
//         </CreatedUserContext.Provider>
//     )
// }


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
import { createContext, useContext, useState } from "react";

// Create Context
const CreatedUserContext = createContext();

// Custom Hook
export function usedUserContext() {
    return useContext(CreatedUserContext);
}

// Provider Component
export function UserContextFunc({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    // Toggle function
    function setModefunc() {
        // setDarkMode((prevMode) => !prevMode);
        setDarkMode(!darkMode);
    }

    return (
        <CreatedUserContext.Provider value={{ darkMode, setModefunc }}>
            {children}
        </CreatedUserContext.Provider>
    );
}
