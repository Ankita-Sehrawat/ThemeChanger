import { createContext, useContext, useState } from "react";

const CreatedUserContext = createContext();

export function usedUserContext() {
    return useContext(CreatedUserContext)
}

export function UserContextFunc({ children }) {
    const [darkMode, setDarkMode] = useState(false)
    const data= {
        title:"Theme",
            lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cumque, qui, unde ratione suscipit at inventore quae magnam porro non doloribus iste, incidunt quaerat reiciendis? Laboriosam provident nihil eligendi suscipit."
        }
    
    function setModefunc() {
        setDarkMode(!darkMode)
    }
    return (
        <CreatedUserContext.Provider value={{ darkMode, setModefunc,data }}>
            {children}
        </CreatedUserContext.Provider>
    )
}


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// import { createContext, useContext, useState } from "react";


// const CreatedUserContext = createContext();


// export function usedUserContext() {
//     return useContext(CreatedUserContext);
// }


// export function UserContextFunc({ children }) {
//     const [darkMode, setDarkMode] = useState(false);

  
//     function setModefunc() {
//         // setDarkMode((prevMode) => !prevMode);
//         setDarkMode(!darkMode);
//     }

//     return (
//         <CreatedUserContext.Provider value={{ darkMode, setModefunc }}>
//             {children}
//         </CreatedUserContext.Provider>
//     );
// }
