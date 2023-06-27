
import { useState } from 'react';
import logoImage from '../../images/Rustic_Printed-removebg-preview.png'
import { Link, Navigate } from "react-router-dom";
import { LayoutComponents } from '../../components/layoutComponents';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import { Loader } from '../../components/loader';


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    function handleSingIn(e) {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setIsLoggedIn(true);
                console.log(userCredential.user);
            })
    }

    if (loading) {
        return <Loader />
    }

    if (user) {
        console.log(user);
        return <Navigate to="/" />
    }

    return (
        <LayoutComponents>
            <form className="formLogin">
                <span className="titleLogin">Boas vindas!</span>

                <span className="titleLogin">
                    <img src={logoImage} ></img>
                </span>

                <div className='containerInput'>
                    <input className={email !== "" ? 'hasVal inputLogin' : 'inputLogin'} type='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <span className='focusInput' data-placeholder='Email'></span>
                </div>

                <div className='containerInput'>
                    <input className={password !== "" ? 'hasVal inputLogin' : 'inputLogin'} type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <span className='focusInput' data-placeholder='Password'></span>
                </div>

                <div className='containerLoginBtn'>
                    <button className='loginFormBtn' onClick={handleSingIn}>Login</button>
                </div>

                <div className='textCenter'>
                    <span className='txt1'>Não possui conta?</span>
                    <Link className="txt2" to="/register">Criar conta.</Link>
                </div>
            </form>
        </LayoutComponents>
    );
}