import { async } from "@firebase/util";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../services/firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';


const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const auth = getAuth(firebaseConfig);
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success('Вы зарегестрированы', {
                position: toast.POSITION.TOP_RIGHT
            });
            setEmail('');
            setPassword('');
        } catch {
            toast.error('Ошибка', {
                position: toast.POSITION.TOP_RIGHT
            });
            console.error(event);
        }
    };

    return <div>
        <ToastContainer />
        <form onSubmit={onSubmit}>
            <h2>Регистрация</h2>
            <TextField
                placeholder="Введите email"
                name="email"
                type="email"
                onChange={handleEmailChange}
                value={email}
                required
            />
            <br />
            <br />
            <TextField
                placeholder="Введите пароль"
                name="password"
                type='password'
                onChange={handlePasswordChange}
                value={password}
                required
            />
            <br />
            <br />
            <div>
                {error && <p>{error}</p>}
                <Button variant="outlined" type="submit">Регистрация</Button>
            </div>
            <p>Уже зарегистрированны?<br /><Link to='login'>Войти</Link></p>
        </form>
    </div>
};

export default Registration;