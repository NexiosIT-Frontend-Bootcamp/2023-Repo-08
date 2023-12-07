import axios from "axios";
import { ILoginFormProps } from "../types/internal/ILoginFormProps";
import { ISignInProps } from "../types/backend/ISignInProps";

export async function SignIn(props:ILoginFormProps):Promise<string>{
    const data = await axios.post<ISignInProps>("/auth/login", props);
    return data.data.access_token;
}