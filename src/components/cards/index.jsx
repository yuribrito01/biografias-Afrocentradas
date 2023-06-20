import "./styles.css";
import { Link } from "react-router-dom";

export const Card = ({ key, image, name, description, curtir }) => {
  const favoritos = [];
  function Favoritar(key) {
    favoritos[key] = name;
  }
  return (
    <div class="card">
      <img src={image} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button className="likeButton" onClick={Favoritar(key)}>
        {curtir}
      </button>
      <button className="moreButton">
        <Link to={name}>Saiba Mais</Link>
      </button>
    </div>
  );
};
