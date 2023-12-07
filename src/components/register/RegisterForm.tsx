import { TextField, Stack, Button } from "@mui/material";
import { useState } from "react";
import { useRegister } from "../../utils/hooks/userService/useRegister";
import { useNavigate } from "react-router-dom";
import { IBackendError } from "../../types/backend/IBackendError";

export function RegisterForm(){
    const navigate = useNavigate();

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [submitError, setSubmitError] = useState<IBackendError|undefined>(undefined);

    const {mutate} = useRegister({onSuccess, onError});

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if(password !== passwordConfirm){
            setPasswordError(true);
        }
        else{
            setLoading(true);
            mutate({username, email, password, passwordConfirm});
        }
    }

    function onSuccess(){
        setLoading(false);
        navigate("/login");
    }

    function onError(error:IBackendError){
        setLoading(false);
        setSubmitError(error);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} style={{width: '60vw'}}>
                <TextField fullWidth value={username} onChange={(e) => setUsername(e.target.value)} label={'Username'} required/>
                <TextField fullWidth value={email} onChange={(e) => setEmail(e.target.value)} label={'Email Address'} required type="email"/>
                <TextField fullWidth value={password} onChange={(e) => setPassword(e.target.value)} label={'Password'} required error={passwordError} helperText={passwordError&&"Passwords do not match"} type="password"/>
                <TextField fullWidth value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} label={'Confirm Password'} required error={passwordError} helperText={passwordError&&"Passwords do not match"} type="password"/>
                <Button fullWidth type='submit' variant="contained" disabled={loading}>{loading?"Loading...":"Sign Up"}</Button>
                <p>{submitError?.response.data.message}</p>
                </Stack>
            </form>
        </>
    )
}