import { createContext, useContext } from "react";

export const ThemeContext = createContext({  // agge(UserContent.js) faka chilo , ekhon default value dialm
    themeMode: "light",    //variable (ex: user), //string expect korteci, light
    darkTheme: () => {},   // method ( ex: setUser) //function(only name likhci) er vitore functionality nai, App.jsx e likhci ..(rules of context api)
    lightTheme: () => {},
})

//provider eikhan thekei direct export, agge App.jsx theke <UserContextProvider> access nicilam
export const ThemeProvider = ThemeContext.Provider

//custom hook ,agge useContext , userContext 2ta kore lagtecilo every file a ..,ekhon useTheme import korlei cholbe 
export default function useTheme(){
    return useContext(ThemeContext)
}

//2 file a na kore 1 file a korlam, students confuse hoye jay 