import { LayoutComponents } from "../../components/layoutComponents";
import logoImage from "../../images/Rustic_Printed-removebg-preview.png"
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, db } from "../../services/firebaseConfig";
import { Loader } from "../../components/loader";
import { addDoc, collection } from "firebase/firestore";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      async function handleRegister(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
        try {
            const docRef = await addDoc(collection(db, "users"), {
                name: name,
                email: email
            });
            console.log("Novo usuario adicionado!");
        } catch (e) {
            console.log("Erro ao adiocnar!");
        }
      }

      if(loading) {
        return <Loader />;
      }

      if(user) {
        return <Navigate to="/" />
      }

      

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
                    <button className='loginFormBtn' onClick={handleRegister}>Cadastrar</button>
                </div>

                <div className='textCenter'>
                    <span className='txt1'>Já possui uma conta?</span>
                    <Link className="txt2" to="/login">Fazer Login</Link>
                </div>
            </form>
        </LayoutComponents>
    );
}