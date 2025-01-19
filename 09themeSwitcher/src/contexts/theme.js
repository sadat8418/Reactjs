import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",     //string expect korteci, light
    darkTheme: () => {},   //function(only name likhci) er vitore functionality nai, App.jsx e likhci ..(rules of context api)
    lightTheme: () => {},
})

//provider eikhan thekei direct export, agge App.jsx theke <UserContextProvider> access nicilam
export const ThemeProvider = ThemeContext.Provider

//custom hook , useContext , useContext, userContext 2ta kore lagtecilo every file a .. 
export default function useTheme(){
    return useContext(ThemeContext)
}

//2 file a na kore 1 file a korlam, students confuse hoye jay 