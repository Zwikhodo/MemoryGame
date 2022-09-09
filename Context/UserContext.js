import { createContext, useEffect, useReducer } from "react";
import { userReducer } from "../Reducer/Reducer";

export const UserContext = createContext(null);

const UserContextProvider  = (props) =>{
    const [users, dispatch] = useReducer(userReducer, [], () => {
    const localData = localStorage.getItem ('users');
    return localData ? JSON.parse(localData) : [];
    
} )

useEffect(() =>{
    localStorage.setItem('users', JSON.stringify(users));
}, [users])

return(
    <UserContext.Provider value= {{users, dispatch}}>
        {props.children}
    </UserContext.Provider>
)
}