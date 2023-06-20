import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar"
import carolina from "../../images/carolina.webp"
import marielle from "../../images/marielle-franco.webp"
import miltom from "../../images/milton_santos.webp"
import machado from "../../images/machado-de-assis.webp"
import dandara from "../../images/capa_dandara.jpeg"
import abdias from "../../images/abdias-do-Nascimento.jpg"



export const PersonBigraphy = ({ person }) => {
  const imageMap = {
    "carolina": carolina,
    "marielle": marielle,
    "miltom": miltom,
    "machado": machado,
    "dandara": dandara,
    "abdias": abdias
  };
  const image = imageMap[person.image] || null;
  return (

    <div class="detailBiography">
      <Navbar></Navbar>
      <div className="infosPerson">
        <img src={image} />
        <h2>{person.name}</h2>
        <p>{person.longDescription}</p>
        <p>{person.life}</p>
      </div>
    </div>
  );
}