import { useState } from 'react';
import logoImage from './images/Rustic_Printed-removebg-preview.png'
import './styles.css'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='container'>
      <div className="containerLogin">
        <div className="wrapLogin">
          <form className="formLogin">
            <span className="titleLogin">Boas vindas!</span>

            <span className="titleLogin">
              <img src={logoImage} ></img>
            </span>

            <div className='containerInput'>
              <input className={email !== "" ? 'hasVal inputLogin' : 'inputLogin'} type='email' value={email} onChange={e => setEmail(e.target.value)}/>
              <span className='focusInput' data-placeholder='Email'></span>
            </div>

            <div className='containerInput'>
              <input className={password !== "" ? 'hasVal inputLogin' : 'inputLogin'} type='password' value={password} onChange={e => setPassword(e.target.value)}/>
              <span className='focusInput' data-placeholder='Password'></span>
            </div>

            <div className='containerLoginBtn'>
              <button className='loginFormBtn'>Login</button>
            </div>

            <div className='textCenter'>
              <span className='txt1'>Não possui conta?</span>
              <a className='txt2' href="#">Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
