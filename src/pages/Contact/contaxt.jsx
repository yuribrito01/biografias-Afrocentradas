import { useState } from "react";
import { Navbar } from "../../components/navbar";
import emailjs from "@emailjs/browser"
import "./styles.css"



export const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    function sendEmail (e) {
        e.preventDefault();

        if(name === "" || email === "" || message === ""){
            alert("Preencha todos os campos!!")
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
       
        emailjs.send("service_66zwn03", "template_12aq6jk", templateParams, "WHYqhdiJnFOG74mFY")
        .then(() => {
            alert("Email enviado!")
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {
            alert(err)
        })
    }
    return (
      <div>
        <Navbar></Navbar>
        <div className="contactUs">
        <h1>Entre em contato com a gente </h1>
        <form onSubmit={sendEmail}>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name}/>
            <input type="text" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <textarea cols="30" rows="10" placeholder="Digite sua mensagem" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
            <button>enviar</button>

        </form>
        </div>
        
      </div>
    );
  }