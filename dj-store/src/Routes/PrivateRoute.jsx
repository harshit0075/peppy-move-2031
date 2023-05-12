import React,{useContext} from "react"
import {Navigate} from "react-router-dom"
import { AuthContext } from "../Context/AuthContextProvider"
 function PrivateRoute({children}){
    const {isAuth}=useContext(AuthContext);
    if(!isAuth){
        return <Navigate to="/login"/>
    }
else{
    return children;
}
 }
 export default PrivateRoute