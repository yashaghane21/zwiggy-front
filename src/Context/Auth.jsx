import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const AuthContext=createContext();
const Authprovider=({children})=>{
    const [auth,setauth]=useState({
        user:null,
        token:"",
    });



    useEffect(()=>{
    
      const data  =localStorage.getItem("auth")   
     if(data){
        const parseData =JSON.parse(data);
        setauth({
            ...auth,
            user:parseData.user,
            token:parseData.token,
        });

     } },[]);
     return (
        <AuthContext.Provider value={[auth,setauth]}>
            {children}
        </AuthContext.Provider>
     );
};

const useAuth = () =>useContext(AuthContext);
export {useAuth,Authprovider};