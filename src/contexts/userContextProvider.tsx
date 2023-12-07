import { ReactNode, createContext, useEffect, useState } from "react";
import { IUser } from "../types/internal/IUser";
import { SignIn } from "../api/authService";
import { GetUser } from "../api/userService";

export interface IUserContext {
    user?:IUser;
    jwt?:string;
    signIn: (email:string, password:string) => Promise<void>;
    signOut: () => void;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

interface IProviderProps {
    children:ReactNode;
}

export function UserContextProvider({ children }:IProviderProps){
    const [user, setUser] = useState<IUser | undefined>(undefined);
    const [jwt, setJwt] = useState<string>();

    useEffect(()=>{
        setJwt(sessionStorage.getItem("accessToken")??"");
        setUser(JSON.parse(sessionStorage.getItem("currentUser")!)??undefined);
    },[]);
    
    async function signIn(email:string, password:string){
        const token = await SignIn({email, password});

        setJwt(token);
        console.log(token);
        sessionStorage.setItem("accessToken", token);

        const user = await GetUser(token);

        setUser(user);
        sessionStorage.setItem("currentUser", JSON.stringify(user));
    }

    function signOut(){
        setUser(undefined);
        setJwt("");
    }

    return (
        <UserContext.Provider value={{ signIn, signOut, user, jwt }}>{children}</UserContext.Provider>
    )
}