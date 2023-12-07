import axios from "axios";
import { useUserContext } from "../utils/hooks/useUserContext";
import { ReactNode } from "react";

interface Props {
    children:ReactNode
}

export function AxiosDefaultsContextProvider({children}:Props){
    const { jwt } = useUserContext();

    axios.defaults.baseURL = 'https://lobster-app-osqfh.ondigitalocean.app/';
    axios.defaults.headers.common['Authorization'] = 'bearer '+ jwt;

    return (
        <>{children}</>
    )
}