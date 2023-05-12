import React, {createContext, useState} from 'react'
export const AuthContext=createContext();

export default function AuthContextProvider({children}) {

  const [token,setToken]=useState("");
  const [isAuth,setIsAuth]=useState(false);
  function logOut(){
    setIsAuth(false);
  }
  return (
    <AuthContext.Provider value={{token,setToken,isAuth,setIsAuth}}>
      {children}
    </AuthContext.Provider>
  )
}