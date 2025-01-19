import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {   //div 
    const [user, setUser] = React.useState(null) //api calls kore, ja value access paici niche diye dao, useState hook import o kora jay
    return(
        //contextProvider, ki data access korbe ... 
        <UserContext.Provider value={{user, setUser}}>  
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider