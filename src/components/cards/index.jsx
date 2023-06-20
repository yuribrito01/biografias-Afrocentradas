import "./styles.css";
import { Link } from "react-router-dom";

export const Card = ({ key, image, name, description }) => {
  return (
    <div class="card">
      <img src={image} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button className="likeButton">curtir</button>
      <button className="moreButton">
        <Link to={name}>Saiba Mais</Link>
      </button>
    </div>
  );
};
