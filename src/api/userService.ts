import axios from "axios";
import { IRegisterFormProps } from "../types/internal/IRegisterFormProps";
import { IUser } from "../types/internal/IUser";

export async function GetUser(token:string){
    const data = await axios.get<IUser>("/users/profile", {
        headers: {
            Authorization: 'bearer ' + token
        }
    });
    return data.data;
}

export async function Register(props:IRegisterFormProps){
    await axios.post("/users", props);
}