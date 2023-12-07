import { useMutation } from "react-query";
import { Register } from "../../../api/userService";
import { IRegisterFormProps } from "../../../types/internal/IRegisterFormProps";
import { IBackendError } from "../../../types/backend/IBackendError";

interface Props {
    onSuccess?: () => void,
    onError?: (error:IBackendError) => void;
}

export function useRegister({onSuccess, onError}:Props){
    const {
        mutate
    } = useMutation((props:IRegisterFormProps) => Register(props), {
        onSuccess: onSuccess,
        onError: onError
    });

    return {
        mutate
    }
}