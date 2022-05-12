import { async } from "@firebase/util";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../hooks/AuthProvider";

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const auth = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let from = location.state?.from?.pathname || '/';

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            await auth.signin({ email, password }, () => {
                setTimeout(() => navigate(from, { replace: true }), 2000)
            })
        } catch (e) {
            toast.error('Ошибка');
            setError(e);
            console.error(e);
        }
    };

    return <div>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
            <h1>Вход</h1>
            <p>Введите логин и пароль</p>
            <div>
                <TextField
                    placeholder="Введите email"
                    name="email"
                    type={email}
                    value={email}
                    onChange={handleEmail}
                    required
                />
                <div>
                    <TextField
                        placeholder="Введите пароль"
                        name="password"
                        type='password'
                        value={password}
                        onChange={handlePassword}
                        required
                    />
                </div>
                <br />
                <br />
                {error && <p>{error}</p>}
                <Button variant="outline" type="submit">Войти</Button>
            </div>
        </form>
    </div>
};

export default Login; 