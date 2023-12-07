import { useState } from "react"
import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../utils/hooks/useUserContext";
import { IBackendError } from "../../types/backend/IBackendError";

export function LoginForm(){
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const [submitError, setSubmitError] = useState<IBackendError|undefined>(undefined);

    const { signIn } = useUserContext();

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        setLoading(true);
        
        signIn(email, password)
            .then(()=>{
                navigate("/");
            })
            .catch((error:IBackendError)=>{
                setSubmitError(error);
            });

        setLoading(false);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} style={{width: '60vw'}}>
                    <TextField fullWidth value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" label="Email Address" required type="email"/>
                    <TextField fullWidth value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" label="Password" required type="password"/>
                    <Button fullWidth type="submit" variant="contained" disabled={loading}>{loading?"Loading...":"Sign In"}</Button>
                    <p>{submitError?.response.data.message}</p>
                </Stack>
            </form>
        </>
    )
}