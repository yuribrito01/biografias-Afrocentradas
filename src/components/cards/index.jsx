import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import "./styles.css";
import { Link } from "react-router-dom";

export const Card = ({ image, name, description }) => {
  // const favoritos = [];
  // function Favoritar(key) {
  //   favoritos[key] = name;
  // }
  async function favorite(){
    try {
      const docRef = await addDoc(collection(db, "favorites"), {
          name: name,
          image: image,
          description: description
      });
      console.log("Favoritado!");
  } catch (e) {
      console.log("Erro ao adiocnar!");
  }
  }

  return (
    <div class="card">
      <img className="imagem" src={image} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button className="likeButton" onClick={favorite}>
        Curtir
      </button>
      <button className="moreButton">
        <Link to={name}>Saiba Mais</Link>
      </button>
    </div>
  );
};
