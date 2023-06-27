import { Navbar } from "../../components/navbar"
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { useState } from "react";
import "./styles.css"




export const NewPerson = () => {
    const [namePerson, setNamePerson] = useState("");
    const [image, setImage] = useState("");
    const [smallDescriptiopn, setSmallDescriptiopn] = useState("");
    const [longDescription, setLongDescription] = useState("");

    function showToast(text) {
        var toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = text;

        var container = document.getElementById('toastContainer');
        container.appendChild(toast);

        toast.classList.add('show');

        setTimeout(function () {
            toast.classList.remove('show');
            container.removeChild(toast);
        }, 3000);
    }

    async function addInBd(e) {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "honored"), {
                name: namePerson,
                image: image,
                smallDescriptiopn: smallDescriptiopn,
                longDescription: longDescription
            });
            showToast("Novo Homenagiado adicionado a lista!");
        } catch (e) {
            showToast("Erro ao adiocnar!");
        }
    }

    return (
        <div>
            <div id="toastContainer"></div>
            <Navbar />
            <h1>Adicione uma nova pessoa homeageada!</h1>
            <div>
                <form action="">
                    <input type="text" placeholder="Nome" value={namePerson} onChange={e => setNamePerson(e.target.value)} />
                    <input type="text" placeholder="Breve Descrição" value={smallDescriptiopn} onChange={e => setSmallDescriptiopn(e.target.value)} />
                    <input type="url" placeholder="Imagem" value={image} onChange={e => setImage(e.target.value)} />
                    <input type="text" placeholder="Descrição completa" value={longDescription} onChange={e => setLongDescription(e.target.value)} />
                    <button onClick={(e) => {addInBd(e)}}>Enviar</button>

                </form>
            </div>
        </div>
    )
}