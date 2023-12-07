import { LoginForm } from "../components/login/LoginForm";

export function Login() {
    return (
        <div className="alignCenter">
            <div>
                <h1>Sign in</h1>
                <LoginForm/>
                <a href="/register">Don't have an account? Sign Up</a>
            </div>
        </div>
    )
}