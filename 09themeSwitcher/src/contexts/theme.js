import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

//provider eikhan thekei direct export, agge App.jsx theke <UserContextProvider> access nicilam
export const ThemeProvider = ThemeContext.Provider

//custom hook , useContext , useContext, userContext 2ta kore lagtecilo every file a .. 
export default function useTheme(){
    return useContext(ThemeContext)
}

//2 file a na kore 1 file a korlam, students confuse hoye jay 