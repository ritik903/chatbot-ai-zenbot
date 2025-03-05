import { createContext, useState } from "react";

export const bioContext = createContext()


export const Biocontext = ({ children }) => {
    const [theme, setTheme] = useState("Dark")
    const handleToggleBtn = () => {
        setTheme((prevTheme) => prevTheme === "Dark" ? "light" : "Dark")
    }


    return <bioContext.Provider value={{theme, handleToggleBtn}}>
        {children}
    </bioContext.Provider>
}