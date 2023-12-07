import { useContext } from "react";
import { IUserContext, UserContext } from "../../contexts/userContextProvider";

export function useUserContext():IUserContext {
    const context = useContext<IUserContext | undefined>(UserContext);

    if(!context) {
        throw new Error("User context must be used within a Provider");
    }

    return context;
}