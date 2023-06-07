import { LayoutComponents } from "../../components/layoutComponents";
import logoImage from "../../images/Rustic_Printed-removebg-preview.png"
import { useState } from "react";
import { Link } from "react-router-dom";





export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    return (
        <LayoutComponents>
            <form className="formLogin">
                <span className="titleLogin">Criar Conta!</span>

                <span className="titleLogin">
                    <img src={logoImage} ></img>
                </span>

                <div className='containerInput'>
                    <input className={name !== "" ? 'hasVal inputLogin' : 'inputLogin'} type='name' value={name} onChange={e => setName(e.target.value)} />
                    <span className='focusInput' data-placeholder='Nome'></span>
                </div>

                <div className='containerInput'>
                    <input className={email !== "" ? 'hasVal inputLogin' : 'inputLogin'} type='email' value={email} onChange={e => setEmail(e.target.value)} id="emailRegister" />
                    <span className='focusInput' data-placeholder='Email'></span>
                </div>

                <div className='containerInput'>
                    <input className={password !== "" ? 'hasVal inputLogin' : 'inputLogin'} type='password' value={password} onChange={e => setPassword(e.target.value)} id="passwordRegister"/>
                    <span className='focusInput' data-placeholder='Senha'></span>
                </div>

                <div className='containerLoginBtn'>
                    <button className='loginFormBtn'>Cadastrar</button>
                </div>

                <div className='textCenter'>
                    <span className='txt1'>Já possui uma conta?</span>
                    <Link className="txt2" to="/login">Fazer Login</Link>
                </div>
            </form>
        </LayoutComponents>
    );
}