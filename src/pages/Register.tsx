import { RegisterForm } from "../components/register/RegisterForm";

export function Register(){
    return (
        <div className="alignCenter">
            <div>
                <h1>Register</h1>   
                <RegisterForm/>
                <a href="/login">Already have an account? Sign In</a>
            </div>
        </div>
    )
}